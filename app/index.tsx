import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/home")}
        className='bg-[#00A277] px-8 py-4 rounded-full shadow-lg'
        activeOpacity={0.8}>
        <Text className='text-white font-bold text-lg tracking-wide'>
          Go to Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/welcome")}
        className='bg-[#00A277] px-8 py-4 rounded-full shadow-lg mt-5'
        activeOpacity={0.8}>
        <Text className='text-white font-bold text-lg tracking-wide'>
          Go to Onboarding
        </Text>
      </TouchableOpacity>
    </View>
  );
}
