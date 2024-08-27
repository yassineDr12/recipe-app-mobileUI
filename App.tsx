import "./gesture-handler";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import Scratch from "./Scratch";
import LandingScreen from "./screens/LandingScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <GluestackUIProvider config={config}>
        {/* <Scratch /> */}
        <LandingScreen />
      </GluestackUIProvider>
    </>
  );
}
