import { IGitRepository } from '@models/git-repository';

export interface IGitProfile {
  avatar_url?: string;
  blog?: string;
  created_at?: string;
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
  updated_at?: string;
  url?: string;
}