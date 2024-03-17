import { receiveMessageOnPort } from "worker_threads"

export interface Country {
    name: {common: string, official: string}
    population: number
    region: string
    capital: string
    subregion: string
    tld: string
    currencies: {[key: string]: any}
    languages: any
    borders: string[]
    flags: {png: string}
    cca3: string
}
