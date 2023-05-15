export interface Movie {
  readonly id: number,
  readonly original_language: string,
  readonly poster_path: string,
  readonly vote_average: number,
  readonly title: string,
  readonly overview: string,
  readonly backdrop_path: string | null,
  readonly vote_count ?: number,
  readonly release_date?: string,
  readonly runtime?: number,
  readonly homepage?: string,
}

export interface ResponseResult<T extends {}> {
  results: T[]

}


export interface Cast{
  name: string,
  original_name: string,
  profile_path: string,
  character: string

}


export interface Crew{
  name: string,
  original_name?: string,
  profile_path?: string,
  job?: string

}

export interface Credit {
  cast: Cast[],
  crew: Crew[]
}

export interface Video {
  name: string,
  key: string,
  site: string,
  id: string
}

export interface Videos {
  results: Video[]
}

export interface Poster {
  file_path: string,
}

export interface Posters {
  posters: Poster[]
}


export interface MovieRelatedItems {
  detail: Movie,
  videos: Videos,
  credit: Credit,
  posters: Posters
}

export type IDCached<T extends {}> = {[key: number]: T}
export interface RemoteResourceable  {
  url: (id: number) => string
}
