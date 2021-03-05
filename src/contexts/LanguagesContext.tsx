import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import de_DE from '../translation/de_DE.json';
import en_US from '../translation/en_US.json';
import pt_BR from '../translation/pt_BR.json';

interface LanguagesContextData {
    activeLanguage: string;
    content;
    changeTopt_BR: () => void;
    changeToen_US: () => void;
    changeTode_DE: () => void;
}

interface LanguagesProviderPros {
    children: ReactNode;
}

export const LanguagesContext = createContext({} as LanguagesContextData);

export function LanguagesProvider({
    children
}: LanguagesProviderPros) {

    const [activeLanguage, setActiveLanguage] = useState("en_US");
    const [content, setContent] = useState(en_US);

    useEffect(() => {
        Cookies.set('language', activeLanguage);
    }, [activeLanguage]);

    function changeTopt_BR() {
        setActiveLanguage("pt_BR");
        setContent(pt_BR);
        return;
    }

    function changeToen_US() {
        setActiveLanguage("en_US");
        setContent(en_US);
        return;
    }

    function changeTode_DE() {
        setActiveLanguage("de_DE");
        setContent(de_DE);
        return;
    }

    return <LanguagesContext.Provider
        value={{
            activeLanguage,
            content,
            changeTopt_BR,
            changeToen_US,
            changeTode_DE,
        }}
    >
        {children}
    </LanguagesContext.Provider>
}