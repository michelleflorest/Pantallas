import React from 'react';
import { Button, View, Text } from 'react-native';
import Login from './screens/login';
import Registro from './screens/registro'; 
import DatosVal from './screens/datosVal';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/*function loginView(){
  return(
    <Login></Login>
  );
}

function datosValView(){
  return(
    <DatosVal></DatosVal>
  );
}

function registroView(){
  return(
    <Registro></Registro>
  );
}*/

const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="DatosVal" component={DatosVal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;