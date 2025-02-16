import React from "react"
import { View, Button } from "react-native"
import { BarChart, LineChart } from "react-native-chart-kit"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { useRouter } from "expo-router"

export default function HomeScreen() {
  const router = useRouter()
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <ThemedText className="text-4xl font-bold text-white absolute bottom-4 left-4">Fitness Summary</ThemedText>
      }
    >
      <ThemedView className="p-4">
        <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <ThemedText className="text-lg font-semibold mb-2">Today's Stats</ThemedText>
          <View className="flex-row justify-between mb-2">
            <ThemedText>Steps</ThemedText>
            <ThemedText className="font-bold">8,234</ThemedText>
          </View>

          <Button title="Go to Auth" onPress={() => router.push("/auth")} />
          
          <View className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
            <View className="h-2 bg-blue-500 rounded-full" style={{ width: "82%" }} />
          </View>
          <View className="flex-row justify-between mb-2">
            <ThemedText>Calories</ThemedText>
            <ThemedText className="font-bold">1,890</ThemedText>
          </View>
          <View className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
            <View className="h-2 bg-blue-500 rounded-full" style={{ width: "63%" }} />
          </View>
          <View className="flex-row justify-between">
            <ThemedText>Active Minutes</ThemedText>
            <ThemedText className="font-bold">45</ThemedText>
          </View>
          <View className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <View className="h-2 bg-blue-500 rounded-full" style={{ width: "45%" }} />
          </View>
        </ThemedView>

        <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <ThemedText className="text-lg font-semibold mb-2">Weekly Activity</ThemedText>
          <BarChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [{ data: [3000, 5000, 8000, 4000, 6000, 7000, 8234] }],
            }}
            width={300}
            height={200}
            yAxisSuffix="steps"
            yAxisLabel="steps"
            chartConfig={{
              backgroundColor: "#FFFFFF",
              backgroundGradientFrom: "#FFFFFF",
              backgroundGradientTo: "#FFFFFF",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(10, 126, 164, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </ThemedView>

        <ThemedView className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
          <ThemedText className="text-lg font-semibold mb-2">Heart Rate</ThemedText>
          <LineChart
            data={{
              labels: ["6am", "9am", "12pm", "3pm", "6pm", "9pm"],
              datasets: [{ data: [65, 80, 75, 70, 85, 72] }],
            }}
            width={300}
            height={200}
            yAxisSuffix=" bpm"
            chartConfig={{
              backgroundColor: "#FFFFFF",
              backgroundGradientFrom: "#FFFFFF",
              backgroundGradientTo: "#FFFFFF",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 59, 48, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  )
}