import React ,{Component} from 'react';
import { Text,View ,Button, FlatList,Image, StyleSheet,Modal,TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
import { StackNavigator,createStackNavigator,TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import StudentsDetails from './sellerDetails';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { List,ListItem } form 'react-native-elements'; title={item.id}
                        // subTitle={item.name}
import ModelViews from '../ModelView/ModelView.js';

export default class SalesMan extends Component{

    constructor(props){
                        super(props)
                        this.state ={
                           
                            modalVisible:false,
                            title:"",
                            subTitle:"",
                            dataSource:[{id:'0',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'1',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'2',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'3',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'4',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'5',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'6',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'7',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'8',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'9',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'10',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'},
                            {id:'11',ID:'D6734',name: 'Raj Kumar',cont:'+91 9939224274',email:'nishantraj656@gmail.com', uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}]
                        }
                    }
 setModalVisible(visible){
                        this.setState({modalVisible: visible});
                        console.log("In setModalVisable "+visible);
                      }


    _renderIteam=({item})=>{
        return(
            <View>
              
           
            <View style={this.styles.contener}>
                  <View style={this.styles.contenerSec}>
                      <Image source={item.img} style={{width: 193, height: 110}}/>
                      <View>
                      <Text style={this.styles.nameText}>{item.name}</Text>
                      </View>
                      <View>
                      <Text>Cont:{item.cont}</Text>
                      <Text style={this.styles.idText}>ID :{item.id}</Text>
                      </View>
                  </View>
                  <View style={this.styles.productCSS}>
                      <View style={this.styles.productItem}>
                          <Text style={this.styles.productName}>Mobile</Text>
                          <Text style={this.styles.productQunt}>26</Text>
                      </View>
                      <View style={this.styles.productItem}>
                          <Text style={this.styles.productName}>Bag</Text>
                          <Text style={this.styles.productQunt}>2</Text>
                      </View>
                  </View>
          </View>
          <View style={this.styles.butonItem}>
          <Button
          title="Update"
          onPress={() => {
            /*1. Navigate to the Details route with params , {
              itemId: 86,
              otherParam: 'anything you want here',
            }*/
            this.props.navigation.navigate('Details',{
              itemId: item.id,
              otherParam: 'anything you want here',
            });
          }}
        />

        <Button
          title="Delete"
          onPress={() => {
            /* 1. Navigate to the Details route with params , {
              itemId: 86,
              otherParam: 'anything you want here',
            }*/
            this.props.navigation.navigate('Details',{
              itemId: item.id,
              otherParam: 'anything you want here',
            });
          }}
        />
         </View> 
        </View>
        )
        
    }                

    render(){
        
       
            return(
                <View>
                   

            <FlatList
                data={this.state.dataSource}
                renderItem={this._renderIteam}
                keyExtractor={item => item.id}
                />
                </View>)   
          

        
    }

    _onPress = (id)=>{ 
               
            alert("ID "+id)          
            {() => this.props.navigation.navigate('Details')}
                      
                           
                            
    }

   

    styles =StyleSheet.create({
                            nameText:{
                                                fontWeight: '900',
                                                padding:10,
                                               // justifyContent: 'space-between',     
                                            },
                            butonItem:{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        paddingBottom: 10,
                                        paddingLeft: 10,
                                        paddingRight: 10,

                                           },
                            contener:{
                                        flex:1,
                                        justifyContent:'center',
                                        backgroundColor:'rgb(225,225,225)',
                                        borderRadius:25,
                                        borderWidth:2,
                                        borderColor:'blue',
                                        justifyContent :'space-around'
                                    },
                                     contenerSec:{
                                                    flexDirection: 'row',
                                                    flex:1,
                                                    justifyContent:'center',
                                                    backgroundColor:'rgb(225,225,225)',
                                                    borderRadius:25,    
                                                    borderColor:'blue',
                                                    justifyContent :'space-between'
                                                },
                                    idText:{
                                                fontWeight:'bold',
                                                color:'red'
                                             },
                                    productCSS:{
                                        borderTopColor:'blue',
                                        borderTopWidth:1,
                                        
                                        justifyContent:'center',
                                        
                                    },
                                    productItem:{
                                                    paddingLeft:10,
                                                    paddingRight:10,
                                                    paddingTop:2,
                                                    paddingBottom:5,
                                                    flex:1,
                                                    flexDirection:'row',
                                                    justifyContent:'space-between'
                                                 },
                                    productName:{
                                                    fontWeight:'500',
                                                    fontStyle: 'italic',
                                                    color:'green',
                                                 },
                                    productQunt:{
                                                    fontWeight:'500',
                                                    fontStyle: 'italic',
                                                    color:'red',
                                                 }
                                })
                             
}


class ProductDetails extends Component{
    render(){
        return(<View><Text>HEllo</Text></View>)
    }
}

const RootStack = createStackNavigator(
    { 
        Product: { screen: SalesMan },
        Details: { screen: StudentsDetails },
    },
    {
      initialRouteName: 'Product',
    }
  );


 
  