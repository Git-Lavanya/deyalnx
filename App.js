
import React from 'react';
import Register from './android/app/src/Pages/register'
import Login from './android/app/src/Pages/login'
import Home from './android/app/src/Pages/Home'
import Thankyou from './android/app/src/Pages/Thankyou'
import Verification from './android/app/src/Pages/verification'
import Welcome from './android/app/src/Pages/Welcome'
import Plan from './android/app/src/Pages/Plan'
// import { NativeRouter, Route, Routes } from 'react-router-native'
import { Router, Scene } from 'react-native-router-flux'
import Thank from './android/app/src/Pages/Thankyou';
// import { enableScreens } from 'react-native-screens';

// enableScreens();


const App = () => {
  return (
    // <Register/>
    // <Login/>
    // <Home/>
    // <Thankyou/>
    // <Verification/>
    // <Welcome/>
    <Plan/>
    // <Router>
  //     <Scene key = "root">
  //        <Scene key = "Welcome" component = {Welcome} title = "Welcome" initial = {true} />
  //        {/* <Scene key = "about" component = {About} title = "About" /> */}
  //     </Scene>
  //  </Router>
  );
};

export default App;

