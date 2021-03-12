import { IGitRepository } from '@models/git-repository'

export interface IGitProfile {
  avatar_url?: string;
  blog?: string;
  company?: string;
  created_at?: Date;
  email?: string;
  events_url?: string;
  followers?: number;
  followers_url?: string;
  following?: number;
  following_url?: string;
  gists_url?: string;
  gravatar_id?: string;
  html_url?: string;
  id?: number
  location?: string;
  login?: string;
  name?: string;
  node_id?: string;
  organizations_url?: string;
  public_gists?: number;
  public_repos?: number;
  received_events_url?: string;
  repos_url?: string;
  repositories?: IGitRepository[]
  score?: number
  site_admin?: boolean
  starred_url?: string;
  subscriptions_url?: string;
  twitter_username?: string;
  type?: string;
  updated_at?: Date;
  url?: string;
}
export class GitProfile {
  public avatar_url?: string;
  public blog?: string;
  public company?: string;
  public created_at?: Date;
  public email?: string;
  public events_url?: string;
  public followers?: number;
  public followers_url?: string;
  public following?: number;
  public following_url?: string;
  public gists_url?: string;
  public gravatar_id?: string;
  public html_url?: string;
  public id?: number
  public location?: string;
  public login?: string;
  public name?: string;
  public node_id?: string;
  public organizations_url?: string;
  public public_gists?: number;
  public public_repos?: number;
  public received_events_url?: string;
  public repos_url?: string;
  public repositories?: IGitRepository[]
  public score?: number
  public site_admin?: boolean
  public starred_url?: string;
  public subscriptions_url?: string;
  public twitter_username?: string;
  public type?: string;
  public updated_at?: Date;
  public url?: string;
  public experience: number;

  constructor(args?: IGitProfile) {
    Object.keys(args).forEach(key => this[key] = this[key] ?? args[key]);
    this.getExperience()
  }
  public getExperience() {
    const difference = new Date().getTime() - new Date(this.created_at).getTime();
    const days = difference / (1000 * 3600 * 24);
    this.experience = Math.round(days / 365);
  }
}