export interface Movie {
  id: number,
  original_language: string,
  poster_path: string,
  vote_average: number,
  title: string,
  overview: string
}

export interface DiscoverMovieListResult {
  results: Movie[]
}
