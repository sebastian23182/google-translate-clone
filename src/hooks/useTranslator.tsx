import React from "react";
import { type State, type ActionTypes, type Action, type Payload, type Language, type FromLanguage } from "../types/translator.d";
import { AUTO_LANGUAGE } from "../types/constants";

function useTranslator() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const { fromLanguage, toLanguage, fromText, result, loading } = state;
    const setFromLanguage = (language: FromLanguage) => dispatch({ type: actionTypes.SET_FROM_LANGUAGE, payload: language });
    const setToLanguage = (language: Language) => dispatch({ type: actionTypes.SET_TO_LANGUAGE, payload: language });
    const setFromText = (text: string) => dispatch({ type: actionTypes.SET_FROM_TEXT, payload: text });
    const setResult = (result: string) => dispatch({ type: actionTypes.SET_RESULT, payload: result });
    const setSwitchLanguage = () => { if(fromLanguage != AUTO_LANGUAGE) dispatch({ type: actionTypes.SET_SWITCH_LANGUAGE })};
    return { fromLanguage, toLanguage, fromText, result, loading, setFromLanguage, setToLanguage, setFromText, setResult, setSwitchLanguage };
}

const initialState: State = {
    fromLanguage: "auto",
    toLanguage: "en",
    fromText: "",
    result: "",
    loading: false
}

const actionTypes: ActionTypes = {
  SET_FROM_LANGUAGE: "SET_FROM_LANGUAGE",
  SET_TO_LANGUAGE: "SET_TO_LANGUAGE",
  SET_SWITCH_LANGUAGE: "SET_SWITCH_LANGUAGE",
  SET_FROM_TEXT: "SET_FROM_TEXT",
  SET_RESULT: "SET_RESULT"
}

Object.freeze(actionTypes);

const reducerObject = (state: State, payload: Payload) => ({
  [actionTypes.SET_FROM_LANGUAGE]: {
    ...state,
    fromLanguage: payload as FromLanguage,
    result: "",
    loading: state.fromText !== ""
  },
  [actionTypes.SET_TO_LANGUAGE]: {
    ...state,
    toLanguage: payload as Language,
    result: "",
    loading: state.fromText !== ""
  },
  [actionTypes.SET_SWITCH_LANGUAGE]: {
    ...state,
    fromLanguage: state.toLanguage as FromLanguage,
    toLanguage: state.fromLanguage as Language,
    result: state.fromText,
    fromText: state.result,
    loading: state.fromText !== "",
  },
  [actionTypes.SET_FROM_TEXT]: {
    ...state,
    fromText: payload as string,
    result: "",
    loading: payload !== ""
  },
  [actionTypes.SET_RESULT]: {
    ...state,
    result: payload as string,
    loading: false
  },
})

const reducer = (state: State, action: Action): State => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useTranslator };