import { useLanguage } from "../context/LanguageContext"

const Header = () => {

    const {t} = useLanguage()
    return (
        <header>
        <div className="text-xl font-bold text-blue-600">
            {t("siteTitle")}
        </div>
        </header>
    )
}

export default Header