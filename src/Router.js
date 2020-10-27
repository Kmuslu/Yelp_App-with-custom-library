import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import First from "./pages/First";
import Second from "./pages/Second"
import App from "./pages/App"



const Stack = createStackNavigator();

function Router({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName ="App"
      screenOptions ={{headerShown: false}}>
      <Stack.Screen name="MainPage" component={App} />
        <Stack.Screen name="FirstPage" component={First} />
        <Stack.Screen name="SecondPage" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;