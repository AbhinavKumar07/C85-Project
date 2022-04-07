import * as React from 'react'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import DrawerNavigaton from './navigation/DrawerNavigation';

import LoginScreen from ''
import LoadingScreen from ''
import DashboardScreen from ''

import * as firebase from 'firebase'
import {firebaseConfig} from './config'

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
} else{
  firebase.app()
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoadingScreen,
  DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)


export default function App() {
  return (
    <AppNavigator/>
  );
}

