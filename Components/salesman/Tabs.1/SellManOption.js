import React from 'react';
import { Button, Text,StyleSheet, View } from 'react-native';
import { StackNavigator,createStackNavigator,TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import SalesMan from './SalesMan';
import CreateUser from '../Tabs/CreateUser';
import SellerTabs from './SalesMan';


 class SellManOption extends React.Component{

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'Seller'),
        };
      };
    render(){
        return(
            <View styles={styles.contener}> 
                <View style={styles.itemContaners}>
                    <View>
                        <Text>To Add New seller click here.</Text>
                    </View>
                    <Button title="Add" onPress={() => this.props.navigation.navigate('Add')}/>
                </View>

                <View style={styles.itemContaners}>
                    <View>
                        <Text>To view seller click here.</Text>
                    </View>
                    <Button title="View" onPress={() => this.props.navigation.navigate('View')}/>
                </View>

                <View style={styles.itemContaners}>
                    <View>
                        <Text>To delete  seller click here.</Text>
                    </View>
                    <Button title="Delete" onPress={() => this.props.navigation.navigate('Delete')}/>
                </View>

                 <View style={styles.itemContaners}>
                    <View>
                        <Text>To update seller click here.</Text>
                    </View>
                    <Button title="Update" onPress={() => this.props.navigation.navigate('Update')}/>
                </View>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    contener:{
                backgroundColor: 'rgba(247,247,247,1.0)',
            },
            itemContaners:{
                padding:5,
                borderBottomColor:'blue',
                borderRadius:4,
            }
})
 
class Add extends React.Component{
    render(){
        return(<View><CreateUser/></View>)
    }
}

class Delete extends React.Component{
    render(){
        return(<View><Text>HEllo</Text></View>)
    }
}

class Edit extends React.Component{
    render(){
        return(<View><SellerTabs/></View>)
    }
}

class Views extends React.Component{
    render(){
        return(<View><SalesMan msg="View"/></View>)
    }
}



class Update extends React.Component{
    render(){
        return(<View><Text>HEllo</Text></View>)
    }
}



  const RootStack = createStackNavigator(
    {
        Product: { screen: SellManOption },
        Add: { screen:Add},
        
        View:{screen:Views}
    },
    {
      initialRouteName: 'Product',
    }
  );

  export default class SellManOptions extends React.Component {
    render() {
      return <RootStack/>;
    }
  }
 