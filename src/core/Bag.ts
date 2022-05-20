import { ISourceProvider } from './ISourceProvider'

export interface IBag {
  keys(): string[]
  set(key: string, provider: ISourceProvider): IBag
  get(key: string): ISourceProvider
  findProviderByUrl(workUrl: string): string
}

export class Bag implements IBag {

  private providers = {}

  keys () {
    return Object.keys(this.providers)
  }

  set (key: string, provider: ISourceProvider) {
    this.providers[key] = provider
    return this
  }

  get (key: string): ISourceProvider {
    return this.providers[key]
  }

  findProviderByUrl (workUrl: string) {
    var matches = Object.entries(this.providers)
      .map(([key, provider]) => {
        const providerCast = provider as ISourceProvider

        return {
          provider: key,
          isValid: providerCast.isValidWorkUrl(workUrl)
        }
      })
      .filter(({ isValid }) => isValid)
      .map(({ provider }) => provider)

    if (matches.length > 0) {
      return matches[0]
    }

    return null
  }
}

export default Bag