import axios from 'axios';
import { getSearxngApiEndpoint } from '../config';

interface SearxngSearchOptions {
  categories?: string[];
  engines?: string[];
  language?: string;
  pageno?: number;
}

interface SearxngSearchResult {
  title: string;
  url: string;
  img_src?: string;
  thumbnail_src?: string;
  thumbnail?: string;
  content?: string;
  author?: string;
  iframe_src?: string;
}

export const searchSearxng = async (
  query: string,
  opts?: SearxngSearchOptions,
) => {
  const searxngURL = getSearxngApiEndpoint();

  const url = new URL(`${searxngURL}/search?d=json`);
  url.searchParams.append('q', query);

  if (opts) {
    Object.keys(opts).forEach((key) => {
      if (Array.isArray(opts[key])) {
        url.searchParams.append(key, opts[key].join(','));
        return;
      }
      url.searchParams.append(key, opts[key]);
    });
  }

  console.log('searchxx', url.toString());
  const res = await axios.get(url.toString());
  console.log('searchxx', res);
  const results: SearxngSearchResult[] = res.data.results;
  const suggestions: string[] = res.data.suggestions;

  return { results, suggestions };
};
