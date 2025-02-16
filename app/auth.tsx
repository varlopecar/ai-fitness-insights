import { Auth } from "@/components/Auth.native";
import { ThemedView } from "@/components/ThemedView";

export default function AuthPage() {
    return (
      <ThemedView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Auth />
      </ThemedView>
    )
  }