import { type SUPPORTED_LANGUAGES, type AUTO_LANGUAGE } from "./constants";

export interface State {
    fromLanguage: FromLanguage
    toLanguage: Language
    fromText: string
    result: string
    loading: boolean
}

export interface Action {
    type: Type,
    payload?: Payload
} 

type Type = keyof ActionTypes 
type AutoLanguage = typeof AUTO_LANGUAGE
export type Language = keyof typeof SUPPORTED_LANGUAGES
export type FromLanguage = Language | AutoLanguage
export type Payload = Language | FromLanguage | string | undefined 

export interface ActionTypes {
    SET_FROM_LANGUAGE: "SET_FROM_LANGUAGE",
    SET_TO_LANGUAGE: "SET_TO_LANGUAGE",
    SET_SWITCH_LANGUAGE: "SET_SWITCH_LANGUAGE",
    SET_FROM_TEXT: "SET_FROM_TEXT",
    SET_RESULT: "SET_RESULT"
}

export enum SectionType {
    From = "from",
    To = "to"
}






