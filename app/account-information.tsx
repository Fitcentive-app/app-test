import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackHeader from "@/components/common/back-header";

interface FormData {
  name: string;
  email: string;
  gender: "male" | "female" | null;
  age: string;
}

const ITEM_HEIGHT = 35;
const VISIBLE_ITEMS = 3;

export default function AccountInformation() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    gender: null,
    age: "18",
  });
  const [selectedAge, setSelectedAge] = useState(18);
  const scrollViewRef = useRef<ScrollView>(null);

  // Generate ages from 18 to 100
  const ages = Array.from({ length: 83 }, (_, i) => i + 18);

  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    setSelectedAge(ages[index] || 18);
  };

  const handleAgePress = (age: number) => {
    setSelectedAge(age);
    scrollViewRef.current?.scrollTo({
      y: (age - 18) * ITEM_HEIGHT,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title={"ACCOUNT INFORMATION"} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={["#393939", "#646464"]}
          style={styles.linearForm}
        >
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>YOUR NAME *</Text>
              <TextInput
                style={styles.input}
                placeholder="YOUR NAME"
                placeholderTextColor="#ADADAD"
                value={formData.name}
                onChangeText={(text) =>
                  setFormData((prev) => ({ ...prev, name: text }))
                }
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>YOUR E-MAIL *</Text>
              <TextInput
                style={styles.input}
                placeholder="YOUR E-MAIL"
                placeholderTextColor="#ADADAD"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData((prev) => ({ ...prev, email: text }))
                }
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>YOUR GENDER *</Text>
              <View style={styles.genderContainer}>
                <TouchableOpacity
                  style={[
                    styles.genderButton,
                    formData.gender === "male" && styles.genderButtonActive,
                  ]}
                  onPress={() =>
                    setFormData((prev) => ({ ...prev, gender: "male" }))
                  }
                >
                  <Text
                    style={[
                      styles.genderButtonText,
                      formData.gender === "male" &&
                        styles.genderButtonTextActive,
                    ]}
                  >
                    MALE
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.genderButton,
                    formData.gender === "female" && styles.genderButtonActive,
                  ]}
                  onPress={() =>
                    setFormData((prev) => ({ ...prev, gender: "female" }))
                  }
                >
                  <Text
                    style={[
                      styles.genderButtonText,
                      formData.gender === "female" &&
                        styles.genderButtonTextActive,
                    ]}
                  >
                    FEMALE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.inputContainer, { marginBottom: 0 }]}>
              <Text style={styles.label}>YOUR AGE *</Text>
              <View style={styles.ageSelectorContainer}>
                <ScrollView
                  ref={scrollViewRef}
                  showsVerticalScrollIndicator={false}
                  snapToInterval={ITEM_HEIGHT}
                  decelerationRate="fast"
                  onScroll={handleScroll}
                  scrollEventThrottle={16}
                  style={styles.scrollView}
                >
                  <View
                    style={{
                      height: ITEM_HEIGHT,
                    }}
                  />
                  {ages.map((age) => (
                    <TouchableOpacity
                      key={age}
                      style={[
                        styles.ageItem,
                        age === selectedAge && {
                          backgroundColor: "#505050E5",
                          marginHorizontal: 20,
                        },
                      ]}
                      onPress={() => handleAgePress(age)}
                    >
                      <Text
                        style={[
                          styles.ageText,
                          age === selectedAge && styles.selectedAgeText,
                        ]}
                      >
                        {age}
                      </Text>
                    </TouchableOpacity>
                  ))}
                  <View style={{ height: ITEM_HEIGHT * 2 }} />
                </ScrollView>
                <View style={styles.gradientTop} />
                <View style={styles.gradientBottom} />
              </View>
            </View>
          </View>
        </LinearGradient>

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>UPDATE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  form: {
    padding: 24,
    borderWidth: 1,
    borderColor: "#7A7777",
    borderRadius: 12,
  },
  linearForm: {
    borderRadius: 12,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
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
  genderContainer: {
    flexDirection: "row",
    gap: 16,
  },
  genderButton: {
    flex: 1,
    height: 40,
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  genderButtonActive: {
    backgroundColor: "#00FFBB",
    color: "#1A1A1A",
  },
  genderButtonText: {
    color: "#ADADAD",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },
  genderButtonTextActive: {
    color: "#1A1A1A",
  },
  ageButton: {
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    padding: 16,
  },
  agePlaceholder: {
    color: "#ADADAD",
  },
  updateButton: {
    backgroundColor: "#00FFBB",
    borderRadius: 44,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  updateButtonText: {
    color: "#000",
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#18181B",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#27272A",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  modalCloseButton: {
    padding: 8,
  },
  modalCloseText: {
    color: "#4ADE80",
    fontSize: 16,
  },
  ageSelectorContainer: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    backgroundColor: "#000000",
    borderRadius: 8,
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
  },
  ageItem: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  ageText: {
    fontSize: 14,
    color: "#71717A",
    fontFamily: "Montserrat-Medium",
  },
  selectedAgeText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  gradientTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  gradientBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});
