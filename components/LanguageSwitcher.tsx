import { useLocale } from "@/i18n/TranslationContext";
import { ThemedView } from "./ThemedView";
import { Text, TouchableOpacity } from "react-native";

export function LanguageSwitcher() {
    const { tCommon, currentLanguage, changeLanguage, getLanguageName, dir } = useLocale();

    return (
        <ThemedView style={{ direction: dir }}>
            <TouchableOpacity onPress={() => changeLanguage("en")}>
                <Text>{getLanguageName("en")}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage("es")}>
                <Text>{getLanguageName("es")}</Text>
            </TouchableOpacity>
            <Text>{tCommon("label.currentLanguage", { currentLanguage: getLanguageName(currentLanguage) })}</Text>
        </ThemedView>
    );
}