import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Invite = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#000",
      }}>
      <Text className='text-white'>Invite</Text>
    </SafeAreaView>
  );
};

export default Invite;
