import { ReadingMode } from './ReadingMode'
import { ReadingOrientation } from './ReadingOrientation'
import { IWorkChapterLink } from './IWorkChapterLink'

export interface IWorkDetails {
  title: string,
  altTitles?: string[],
  sinopse?: string,
  rating?: number,
  coverUrl: string,
  chaptersCount: number,
  readingOrietation?: ReadingOrientation,
  readingMode?: ReadingMode,
  latestChapter?: IWorkChapterLink,
  firstChapter?: IWorkChapterLink,
  chapters?: IWorkChapterLink[],
  language?: string
}

export default IWorkDetails
