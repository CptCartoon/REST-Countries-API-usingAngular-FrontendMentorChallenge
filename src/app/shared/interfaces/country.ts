import { receiveMessageOnPort } from "worker_threads"

export interface Country {
    name: {common: string, official: string, nativeName: any}
    altSpellings: string[]
    population: number
    region: string
    capital: string
    subregion: string
    tld: string
    currencies: {[key: string]: any}
    languages: {[key: string]: any}
    borders: string[]
    flags: {png: string}
    cca3: string
}
