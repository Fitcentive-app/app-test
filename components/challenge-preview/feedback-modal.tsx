import { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { ModalState, ModalStep } from "@/types";
import { question, success } from "@/assets/images";

const { width } = Dimensions.get("window");

export const FeedbackModal = () => {
  const [state, setState] = useState<ModalState>({
    isVisible: true,
    currentStep: 1,
    ratings: {
      groupChallenge: 0,
    },
    improvement: "",
    researchConsent: false,
    email: "",
  });

  const handleNext = () => {
    setState((prev) => ({
      ...prev,
      currentStep: (prev.currentStep + 1) as ModalStep,
    }));
  };

  const handleClose = () => {
    setState((prev) => ({ ...prev, isVisible: false }));
  };

  const renderRatingButtons = (key: "groupChallenge") => (
    <View style={styles.ratingContainer}>
      {[1, 2, 3, 4, 5].map((rating) => (
        <TouchableOpacity
          key={rating}
          style={[
            styles.ratingButton,
            state.ratings[key] === rating && styles.ratingButtonSelected,
          ]}
          onPress={() =>
            setState((prev) => ({
              ...prev,
              ratings: { ...prev.ratings, [key]: rating },
            }))
          }
        >
          <Text
            style={[
              styles.ratingText,
              state.ratings[key] === rating && styles.ratingTextSelected,
            ]}
          >
            {rating}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Image style={styles.icon} source={question} />
            <Text style={styles.title}>
              DO YOU HAVE A MINUTE TO ANSWER 3 QUESTIONS ABOUT YOUR EXPERIENCE?
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleClose}
            >
              <Text style={styles.secondaryButtonText}>MAYBE LATER</Text>
            </TouchableOpacity>
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>
              CREATING A GROUP CHALLENGE WAS EASY
            </Text>
            {renderRatingButtons("groupChallenge")}
            <TouchableOpacity
              style={[
                styles.button,
                !state.ratings.groupChallenge && styles.buttonDisabled,
              ]}
              onPress={handleNext}
              disabled={!state.ratings.groupChallenge}
            >
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>
              HOW CAN WE IMPROVE CREATING CHALLENGES?
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Type your feedback here"
              placeholderTextColor="#000000"
              value={state.improvement}
              onChangeText={(text) =>
                setState((prev) => ({ ...prev, improvement: text }))
              }
              multiline
            />
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        );

      case 4:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>
              WOULD YOU LIKE TO BE INVITED TO PAID RESEARCH ABOUT YOUR
              EXPERIENCE WITH FITCENTIVE?
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setState((prev) => ({ ...prev, researchConsent: true }));
                handleNext();
              }}
            >
              <Text style={styles.buttonText}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => {
                setState((prev) => ({ ...prev, researchConsent: false }));
                handleNext();
              }}
            >
              <Text style={styles.secondaryButtonText}>NO</Text>
            </TouchableOpacity>
          </View>
        );

      case 5:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.title}>
              GREAT! PLEASE ENTER THE EMAIL YOU WOULD LIKE TO USE TO CONTACT
              YOU.
            </Text>
            <TextInput
              style={styles.inputEmail}
              placeholder="YOUR E-MAIL"
              placeholderTextColor="#ADADAD"
              value={state.email}
              onChangeText={(text) =>
                setState((prev) => ({ ...prev, email: text }))
              }
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={[styles.button, !state.email && styles.buttonDisabled]}
              onPress={handleNext}
              disabled={!state.email}
            >
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        );

      case 6:
        return (
          <View style={styles.stepContainer}>
            <Image style={styles.iconSuccess} source={success} />
            <Text style={styles.title}>
              THANK YOU FOR HELPING US IMPROVE FITCENTIVE
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleClose}>
              <Text style={styles.buttonText}>DONE</Text>
            </TouchableOpacity>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <Modal visible={state.isVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <LinearGradient
          colors={["#393939", "#393939", "#646464"]}
          style={styles.modalContainer}
        >
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            {state.currentStep !== 1 && state.currentStep !== 6 && (
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleClose}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            )}

            {renderStep()}
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: 370,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
  },
  modalContainer: {
    flex: 1,
    width: width * 0.9,
    borderRadius: 15,
    paddingTop: 42,
  },
  closeButton: {
    position: "absolute",
    right: 15,
    top: -25,
    zIndex: 1,
    backgroundColor: "#7A7777",
    height: 28,
    width: 28,
    borderRadius: 20,
    justifyContent: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  stepContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -25,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "RiftSoft-Bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 15,
  },
  icon: { height: 60, width: 60 },
  iconSuccess: { height: 77, width: 77, marginBottom: 10 },
  button: {
    backgroundColor: "#00FFBB",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "100%",
    marginVertical: 10,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#00FFBB",
  },
  secondaryButtonText: {
    color: "#00FFBB",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
    borderWidth: 0.5,
    borderColor: "#F6F6F6",
    marginTop: 20,
  },
  ratingButton: {
    width: 58,
    height: 58,
    borderWidth: 0.5,
    borderColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingButtonSelected: {
    backgroundColor: "#00FFBB",
  },
  ratingText: {
    color: "#F6F6F6",
    fontSize: 26,
    fontFamily: "RiftSoft-Bold",
  },
  ratingTextSelected: {
    color: "#fff",
  },
  input: {
    height: 112,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    color: "#000000",
    marginBottom: 30,
    fontSize: 16,
    marginTop: 10,
  },
  inputEmail: {
    height: 48,
    width: "100%",
    backgroundColor: "#505050",
    borderRadius: 5,
    padding: 15,
    color: "#fff",
    marginBottom: 20,
    fontSize: 16,
    marginTop: 10,
  },
});
