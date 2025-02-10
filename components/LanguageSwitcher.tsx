import { useLocale } from "@/i18n/TranslationContext"
import { ThemedView } from "./ThemedView"
import { TouchableOpacity } from "react-native"
import { ThemedText } from "./ThemedText"

export function LanguageSwitcher() {
    const { tCommon, currentLanguage, changeLanguage, getLanguageName, dir } = useLocale()

    return (
        <ThemedView style={{ direction: dir }}>
            <TouchableOpacity onPress={() => changeLanguage("en")}>
                <ThemedText>{getLanguageName("en")}</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage("es")}>
                <ThemedText>{getLanguageName("es")}</ThemedText>
            </TouchableOpacity>
            <ThemedText>{tCommon("label.currentLanguage", { currentLanguage: getLanguageName(currentLanguage) })}</ThemedText>
        </ThemedView>
    )
}

