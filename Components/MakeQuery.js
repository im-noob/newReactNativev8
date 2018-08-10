import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
 

class MakeQuery extends Component{
    fire(query){
        fetch('https://biharilegendsback.000webhostapp.com/run_query.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: query,
          }) 
        }).then((response) => response.json())
              .then((responseJson) => {
                Alert.alert("Data Received");
                return(responseJson);       
              }).catch((error) => {
                console.error(error);
              });
      }
      render(){
          return null;
      }
}

