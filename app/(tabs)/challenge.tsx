import { router } from "expo-router";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Challenge = () => {
  useEffect(() => {
    router.push('/contact-form');
  },[])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#000",
      }}>
      <Text className='text-white'>Challenge</Text>
    </SafeAreaView>
  );
};

export default Challenge;
