import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../types/constants";
import { SectionType, type FromLanguage, type Language } from "../types/translator.d";

type Props =
    | { type: SectionType.From, value: FromLanguage, otherValue: Language, onChange: (language: FromLanguage) => void }
    | { type: SectionType.To, value: Language, otherValue: FromLanguage, onChange: (language: Language) => void }

function LanguageSelector({ type, value, otherValue, onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value === otherValue) return
        onChange(e.target.value as Language);
    }

    return (
        <select onChange={handleChange} value={value}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </select>
    )
}

export { LanguageSelector };