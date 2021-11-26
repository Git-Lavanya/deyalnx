import React, { useEffect } from 'react';
import Login from './src/Pages/login';
import Home from './src/Pages/Home';
import Plan from './src/Pages/Plan';
import Register from './src/Pages/register';
import Thank from './src/Pages/Thankyou';
import Verification from './src/Pages/verification';
import Welcome from './src/Pages/Welcome';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Plan" component={Plan} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Thank" component={Thank} />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
