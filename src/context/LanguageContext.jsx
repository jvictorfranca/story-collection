import { createContext, useContext, useState } from "react";


const LanguageContext = createContext(undefined)

const translations = {
  en: {
    siteTitle: "StoryTime",
    storyList: "Story Collection",
    backToStories: "Back to Stories",
    readStory: "Read Story",
    author: "Author",
    selectLanguage: "Select Language",
    english: "English",
    spanish: "Español",
    footerText: "Made with ❤️ for young readers everywhere",
    storyListSubtitle: "Discover timeless tales that spark imagination and teach valuable lessons",
    returnHome: "Return to home",
    notFoundText: "Oops! Page not found"

  },
  es: {
    siteTitle: "Hora del Cuento",
    storyList: "Colección de Cuentos",
    backToStories: "Volver a los Cuentos",
    readStory: "Leer Cuento",
    author: "Autor",
    selectLanguage: "Seleccionar Idioma",
    english: "English",
    spanish: "Español",
    footerText: "Hecho con ❤️ para jóvenes lectores en todas partes",
    storyListSubtitle: "Descubre historias atemporales que despiertan la imaginación y enseñan valiosas lecciones.",
    returnHome: "Volver al inicio",
    notFoundText: "¡Ups! Página no encontrada"
  }
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a Language Provider")
    }
    return context
}

export const LanguageProvider = ({children}) => {

const [language, setLanguage] = useState("en")

const t = (key) => {
    return translations[language][key] || key
}

    return (
        <LanguageContext.Provider value={{language, setLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    )
}

