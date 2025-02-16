import AsyncStorage from "@react-native-async-storage/async-storage";

interface StorageAdapter {
  setItem: (key: string, value: string) => Promise<void>;
  getItem: (key: string) => Promise<string | null>;
  removeItem: (key: string) => Promise<void>;
  getAllKeys: () => Promise<string[]>;
}

export const AsyncStorageService: StorageAdapter = {
  setItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("AsyncStorageService setItem error:", error);
    }
  },
  getItem: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("AsyncStorageService getItem error:", error);
      return null;
    }
  },
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("AsyncStorageService removeItem error:", error);
    }
  },
  getAllKeys: async () => {
    try {
      return (await AsyncStorage.getAllKeys()).slice();
    } catch (error) {
      console.error("AsyncStorageService getAllKeys error:", error);
      return [];
    }
  },
};