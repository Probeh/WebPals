import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Providers } from '@enums/provider.enum'
import { AppConfig } from '@helpers/app-config'
import { IGitProfile } from '@models/git-profile'
import { IGitRepository } from '@models/git-repository'
import { IGitSearch } from '@models/git-search'
import { NetworkService } from '@services/network.service'

@Injectable()
export class GithubService {
  private readonly profiles: IGitProfile[] = new Array<IGitProfile>()
  constructor(private network: NetworkService, private http: HttpClient, private args?: AppConfig) { }

  public searchUsers(login: string): Promise<IGitProfile[]> {
    return new Promise((resolve, reject) => {
      const filters = { q: login, per_page: '5' }
      this.network.get<IGitSearch>({ provider: Providers.Github, path: 'search/users', params: filters }).toPromise()
        .then((response: IGitSearch) => {
          response.items.forEach((profile: IGitProfile) => {
            this.updateProfile(profile)
              .then((result: IGitProfile) => {
                const current = this.profiles.find(x => x.id == result.id);
                if (current) this.profiles.splice(this.profiles.indexOf(current), 1, result);
                else this.profiles.push(result);

                if (result.id == response.items[response.items.length - 1].id)
                  resolve(this.profiles.slice())
              });
          })
        });
    });
  }
  public async updateProfile(profile: IGitProfile): Promise<IGitProfile> {
    return new Promise((resolve, reject) => {
      this.http.get<IGitProfile>(profile.url).toPromise()
        .then(result => {
          Object.keys(result).forEach(key => profile[key] = profile[key] ?? result[key]);
          this.updateRepositories(result)
            .then((result: IGitRepository[]) => {
              profile.repositories = result;
              resolve(profile);
            });
        });
    });
  }
  public async updateRepositories(profile: IGitProfile): Promise<IGitRepository[]> {
    return await this.http.get<IGitRepository[]>(profile.repos_url, { params: { per_page: '100' } })
      .pipe(map(result => result.filter(x => !x.fork)))
      .toPromise();
  }
  public async getProfile(user: string): Promise<IGitProfile> {
    return this.profiles.some(x => x.login == user)
      ? this.profiles.slice().find(x => x.login == user)
      : (await this.searchUsers(user))[0];
  }
}
