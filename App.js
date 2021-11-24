import React, { useEffect } from 'react';
import Login from './src/Pages/login'
// import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen'



const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, []);

  return (
    <Login />
  );
};

export default App;

