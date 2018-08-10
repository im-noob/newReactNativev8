import React from 'react';
import { Button, Text,Modal, View,TextInput, StyleSheet,Picker,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator,createStackNavigator,TabNavigator, createBottomTabNavigator,createMaterialTopTabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductTabs from '../Tabs/ProductTab';
import OrderDetailsScreen from '../Tabs/OrderDetailsFile';
import SellManOptions from '../Tabs/SellManOption';
import HomeTab from '../Tabs/HomeTab'
import SettingOptions from '../Tabs/setting'
import ChangePassword from '../../login/changePassword'
import MapView from 'react-native-maps';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: null
    }
 }

  constructor(props) {
    super(props);
    this.state = {
        userType: 'SalesMan',
        userID_to_find:'',
        track_locaiton_is_disable:false,
        modalVisible:false,
        latitude: -121.77665,
        longitude: -23.56234,
        userIDArr:[],
    };

}
componentDidMount(){
  fetch('https://biharilegendsback.000webhostapp.com/run_query.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: "SELECT user_id FROM curr_location_table ORDER BY user_id ASC",
    }) 
  }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson[0]);
      let arr = [];
      let i = 1 ;
      responseJson.forEach(element => {
        arr.push(element.user_id);
        console.log(element.user_id);
        console.log(arr[i]);
      });
      //alert("Data Received");
      //arr.sort();
      this.setState({
        userIDArr: arr
       })        
    }).catch((error) => {
      console.error(error);
    });
}
getLocation(){

  if(this.state.userID_to_find == ""){
    alert("Enter ID first");
    return;
  }
  this.setState({
    track_locaiton_is_disable:true
  });
  fetch('https://biharilegendsback.000webhostapp.com/run_query.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: "SELECT location FROM `curr_location_table` WHERE `user_id` = '"+this.state.userID_to_find+"'",
    }) 
  }).then((response) => response.json())
        .then((responseJson) => {
          
          
          
          let data = JSON.parse(responseJson[0].location);
          console.log(data);
          this.setState({track_locaiton_is_disable:false});
          
          this.setState({
            
            latitude:parseFloat(data.latitude),
            longitude:parseFloat(data.Longitude),
            modalVisible:true,
          });
          console.log(this.state.latitude);
          console.log(this.state.longitude);
          return(responseJson);       
        }).catch((error) => {
         this.setState({track_locaiton_is_disable:false});

          console.error(error);
          alert("Invalid Option ");
          return;
        });
}

  render() {
    let userIDList = this.state.userIDArr.map( (s, i) => {
        return <Picker.Item key={i} value={s} label={s} />
    });
    return (
      <ScrollView>
           <View style={{backgroundColor:"#f4b642",width:'100%',padding:5}}>
              <View style={{backgroundColor:"#f4b642",width:'100%',padding:7}}>
              <Text style={{fontSize:20,fontWeight:'900'}}>Select seller ID to track</Text>
              </View>
              
              <Picker
                selectedValue={this.state.userID_to_find}
                style={{backgroundColor:"#216ae0",color:'white'}}
                onValueChange={(itemValue, itemIndex) => this.setState({userID_to_find: itemValue})}>
                <Picker.Item label="Select SalesMan ID" value="saleman_id" />
                  {userIDList}
                </Picker>
    
              <View style={{backgroundColor:"#f4b642",width:'100%',padding:7}}>
              <Text style={{fontSize:20,fontWeight:'900'}}>OR</Text>
              <Text style={{fontSize:20,fontWeight:'900',padding:7}}>Enter seller ID to track</Text>
              <TextInput 
                  value= {this.state.userID_to_find}
                  style={{backgroundColor:'rgb(225,225,225)',color:'rgb(0,0,0)'}} 
                  placeholder='Enter ID'
                  onChangeText={(text) => this.setState({userID_to_find: text})}
                  underlineColorAndroid = 'transparent'
              />
              </View>
              <Modal 
               onRequestClose={() => {
                 this.setState({modalVisible:false});
              }}
               //animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
              >

                <MapView style={styles.map} initialRegion={{
                    latitude:this.state.latitude ,
                    longitude:this.state.longitude,
                    latitudeDelta: .05,
                    longitudeDelta: .05
                    }}> 
                
                    {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                        coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
                        title={"Your Location"}
                    />}

                </MapView>    
              
              
              </Modal>

              <Button
                title='Track Location' 
                onPress={()=>{this.getLocation()}}
                disabled = {this.state.track_locaiton_is_disable}
              />
           </View>
      </ScrollView>
      
    );
    // return(<View><OrderDetailsScreen/></View>)
  }
}



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
    
        <ProductTabs/>
      )
  }
}

class Users extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'User'),
    };
  };
  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Users!</Text>
      </View>)
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});



export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Users :{screen: SellManOptions},
    
   
    Order:{screen: Product },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : ''}`;
        }else if(routeName === 'Order'){
          iconName = `shopping-cart${focused ? '':''}`;
        }else if (routeName === 'Users') {
          iconName = `users${focused ? '' : ''}`;
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

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },
});