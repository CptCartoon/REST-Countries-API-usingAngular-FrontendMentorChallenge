import { receiveMessageOnPort } from "worker_threads"

export interface Country {
    name: {common: string, official: string}
    population: number
    region: string
    capital: string
    nativeName: string
    subregion: string
    topLevelDomain: string
    currencies: [{}]
    languages: [{}]
    borders: string[]
    flags: {png: string}
    alpha3Code: string
}
