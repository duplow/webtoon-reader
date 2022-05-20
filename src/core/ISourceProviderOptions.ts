import { ISourceProvider } from './ISourceProvider'

export interface ISourceProviderOptions {
  id: string,
  title: string,
  baseUrl?: string,
  language?: string,
  isMultiLanguage: boolean,
  provider: ISourceProvider
}

export default ISourceProviderOptions