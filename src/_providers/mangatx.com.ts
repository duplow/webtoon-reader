import ReadingMode from '../types/reading-mode'
import ReadingOrietation from '../types/reading-orietation'

import { 
  IWorkProvider, 
  IWorkSearchInput,
  IWorkChapterLink,
  IWorkLink,
  IWorkDetails,
  IChapterDetails
} from '../types/provider';

export class MangaTxProvider implements IWorkProvider {

  public settings: {
    id: 'mangatx.com',
    title: 'mangatx.com',
    baseUrl: 'https://mangatx.com',
    language: 'en-US',
    isMultiLanguage: false,
  }

  async searchWorks(params: IWorkSearchInput) : Promise<Array<IWorkLink>> {
    return new Promise((resolve) => {
      resolve([
        {
          workUrl: ''
        }
      ])
    });
  }

  async getWorkDetails (work: IWorkLink) : Promise<IWorkDetails> {
    // https://mangatx.com/manga/release-that-witch/chapter-309/
    return {
      title: '',
      coverUrl: '',
      chaptersCount: 1,
      readingOrietation: ReadingOrietation.LEFT_TO_RIGHT,
      readingMode: ReadingMode.WEBTOON,
      //latestChapter?: IWorkChapterLink,
      //firstChapter?: IWorkChapterLink,
      language: 'en-US'
    }
  }

  async getChapterDetails (work: IWorkLink, chapter: IWorkChapterLink) : Promise<IChapterDetails> {
    // https://mangatx.com/manga/release-that-witch/chapter-309/
    return {
      title: 'ch 1',
      sequenceNumber: 1,
      pagesCount: 10,
      workUrl: work.workUrl,
      chapterUrl: chapter.chapterUrl,
      pages: [
        {
          pageNumber: 1,
          chapterUrl: chapter.chapterUrl,
          pageUrl: `${chapter.chapterUrl}#1`,
          imageUrl: `${chapter.chapterUrl}#1.jpg`,
        }
      ]
    }
  }

}

export default MangaTxProvider;