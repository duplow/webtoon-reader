import { IWorkLink } from './IWorkLink'
import { IWorkChapterLink } from './IWorkChapterLink'
import { IWorkDetails } from './IWorkDetails'
import { IWorkChapterDetails } from './IWorkChapterDetails'

export type ICatalogOptions = {
  keywords?: string
  advancedOptions?: any
}

export type ICatalogResponse = {
  options: ICatalogOptions,
  fetchMore: ICatalogOptions,
  isCountable: boolean,
  isPaginable: boolean,
  totalCount?: number,
  pageNumber?: number,
  works: IWorkLink[]
}

export interface ISourceProvider {
  getCatalog(options: ICatalogOptions): Promise<ICatalogResponse>
  isValidWorkUrl?(workUrl: string) : Promise<boolean>
  isValidChapterUrl?(chapterUrl: string) : Promise<boolean>
  getLatestReleases?() : Promise<Array<IWorkLink>>
  getWorkDetails(workUrl: string) : Promise<IWorkDetails>
  getChapterDetails(workUrl: string, chapterUrl: string) : Promise<IWorkChapterDetails>
}

export default ISourceProvider