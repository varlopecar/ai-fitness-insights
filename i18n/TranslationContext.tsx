import i18next from "i18next"
import { AsyncStorageService } from "@/services/storageService"
import { useTranslation } from "react-i18next"
import { type ReactNode, useContext, useEffect, useState, createContext } from "react"
import { languageNames } from "./i18n.config"

const USER_LANGUAGE = "USER_LANGUAGE"

type Direction = "ltr" | "rtl"

interface TranslationContextProps {
  currentLanguage: string
  changeLanguage: (lng: string) => void
  dir: Direction
  getLanguageName: (code: string) => string
}

export const TranslationContext = createContext<TranslationContextProps>({
  currentLanguage: "en",
  changeLanguage: () => {},
  dir: "ltr",
  getLanguageName: () => "",
})

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language ?? "en")

  const changeLanguage = async (lng: string) => {
    setCurrentLanguage(lng)
    await i18next.changeLanguage(lng)
    await AsyncStorageService.setItem(USER_LANGUAGE, lng)
  }

  const getLanguageName = (code: string) => {
    return languageNames[code as keyof typeof languageNames] || code
  }

  useEffect(() => {
    const getUserLanguage = async () => {
      const userLanguage = await AsyncStorageService.getItem(USER_LANGUAGE)
      if (userLanguage) {
        setCurrentLanguage(userLanguage)
        await i18next.changeLanguage(userLanguage)
      }
    }

    getUserLanguage()
  }, [])

  return (
    <TranslationContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        dir: i18next.dir(currentLanguage),
        getLanguageName,
      }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

export const useLocale = () => {
  const { currentLanguage, changeLanguage, dir, getLanguageName } = useContext(TranslationContext)
  const { t: tCommon, i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(currentLanguage)
  }, [currentLanguage, i18n])

  return {
    currentLanguage,
    changeLanguage,
    dir,
    tCommon,
    getLanguageName,
  }
}

export const translate = (key: string, params?: Record<string, unknown>) => {
  return i18next.t(key, params)
}