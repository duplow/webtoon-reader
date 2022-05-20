import { ISourceProvider, ICatalogOptions, ICatalogResponse } from '../core/ISourceProvider'
import { IWorkDetails } from '../core/IWorkDetails';
import { IWorkChapterDetails } from '../core/IWorkChapterDetails';
import axios, { AxiosInstance } from 'axios'
import cheerio from 'cheerio'

const removeBreaklines = (s: string): string => {
  return s.replace(/(\r\n|\n|\r|\t)/gm, '')
}

export const parseWorkDetails = (workUrl: string, html: string): IWorkDetails => {
  const $ = cheerio.load(html)

  const chapters = $('ul.main.version-chap li.wp-manga-chapter').toArray()
    .map(function(el) {
      return $(el).children('a').first().attr('href')
    })
    .reverse()

  return {
    title: removeBreaklines($('.post-title > h1').html().replace('<span class="manga-title-badges hot">HOT</span>', '') || '').trim(),
    //altTitles?: string[],
    sinopse: ($('meta[property="og:description"]').attr('content') || '').trim(),
    //rating?: number,
    coverUrl: $('.tab-summary .summary_image img').attr('data-src'),
    chaptersCount: chapters.length,
    //readingOrietation?: ReadingOrientation,
    //readingMode?: ReadingMode,
    latestChapter: {
      workUrl: workUrl,
      chapterUrl: chapters[chapters.length - 1],
    },
    firstChapter: {
      workUrl: workUrl,
      chapterUrl: chapters[0],
    },
    chapters: chapters.map((chapterUrl) => ({ workUrl, chapterUrl })),
  } as IWorkDetails
}

export const parseChapterDetails = (workUrl: string, chapterUrl: string, html: string): IWorkChapterDetails => {
  const $ = cheerio.load(html)
  const pages = $('.reading-content .page-break img').toArray()
    .map((el) => {
      return $(el).attr('data-src') || ''
    })
    .map((imageUrl, index) => {
      return {
        workUrl,
        chapterUrl,
        pageNumber: index + 1,
        pageUrl: null,
        imageUrl: removeBreaklines(imageUrl).trim(),
      }
    })

  const previousChapterUrl = $('a.btn.prev_page').attr('href') || ''
  const nextChapterUrl = $('a.btn.next_page').attr('href') || ''

  return {
    workUrl,
    chapterUrl,
    title: ($('.wp-manga-nav ol.breadcrumb li.active').html() || '').trim(),
    sequenceNumber: -1,
    pagesCount: pages.length,
    pages: [ ...pages ],
    previousChapter:
      !!previousChapterUrl ? {
        workUrl,
        chapterUrl: previousChapterUrl
      }
      : undefined,
    nextChapter:
      !!nextChapterUrl ? {
        workUrl,
        chapterUrl: nextChapterUrl,
      }
      : undefined,
  } as IWorkChapterDetails
}

export class MangaTxProvider implements ISourceProvider {

  private httpClient: AxiosInstance

  constructor()
  {
    this.httpClient = axios.create({
      baseURL: 'https://mangatx.com',
    })
  }

  isValidWorkUrl?(workUrl: string) : Promise<boolean> {
    return Promise.resolve(workUrl.startsWith('https://mangatx.com/manga/') || workUrl.startsWith('http://mangatx.com/manga/'))
  }

  isValidChapterUrl?(chapterUrl: string) : Promise<boolean> {
    return Promise.resolve(chapterUrl.match(/^http[s]?\:\/\/mangatx\.com\/manga\/\w+\/chapter-\w+[\/]?/).length > 0)
  }

  getCatalog(options: ICatalogOptions): Promise<ICatalogResponse> {
    throw new Error('Not implemented yet');
  }

  getWorkDetails(workUrl: string) : Promise<IWorkDetails> {
    return this.httpClient.get(workUrl)
      .then(({ data }) => {
        return parseWorkDetails(workUrl, data)
      })
  }

  getChapterDetails(workUrl: string, chapterUrl: string) : Promise<IWorkChapterDetails> {
    return this.httpClient.get(chapterUrl)
      .then(({ data }) => {
        return parseChapterDetails(workUrl, chapterUrl, data)
      })
  }
}

export default MangaTxProvider;