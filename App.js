import React ,{Component} from 'react';
import { Text,View , StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
 import {createStackNavigator,NavigationScreenOption} from 'react-navigation';

 import MainMenuAdmin from './Components/admin/Menu/MainMenuAdmin'
 import MainMenuSeller from './Components/salesman/Menu/MainMenuSeller'
 



import Login from './Components/login/Login.js';
import Secured from './Components/login/Secure.js';
import Env from './Components/env'

export default class myapp extends Component{
  state = {
    isLoggedIn: false
  }


  render(){

    
    
      if(false){
        
        return(<MainMenuAdmin/>)
      }
      else{
       
        return(<Application/>)
      }
      
    
 
   
  }


}


const Application = createStackNavigator(
 { 
   Home:{screen:Login},
   User:{screen:MainMenuSeller},
   Admin:{screen:MainMenuAdmin}
},{
    initialRouteName: 'Home', 
  }

) 



