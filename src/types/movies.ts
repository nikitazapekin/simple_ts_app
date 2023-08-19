
    export type MovieError ={
        page:number,
results: any[],
total_pages: number,
total_results: number
    }

    export type Movie ={
        page: number,
results:  MovieItem[],

total_pages: number, 
total_results: number
    }

    export type MovieItem = {
        adult: boolean,
        backdrop_path: string,
        genre_ids: number[],
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
         vote_count: number
               
    }