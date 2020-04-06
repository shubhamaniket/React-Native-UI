import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image,Text,View} from 'react-native';
import Home from './screens/home';
import Bookscreen from './screens/bookscreen';
const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerTransparent:true,title:'',headerTintColor:'#fff'}}/>
          <Stack.Screen name="Bookscreen" component={Bookscreen} options={{headerTransparent:true,title:'',headerTintColor:'#fff'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}