import AsyncStorage from "@react-native-async-storage/async-storage";

export const AsyncStorageService = {
  setItem: async (
    key: string,
    value: string,
    handleErrorCallback?: Function
  ) : Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("AsyncStorageService setItem error: ", error);
      handleErrorCallback?.(error);
    }
  },
  getItem: async (
    key: string,
    handleErrorCallback?: Function
  ): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("AsyncStorageService getItem error: ", error);
      handleErrorCallback?.(error);
      return null;
    }
  }
};
