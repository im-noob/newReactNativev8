import React ,{Component} from 'react';
import { Text,View ,Button,ScrollView, FlatList,Image, StyleSheet,Modal,TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
import { StackNavigator,createStackNavigator,TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import Icon from 'react-native-vector-icons/FontAwesome';
//import { List,ListItem } form 'react-native-elements'; title={item.id}
                        // subTitle={item.name}
import ModelViews from '../ModelView/ModelView.js';
   
export default class OrderDetailsScreen extends Component{

    // constructor(props){
    //     super(props)
    //     this.state={
    //             orderID:this.props.orderID,
    //             sellerID:this.props.sellerID,
    //                 }
    // }
    render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return(<View>
            
            <ProductListData sellerID={JSON.stringify(itemId)} orderID={JSON.stringify(otherParam)} /></View>)
    }
    // return(<View>
            
    //             <ProductListData sellerID="45" orderID="56" /></View>)
    //    }
}

class ProductListData extends Component{
    constructor(props){
        super(props)
        this.state={
                orderID:this.props.orderID,
                sellerID:this.props.sellerID,
                    }
    }
    render(){
    return(

                
                   <ScrollView>
                   <View style={styles.screenMain}>

                        <View style={styles.headerCSS}>
                            <View style={styles.header}>
                            <View >
                            <Text style={styles.tabName}>Details Screen</Text>
                            </View>
                            <View style={styles.subTitle}>
                            <Text>itemId:{this.props.sellerID} </Text>
                            <Text>otherParam: {this.props.orderID}</Text>
                            </View>
                            </View>
                        </View>

                        <View style={styles.boadyCSS}>

                            <View style={styles.itemcss}>
                            <View styles={styles.itemHeadcss}>
                            <Text style={styles.orderIDcss}>OR 245</Text>
                            <Text style={styles.tabName}>Product Name</Text>
                            <Text style={styles.tabsub}>(sub name)</Text>
                            </View>
                            <View style={styles.subTitle}>
                            <Text>Qunty :34</Text>
                            <Text>Type : 657</Text>
                            </View>
                            <View style={styles.action}>
                                <Button title="Done" style={styles.yesButton}>
                                </Button>
                            </View>

                            </View>

                            <View style={styles.itemcss}>
                            <View styles={styles.itemHeadcss}>
                            <Text style={styles.orderIDcss}>OR 245</Text>
                            <Text style={styles.tabName}>Product Name</Text>
                            <Text style={styles.tabsub}>(sub name)</Text>
                            </View>
                            <View style={styles.subTitle}>
                            <Text>Qunty :34</Text>
                            <Text>Type : 657</Text>
                            </View>
                            <View style={styles.action}>
                                <Button title="Done" style={styles.yesButton}>
                                </Button>
                            </View>

                            </View>

                            <View style={styles.itemcss}>
                            <View styles={styles.itemHeadcss}>
                            <Text style={styles.orderIDcss}>OR 245</Text>
                            <Text style={styles.tabName}>Product Name</Text>
                            <Text style={styles.tabsub}>(sub name)</Text>
                            </View>
                            <View style={styles.subTitle}>
                            <Text>Qunty :34</Text>
                            <Text>Type : 657</Text>
                            </View>
                            <View style={styles.action}>
                                <Button title="Done" style={styles.yesButton}>
                                </Button>
                            </View>

                            </View>

                            <View style={styles.itemcss}>
                            <View styles={styles.itemHeadcss}>
                            <Text style={styles.orderIDcss}>OR 245</Text>
                            <Text style={styles.tabName}>Product Name</Text>
                            <Text style={styles.tabsub}>(sub name)</Text>
                            </View>
                            <View style={styles.subTitle}>
                            <Text>Qunty :34</Text>
                            <Text>Type : 657</Text>
                            </View>
                            <View style={styles.action}>
                                <Button title="Done" style={styles.yesButton}
                                onPress={()=>{alert("click");}}/>
                                
                            </View>

                            </View>

                           

                        </View>
                        
                    </View>    

                     </ScrollView>   
                   

               )
            }
}

const styles = StyleSheet.create({
    itemcss:{
        elevation:6,
        borderColor:'rgb(225,225,225)',
        borderWidth: 5,
    },
    
    action:{
        
        
    },
    orderIDcss:{
        fontSize:14,
        color:"red",

    },
    screenMain:{
                  flex:1,                
                },
     footer:{                            
                backgroundColor:'rgb(208, 229, 226)',
               flexDirection:'row',
                height:60,
                justifyContent:'space-around',
              
              },
      header:{                            
                left: 0,
                right: 0,
                top: 10,
                backgroundColor:'rgb(208, 229, 226)',
                flexDirection:'row',
                height:60,
                alignItems:'center',
                elevation:6,
                paddingHorizontal: 15,
                justifyContent:'space-between',
              },
    menuView:{
                padding:2,
                alignItems:'center',

              } ,                       
  activeButton:{
                    borderTopColor: 'blue',
                },
  button: {
                  alignItems: 'center',
                  backgroundColor: 'rgb(208, 229, 226)',
                  padding: 30
                },
                btnClickContain: {
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  alignSelf: 'stretch',
                  backgroundColor: '#009D6E',
                  borderRadius: 5,
                  padding: 5,
                  marginTop: 5,
                  marginBottom: 5,
                },
                btnContainer: {
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  alignSelf: 'stretch',
                  borderRadius: 10,
                },
                btnIcon: {
                  height: 25,
                  width: 25,
                },
                btnText: {
                  fontSize: 18,
                  color: '#FAFAFA',
                  marginLeft: 10,
                  marginTop: 2,
                },


                headerCSS:{
                
                  position: 'relative',
                  bottom:0,
                  right:0,
                  left:0,
                  height:100,
                  width:'100%',
                  backgroundColor:'blue' ,
                  justifyContent :'space-around'
                      },


              headerName:{
                  flex:3,
                  justifyContent: 'center',
                  alignItems:'center',
                 start:0
              },
            
              tabName:{
                   color:'rgb(255,255,255)',
                  justifyContent: 'center',
                  alignItems:'center',
                  fontWeight:"900",
                  fontSize:20,                                              
                  fontStyle: 'italic',
              },
    boadyCSS:{
              
                 flex:1,
                backgroundColor:"#becde5",
              },
              boadyCSS:{
              
                flex:1,
               backgroundColor:"#becde5",
             },
    tabTitle:{
                fontSize:11,
                color:'rgb(0,0,0)',
              },
    subTitle:{
                alignItems:'center',
                justifyContent:'center'
              }

     
});
