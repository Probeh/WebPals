import { Providers } from '@enums/provider.enum'
import { ISearchParams } from '@helpers/search-params'

export interface IHttpRequest {
  provider: Providers,
  path?: string,
  params?: ISearchParams
}
