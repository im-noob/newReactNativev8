import React ,{Component} from 'react';

import {View,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator} from 'react-navigation'; // Version can be specified in package.json
import Product from '../product/product'
import AddProduct from '../product/AddProduct'
import ItemList from '../product/ItemList'
import AddItem from '../product/AddItem'

class ShowDetails extends React.Component {
    fire(){
        //console.log(query);
        fetch('https://biharilegendsback.000webhostapp.com/run_query.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query:'SELECT * FROM product_name_table',
          }) 
        }).then((response) => response.json())
              .then((responseJson) => {
                  //console.log(responseJson);
                  this.props.navigation.navigate('product',{
                    data:JSON.stringify(responseJson)
                  });
              }).catch((error) => {
                console.error(error);
        });
    }
    render(){
        return(
           <View>
                <Button 
                    title = "Product"
                    onPress = {() => this.fire()}
                />
           </View> 
        );
    }
}

const RootStack = createStackNavigator(
{
        ShowItem:{screen:ShowDetails},
        product:{screen:Product},
        AddProd:{screen:AddProduct},
        IList:{screen:ItemList},
        AddItem:{screen:AddItem}
    },
    {
      initialRouteName: 'ShowItem',

      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },  
    }
  );

export default class Apps extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
       header: null
    }
 }
    render() {
      return <RootStack />;
    }
}