import PostOverview from "./components/PostOverview";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostDetails from "./components/PostDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: true }}>
        <Stack.Screen name='Home' component={PostOverview} />
        <Stack.Screen name='Details' component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
