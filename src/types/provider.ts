import ReadingMode from './reading-mode'
import ReadingOrietation from './reading-orietation'

export interface IWorkLink {
  origin?: string,
  workUrl: string,
  details?: IWorkDetails
}

export interface IWorkChapterLink {
  workUrl: string,
  chapterUrl: string,
  title: string,
  chapterNumber: number
}

export interface IChapterPage {
  pageNumber: number,
  chapterUrl: string,
  pageUrl: string,
  imageUrl: string,
}

export interface IChapterDetails {
  title: string,
  sequenceNumber: number,
  pagesCount: number,
  workUrl: string,
  chapterUrl: string,
  pages: Array<IChapterPage>
}

export interface IWorkDetails {
  title: string,
  altTitles?: string[],
  sinopse?: string,
  rating?: number,
  coverUrl: string,
  chaptersCount: number,
  readingOrietation?: ReadingOrietation,
  readingMode?: ReadingMode,
  latestChapter?: IWorkChapterLink,
  firstChapter?: IWorkChapterLink,
  language: string
}

export interface IWorkSearchInput {
  q?: string,
  genres?: string[],
  language?: string
}

export interface IWorkProviderSettings {
  id: string,
  title: string,
  baseUrl: string,
  isMultiLanguage: boolean
}

export interface IWorkProvider {
  settings: IWorkProviderSettings,
  getLatestReleases?() : Promise<Array<IWorkLink>>
  isValidWorkUrl?(workUrl: string) : Promise<boolean>
  isValidChapterUrl?(chapterUrl: string) : Promise<boolean>
  searchWorks(params: IWorkSearchInput) : Promise<Array<IWorkLink>>
  getWorkDetails(work: IWorkLink) : Promise<IWorkDetails>
  getChapterDetails(work: IWorkLink, chapter: IWorkChapterLink) : Promise<IChapterDetails>
}

export default IWorkProvider