import React from "react"
import { View, TouchableOpacity } from "react-native"
import { FileDown, Calendar } from "lucide-react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import ParallaxScrollView from "@/components/ParallaxScrollView"

export default function ReportsScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#FFD700", dark: "#8B4513" }}
            headerImage={<ThemedText className="text-4xl font-bold text-white absolute bottom-4 left-4">Reports</ThemedText>}
        >
            <ThemedView className="p-4">
                <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                    <View className="flex-row justify-between items-center mb-2">
                        <View className="flex-row items-center">
                            <Calendar size={24} color="#0a7ea4" />
                            <ThemedText className="text-lg font-semibold ml-2">Weekly Report</ThemedText>
                        </View>
                        <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-full">
                            <View className="flex-row items-center">
                                <FileDown size={18} color="#FFFFFF" />
                                <ThemedText className="text-white ml-2">Download</ThemedText>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ThemedText className="text-gray-600 dark:text-gray-400 mb-2">Period: May 1 - May 7, 2023</ThemedText>
                    <View className="flex-row justify-between mb-1">
                        <ThemedText className="text-gray-600 dark:text-gray-400">Total Steps</ThemedText>
                        <ThemedText className="font-bold">52,436</ThemedText>
                    </View>
                    <View className="flex-row justify-between mb-1">
                        <ThemedText className="text-gray-600 dark:text-gray-400">Avg. Daily Calories</ThemedText>
                        <ThemedText className="font-bold">2,150</ThemedText>
                    </View>
                    <View className="flex-row justify-between">
                        <ThemedText className="text-gray-600 dark:text-gray-400">Active Minutes</ThemedText>
                        <ThemedText className="font-bold">320</ThemedText>
                    </View>
                </ThemedView>

                <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                    <View className="flex-row justify-between items-center mb-2">
                        <View className="flex-row items-center">
                            <Calendar size={24} color="#FF9500" />
                            <ThemedText className="text-lg font-semibold ml-2">Monthly Report</ThemedText>
                        </View>
                        <TouchableOpacity className="bg-orange-500 py-2 px-4 rounded-full">
                            <View className="flex-row items-center">
                                <FileDown size={18} color="#FFFFFF" />
                                <ThemedText className="text-white ml-2">Download</ThemedText>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ThemedText className="text-gray-600 dark:text-gray-400 mb-2">Period: May 2023</ThemedText>
                    <View className="flex-row justify-between mb-1">
                        <ThemedText className="text-gray-600 dark:text-gray-400">Total Steps</ThemedText>
                        <ThemedText className="font-bold">230,145</ThemedText>
                    </View>
                    <View className="flex-row justify-between mb-1">
                        <ThemedText className="text-gray-600 dark:text-gray-400">Avg. Daily Calories</ThemedText>
                        <ThemedText className="font-bold">2,300</ThemedText>
                    </View>
                    <View className="flex-row justify-between mb-1">
                        <ThemedText className="text-gray-600 dark:text-gray-400">Active Minutes</ThemedText>
                        <ThemedText className="font-bold">1,450</ThemedText>
                    </View>
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
    )
}

