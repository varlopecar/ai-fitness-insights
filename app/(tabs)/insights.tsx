import React from "react"
import { View, ScrollView } from "react-native"
import { TrendingUp, Moon, Lightbulb } from "lucide-react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import ParallaxScrollView from "@/components/ParallaxScrollView"

export default function InsightsScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
            headerImage={
                <ThemedText className="text-4xl font-bold text-white absolute bottom-4 left-4">AI Insights</ThemedText>
            }
        >
            <ThemedView className="p-4">
                <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                    <View className="flex-row items-center mb-2">
                        <TrendingUp size={24} color="#0a7ea4" />
                        <ThemedText className="text-lg font-semibold ml-2">Workout Intensity</ThemedText>
                    </View>
                    <ThemedText className="text-gray-600 dark:text-gray-400">
                        Your workout intensity is decreasing. Consider increasing duration by 10 minutes next week to maintain
                        progress.
                    </ThemedText>
                </ThemedView>

                <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                    <View className="flex-row items-center mb-2">
                        <Moon size={24} color="#5856D6" />
                        <ThemedText className="text-lg font-semibold ml-2">Sleep Quality</ThemedText>
                    </View>
                    <ThemedText className="text-gray-600 dark:text-gray-400">
                        Late-night workouts are affecting your sleep recovery. Aim for earlier sessions to improve sleep quality and
                        overall fitness performance.
                    </ThemedText>
                </ThemedView>

                <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                    <View className="flex-row items-center mb-2">
                        <Lightbulb size={24} color="#FF9500" />
                        <ThemedText className="text-lg font-semibold ml-2">Personalized Tip</ThemedText>
                    </View>
                    <ThemedText className="text-gray-600 dark:text-gray-400">
                        Based on your activity patterns, you might benefit from incorporating more strength training. This can help
                        improve your overall fitness and metabolism.
                    </ThemedText>
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
    )
}

