import { NavigationContainer } from "@react-navigation/native";

import { TaskProvider } from "./src/context/useTask";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <TaskProvider>
        <Routes />
      </TaskProvider>
    </NavigationContainer>
  );
}
