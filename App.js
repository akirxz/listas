import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Task  from "./screens/task";
import  NewTask  from "./screens/newtask";
import  Details  from "./screens/details";
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Task' component={Task}/>
        <Stack.Screen name='New Task' component={NewTask}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


