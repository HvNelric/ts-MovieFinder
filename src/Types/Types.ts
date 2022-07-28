import React from "react";

export interface ContextSearch {
    search: string;
    setSearch:  React.Dispatch<React.SetStateAction<string>>
}

export interface Movies {
    adult?: boolean
    backdrop_path?: string
    genre_ids?: number[]
    id: number
    original_language?: string
    original_title?: string
    overview?: string
    popularity?: number
    poster_path: string
    release_date: string
    title: string
    video?: boolean
    vote_average?: number
    vote_count?: number
    //[key: string]: any
}

export interface Genres {
    id: string;
    name: string;
}

export interface Filter {
    order: string;
    triGenre: string;
    triYear: string;
    [key: string]: string
}