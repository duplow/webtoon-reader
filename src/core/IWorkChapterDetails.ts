import { IWorkChapterLink } from './IWorkChapterLink'

export interface IWorkChapterDetailsPage {
  workUrl: string,
  chapterUrl: string,
  pageNumber: number,
  pageUrl: string,
  imageUrl: string,
}

export interface IWorkChapterDetails {
  workUrl: string,
  chapterUrl: string,
  title: string,
  sequenceNumber: number,
  pagesCount: number,
  pages: Array<IWorkChapterDetailsPage>,
  previousChapter?: IWorkChapterLink,
  nextChapter?: IWorkChapterLink,
}

export default IWorkChapterDetails