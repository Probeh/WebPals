import { ISearchParams } from '@helpers/search-params'

export interface IHttpRequest {
  provider: string,
  path?: string,
  params?: ISearchParams
}
