const SUPPORTED_LANGUAGES = {
    en: "Inglés",
    es: "Español",
    ja: "Japones",
}

const VOICE_FOR_LANGUAGE = {
    en: "en-GB",
    es: "es-ES",
    ja: "ja-JP"
}

const AUTO_LANGUAGE = "auto";

Object.freeze(SUPPORTED_LANGUAGES);
Object.freeze(VOICE_FOR_LANGUAGE);

export { SUPPORTED_LANGUAGES, AUTO_LANGUAGE, VOICE_FOR_LANGUAGE };