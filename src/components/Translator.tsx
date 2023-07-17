import React from "react";
import { useTranslator } from "../hooks/useTranslator";
import { useDebouce } from "../hooks/useDebounce";
import { SwitchLanguage } from "../icons/SwitchLanguage";
import { AUTO_LANGUAGE } from "../types/constants";
import { SectionType } from "../types/translator.d";
import { LanguageSelector } from "./LanguageSelector";
import { TextArea } from "./TextArea";
import { translate } from "../services/translate";

function Translator() {
    const { fromLanguage, toLanguage, fromText, result, loading, setFromLanguage, setToLanguage, setFromText, setResult, setSwitchLanguage } = useTranslator();
    const debouncedFromText = useDebouce(fromText, 250);
    
    React.useEffect(() => {
        if (debouncedFromText === "") return
            
        translate({ fromLanguage, toLanguage, text: debouncedFromText })
            .then((result) => {
                if (fromText === "") {
                    setResult("");
                    return
                }
                if(result == null) return
                setResult(result);
            })
            .catch(() => { setResult("Error") })
    }, [debouncedFromText, fromLanguage, toLanguage])

    return (
        <div className="Container">
            <h1>Traducir</h1>
            <div className="LanguageSelector">
                <div className="row">
                    <LanguageSelector type={SectionType.From} value={fromLanguage} otherValue={toLanguage} onChange={setFromLanguage}/>
                    <TextArea type={SectionType.From} loading={loading} placeholder={"Ingresar texto"} toLanguage={toLanguage} value={fromText} onChange={setFromText}/>
                </div>
                <button onPointerUp={setSwitchLanguage} disabled={fromLanguage === AUTO_LANGUAGE}>
                    <SwitchLanguage/>
                </button>
                <div className="row">
                    <LanguageSelector type={SectionType.To} value={toLanguage} otherValue={fromLanguage} onChange={setToLanguage}/>
                    <TextArea type={SectionType.To} loading={loading} placeholder={"Traducción"} toLanguage={toLanguage} value={result}/>
                </div>
            </div>
        </div>
    )
}

export { Translator };