import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import { useNavigation } from '@react-navigation/native';


export default function App() {

  
  return (
    
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
   
  );
}