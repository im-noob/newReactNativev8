import React from 'react';
import { Button, Text, View,ScrollView } from 'react-native';
import { createStackNavigator,TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/FontAwesome';
import ChangePassword from '../../login/changePassword'
import TakeOrderFromCustomer from '../Tabs/takeOrderFromCustomer'
import ProductTabs from '../Tabs/ProductTab'
import Apps from '../../product/ShowDetails'





class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class Product extends React.Component{
  static navigationOptions = {
    title: 'Product',
  };
  render(){
    return(
            <ScrollView>
            <TakeOrderFromCustomer/>
            </ScrollView>
            
      )
  }
}

class Report extends React.Component{
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', 'Report'),
  //   };
  // };
  render(){
    return(
    <View>
      <Text>Not Avilable</Text>
        
        </View>
      )
  }
}




export default TabNavigator(
  {
    
    Report :{screen: Report},
    
   
    Order:{screen: Product },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName === 'Order'){
          iconName = `shopping-cart${focused ? '':''}`;
        }else if (routeName === 'Report') {
          iconName = `truck${focused ? '' : ''}`;
        } 

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons<Icon name="home" size={30} color="black" />
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'black',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
