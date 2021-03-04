import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface LanguagesContextData {
    activeLanguage: string,
    content: () => void
}

interface LanguagesProviderPros {
    children: ReactNode;
    language: string;
}

export const LanguagesContext = createContext({} as LanguagesContextData);

export function LanguagesProvider({
    children, language
}: LanguagesProviderPros) {

    const [activeLanguage, setActiveLanguage] = useState("en_US");

    useEffect(() => {
        Cookies.set('language', language);
        setActiveLanguage(language);
    }, [language]);

    async function content() {
        const content = await import(`../translation/pt_BR.json`);
        return content;
    };

    content();

    return <LanguagesContext.Provider
        value={{
            activeLanguage,
            content
        }}
    >
        {children};
    </LanguagesContext.Provider>
}