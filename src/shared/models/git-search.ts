import { IGitProfile } from '@models/git-profile';

export interface IGitSearch {
  incomplete_results: boolean;
  items: IGitProfile[];
  total_count: number;
}
