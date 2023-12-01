import AsyncStorage from '@react-native-community/async-storage';

export const AsyncStorageKey = {
  credentials: "credentials"
}

class AsyncStorageHelper {
  private static instance: AsyncStorageHelper | null = null;

  private constructor() { }

  public static getInstance(): AsyncStorageHelper {
    if (AsyncStorageHelper.instance === null) {
      AsyncStorageHelper.instance = new AsyncStorageHelper();
    }
    return AsyncStorageHelper.instance;
  }

  async setItem(key: string, value: any): Promise<void> {
    try {
      const serializedValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('AsyncStorage setItem error:', error);
    }
  }

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const serializedValue = await AsyncStorage.getItem(key);
      if (serializedValue !== null) {
        const parsedValue: T = JSON.parse(serializedValue);
        return parsedValue;
      }
      return null;
    } catch (error) {
      console.error('AsyncStorage getItem error:', error);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('AsyncStorage removeItem error:', error);
    }
  }

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('AsyncStorage clear error:', error);
    }
  }
}

export default AsyncStorageHelper;
