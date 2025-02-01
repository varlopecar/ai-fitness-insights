import React from "react"
import { View, Switch, TouchableOpacity } from "react-native"
import { Activity, Bell, Target } from "lucide-react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function SettingsScreen() {
    const [isHealthEnabled, setIsHealthEnabled] = React.useState(true)
    const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true)

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#E0E0E0", dark: "#2C2C2C" }}
            headerImage={<ThemedText className="text-4xl font-bold text-white absolute bottom-4 left-4">Settings</ThemedText>}
        >
            <ThemedView className="p-4">
                <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                    <View className="flex-row items-center mb-4">
                        <Activity size={24} color="#0a7ea4" />
                        <ThemedText className="text-lg font-semibold ml-2">Data Sources</ThemedText>
                    </View>
                    <View className="flex-row justify-between items-center mb-2">
                        <ThemedText className="text-gray-600 dark:text-gray-400">Apple Health</ThemedText>
                        <Switch
                            value={isHealthEnabled}
                            onValueChange={setIsHealthEnabled}
                            trackColor={{ false: "#767577", true: "#0a7ea4" }}
                            thumbColor={isHealthEnabled ? "#f4f3f4" : "#f4f3f4"}
                        />
                    </View>
                    <ThemedText className="text-sm text-gray-500 dark:text-gray-400">
                        Connect to Apple Health to sync your fitness data
                    </ThemedText>
                </ThemedView>

                <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                    <View className="flex-row items-center mb-4">
                        <Bell size={24} color="#FF9500" />
                        <ThemedText className="text-lg font-semibold ml-2">Notifications</ThemedText>
                    </View>
                    <View className="flex-row justify-between items-center mb-2">
                        <ThemedText className="text-gray-600 dark:text-gray-400">Push Notifications</ThemedText>
                        <Switch
                            value={isNotificationsEnabled}
                            onValueChange={setIsNotificationsEnabled}
                            trackColor={{ false: "#767577", true: "#FF9500" }}
                            thumbColor={isNotificationsEnabled ? "#f4f3f4" : "#f4f3f4"}
                        />
                    </View>
                    <ThemedText className="text-sm text-gray-500 dark:text-gray-400">
                        Receive notifications for insights and goal progress
                    </ThemedText>
                </ThemedView>

                <LanguageSwitcher />
            </ThemedView>
        </ParallaxScrollView>
    )
}

