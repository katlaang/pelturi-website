import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import WebSpeedInsights from '../components/SpeedInsights';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="features" />
        <Stack.Screen name="platform" />
        <Stack.Screen name="pricing" />
        <Stack.Screen name="contact" />
        <Stack.Screen name="terms" />
        <Stack.Screen name="privacy" />
        <Stack.Screen name="docs" />
      </Stack>
      <WebSpeedInsights />
    </>
  );
}
