import React ,{Component} from 'react';
import { Text,View ,Button,ScrollView,ImageBackground, FlatList,Image, StyleSheet,Modal,TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
import { StackNavigator,createStackNavigator,TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import Icon from 'react-native-vector-icons/FontAwesome';
//import { List,ListItem } form 'react-native-elements'; title={item.id}
                        // subTitle={item.name}
import ModelViews from '../ModelView/ModelView.js';
   
export default class OrderDetailsScreen extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: null
    }
 }
  
    render(){
        const { navigation } = this.props;
        const orderID = navigation.getParam('orderID', 0);
        const sellerID = navigation.getParam('sellerID', 0);

        return(
            
            <ProductListData sellerID={ JSON.stringify(sellerID)} orderID={JSON.stringify(orderID)}/>)
    }
}

class ProductListData extends Component{
    
    constructor(props){
        super(props)
        this.state={
                        sellerID:this.props.sellerID,
                        itemId:this.props.orderID,
                        dataSource:[]
                    }
                  this.dataFetch()
                   
    }

    dataFetch =() => {
            
                 // Run your API call
  var  query ='SELECT order_id,sales_man_id,product_id,sub_category,image,quantity,size,status FROM order_table WHERE status = 0 and sales_man_id = '+parseInt(this.props.sellerID);
                 console.log("Query :=="+query)
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
                             //  alert("data recive")
                             
                               console.log("--------------------------",responseJson)
                         
                                this.setState({dataSource:{responseJson}})
                             
                                console.log("##########",this.state.dataSource.responseJson)
                                
                             }).catch((error) => {
                                 
                               console.error(error);
                               
                             });
             
                  
}

doneFn=(data)=>{
                    console.log("Delehdfs");
                    console.log(data)
                     // Run your API call
                 var  query ='UPDATE `order_table` SET `status`=1 where `order_id`='+data;
                 console.log("Query :=="+query)
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
                                                         
                                console.log("--------------------------",responseJson)
                                alert('Product Confirm')
                                this.dataFetch()
                             
                             }).catch((error) => {
                                 
                               console.error(error);
                               
                             });
                }

_renderIteam =({item})=>{

 var base64Icon = 'data:image/png;base64,'+item.image;
    console.log("Under render")
                            return(        
                                <View style={styles.itemcss}>
                                <View style={styles.image}>
                                 <Image style={{width:200,height:200,borderRadius:5,opacity:1}} source={{uri: base64Icon}}/>
                                </View>
                                <View styles={styles.itemHeadcss}>   
                                    <Text style={styles.tabName}>{item.product_id}</Text>
                                    <Text style={styles.tabsub}>({item.sub_category})</Text>
                                </View>
                               
                               
                               
                                <View style={styles.subTitle}>
                                <Text style={styles.qunt}>QUANTITY :{item.quantity}</Text>
                                <Text style={styles.size}> SIZE : {item.size}</Text>
                                </View>
                                <View style={styles.action}>
                                    <Button 
                                    title="Confirm" style={styles.yesButton} 
                                    onPress={()=>{this.doneFn(item.order_id)}}>
                                    </Button>
                                </View>

                            </View>)
                        }



    render(){ 
      let pic = {
        uri: 'https://i.pinimg.com/236x/31/86/d4/3186d43532f63f5b8b9c8f1afa635bd9--heart-wallpaper-wallpaper-iphone.jpg'
      };         

    return(
                  <ImageBackground
                  style={{width: '100%', height: '100%'}}
                  source={pic}
                  >
                   <View style={styles.screenMain}>

                       

                        <View style={styles.boadyCSS}>

                             <FlatList
                                    data={this.state.dataSource.responseJson}
                                    renderItem={this._renderIteam}
                                    keyExtractor={item => item.order_id}
                                    />   
                           

                        </View>
                        
                    </View>    

                    </ImageBackground>
               
                     
                   

            )
        }
}

const styles = StyleSheet.create({
  qunt:{
          fontSize:18,
          color:"red"

  },
  size:{
          color:'#1b02f9',
          fontSize:18
  },
  itemHeadcss:{
            
            
              backgroundColor:'#045116',
              borderRadius:5,
              
              borderTopRightRadius:5,
              borderTopLeftRadius: 5,
              alignContent: 'center',
              justifyContent:'space-around'
  },
  tabsub:{
            color:'rgb(255,255,255)',
            fontWeight:"900",
            fontSize:20,                                              
            
            backgroundColor:'#045116',
          },
    itemcss:{
        elevation:6,
        borderColor:'rgb(225,225,225)',
        borderWidth: 5,
    },

    image:{
          alignItems: 'center',
          backgroundColor:'#58a52e',
          
    },
    
    action:{
        
        
    },
    
    screenMain:{
                  flex:1,                
                },
    
              tabName:{
                   color:'rgb(255,255,255)',
                  fontWeight:"900",
                  fontSize:30,                                              
                  fontStyle: 'italic',   
                  backgroundColor:'#045116',        
              },
    boadyCSS:{
              
                 flex:1,
                backgroundColor:"#becde5",
              },
              
    
    subTitle:{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#e0d5d5',

              }

     
});
