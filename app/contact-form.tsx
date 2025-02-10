import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  SafeAreaView,
} from "react-native";
import { ChevronDown } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackHeader from "@/components/common/back-header";

interface FormData {
  name: string;
  email: string;
  helpTopic: string;
  message: string;
}

const HELP_TOPICS = [
  "MY ACCOUNT",
  "BILLING",
  "TECHNICAL SUPPORT",
  "FEATURE REQUEST",
  "OTHER",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    helpTopic: "MY ACCOUNT",
    message: "",
  });

  const [showTopicModal, setShowTopicModal] = useState(false);

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title="CONTACT US" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={["#393939", "#646464"]}
          style={styles.linearForm}
        >
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                YOUR NAME <Text style={styles.asterisk}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="YOUR NAME"
                placeholderTextColor="#666"
                value={formData.name}
                onChangeText={(text) =>
                  setFormData({ ...formData, name: text })
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                YOUR E-MAIL <Text style={styles.asterisk}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="YOUR E-MAIL"
                placeholderTextColor="#666"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>WHAT CAN WE HELP WITH?</Text>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => setShowTopicModal(true)}
              >
                <Text style={styles.selectButtonText}>
                  {formData.helpTopic}
                </Text>
                <ChevronDown size={20} color="#ADADAD" />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.label}>WHAT'S YOUR MESSAGE?</Text>
              <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="YOUR MESSAGE"
                placeholderTextColor="#666"
                value={formData.message}
                onChangeText={(text) =>
                  setFormData({ ...formData, message: text })
                }
                multiline
                numberOfLines={6}
                textAlignVertical="top"
              />
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>CONTACT US</Text>
        </TouchableOpacity>

        {/* Topic Selection Modal */}
        <Modal
          visible={showTopicModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowTopicModal(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowTopicModal(false)}
          >
            <View style={styles.modalContent}>
              {HELP_TOPICS.map((topic) => (
                <TouchableOpacity
                  key={topic}
                  style={styles.modalItem}
                  onPress={() => {
                    setFormData({ ...formData, helpTopic: topic });
                    setShowTopicModal(false);
                  }}
                >
                  <Text
                    style={[
                      styles.modalItemText,
                      formData.helpTopic === topic &&
                        styles.modalItemTextSelected,
                    ]}
                  >
                    {topic}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  formContainer: {
    padding: 24,
    borderWidth: 1,
    borderColor: "#7A7777",
    borderRadius: 12,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  linearForm: {
    borderRadius: 12,
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },
  asterisk: {
    color: "#FFFFFF",
  },
  input: {
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    color: "#ADADAD",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  messageInput: {
    height: 120,
    textAlignVertical: "top",
    paddingVertical: 14,
  },
  selectButton: {
    backgroundColor: "#1A1A1A",
    borderRadius: 6,
    height: 48,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectButtonText: {
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    color: "#ADADAD",
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  button: {
    backgroundColor: "#00FFBB",
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    padding: 8,
  },
  modalItem: {
    padding: 16,
    borderRadius: 8,
  },
  modalItemText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  modalItemTextSelected: {
    color: "#5CFFA0",
  },
});
