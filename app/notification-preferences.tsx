import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackHeader from "@/components/common/back-header";

interface NotificationSetting {
  id: string;
  title: string;
  enabled: boolean;
}

export default function NotificationPreferences() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    { id: "challenges", title: "CHALLENGE NOTIFICATIONS", enabled: true },
    { id: "invitations", title: "CHALLENGE INVITATIONS", enabled: true },
    { id: "sponsors", title: "NEW SPONSOR", enabled: true },
    { id: "tips", title: "DAILY TIPS", enabled: true },
  ]);

  const toggleSwitch = (id: string) => {
    setSettings(
      settings.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const handleUpdate = () => {
    // Handle updating preferences
    console.log("Updated settings:", settings);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title={"NOTIFICATION"} />
      <View style={styles.content}>
        <LinearGradient
          colors={["#393939", "#646464"]}
          style={styles.linearForm}
        >
          <View style={styles.card}>
            {settings.map((setting, index: number) => (
              <View
                key={setting.id}
                style={[
                  styles.settingRow,
                  index === settings.length - 1 && styles.lastRow,
                ]}
              >
                <Text style={styles.settingText}>{setting.title}</Text>
                <Switch
                  trackColor={{ false: "#3f3f3f", true: "#00FFBB" }}
                  thumbColor="#ffffff"
                  ios_backgroundColor="#3f3f3f"
                  onValueChange={() => toggleSwitch(setting.id)}
                  value={setting.enabled}
                />
              </View>
            ))}
          </View>
        </LinearGradient>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 32,
  },
  linearForm: {
    borderRadius: 12,
    marginBottom: 32,
  },
  card: {
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: "#7A7777",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#7A7777",
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  settingText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  updateButton: {
    backgroundColor: "#00FFBB",
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
    marginHorizontal: 20,
  },
  updateButtonText: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },
});
