import { Stack } from "expo-router";
import "../global.css";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "RiftSoft-Regular": require("../assets/fonts/Rift-Soft-Regular.otf"),
    "RiftSoft-Bold": require("../assets/fonts/Rift-Soft-Bold.otf"),
    "RiftSoft-Medium": require("../assets/fonts/Rift-Soft-Medium.otf"),
    "RiftSoft-Demi": require("../assets/fonts/Rift-Soft-Demi.otf"),
    "RiftSoft-Light": require("../assets/fonts/Rift-Soft-Light.otf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='(tabs)' />
      <Stack.Screen name='(auth)' />
      <Stack.Screen name='landing-page' />
      <Stack.Screen name='challenge-preview' />
      <Stack.Screen name='account-information' />
      <Stack.Screen name='contact-form' />
      <Stack.Screen name='notification-preferences' />
      <Stack.Screen name='terms-of-use' />
      <Stack.Screen name='faq-page' />
      <Stack.Screen name='improvement-slider' />
      <Stack.Screen name='leader-board' />
    </Stack>
  );
}
