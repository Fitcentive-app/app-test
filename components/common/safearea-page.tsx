import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";

const SafeAreaPage = ({ children }: { children: any }) => {
  const colors: any = useTheme().colors;
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.pageBackground}>
      {children}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const createStyles = (colors: any) =>
  StyleSheet.create({
    pageBackground: {
      backgroundColor: "#000",
      flex: 1,
    },
  });

export default SafeAreaPage;
