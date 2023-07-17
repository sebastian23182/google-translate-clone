import { type Language, SectionType } from "../types/translator.d";
import { CopyTranslationText } from "../icons/CopyTranslationText";
import { VoiceSpeaker } from "../icons/VoiceSpekear";

interface Props {
    type: SectionType,
    loading: boolean,
    placeholder: string,
    value: string,
    toLanguage: Language,
    onChange?: (text: string) => void,
}

function TextArea({ type, loading, placeholder, value, toLanguage, onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(onChange) {
            const value: string = encodeURIComponent(e.target.value);
            e.target.style.height = 'inherit';
            e.target.style.height = `${e.target.scrollHeight-30}px`;
            onChange(decodeURIComponent(value));
        }
    }

    return (
        <>
        {type === SectionType.From && <textarea placeholder={placeholder} className={`text-area ${type}`} onChange={handleChange} value={value}></textarea>}
        {type === SectionType.To && 
            <div className={`text-area ${type}`}>
                <p>
                    {loading === true ? "Cargando..." : ""}
                    {loading === false && value === "" ? placeholder : value}
                </p>
                <span>
                    <CopyTranslationText result={value}/>
                    <VoiceSpeaker result={value} toLanguage={toLanguage}/>
                </span>
            </div>
        }
        </>
    )
}

export { TextArea };