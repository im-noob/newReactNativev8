import React ,{Component} from 'react';
import { Text,View ,Button, FlatList,Image,NetInfo,StyleSheet,Modal,TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
import { StackNavigator,createStackNavigator,TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import OrderDetailsScreen from './OrderDetailsFile';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { List,ListItem } form 'react-native-elements'; title={item.id}
                        // subTitle={item.name}
import ModelViews from '../ModelView/ModelView.js';

class ProductTab extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: null
    }
 }
  
 
    constructor(props){ 
                        super(props)
                        this.state ={
                           
                            modalVisible:false,
                            title:"",
                            subTitle:"",
                            dataSource:[] }

                            this.dataFetch()
                    }


                    //  database connection
                    dataFetch =() => {

                       
                                // Run your API call
                                var  query ='SELECT personal_details_table.name,order_table.sales_man_id,product_name_table.table_name,personal_details_table.phone_no,personal_details_table.email,order_table.order_id,order_table.quantity,order_table.size from order_table JOIN personal_details_table ON order_table.sales_man_id=personal_details_table.user_id JOIN product_name_table on product_name_table.table_id=order_table.product_id where order_table.status = 0';
                                console.log("Query :"+query)
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
                                              
                                              this.setState({dataSource:responseJson})
                                              console.log("jkofdjjgfoj",responseJson)
                                              console.log("..........",this.state.dataSource)
                                            }).catch((error) => {
                                                
                                              console.error(error);
                                              
                                            });
                          
                        
                        
                     
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
                      <Image source={item.image} style={{width: 193, height: 110}}/>
                      <View>
                      <Text style={this.styles.nameText}>{item.name}</Text>
                      </View>
                      <View>
                      <Text>Cont:{item.phone_no}</Text>
                      <Text style={this.styles.idText}>ID :{item.order_id}</Text>
                      </View>
                  </View>
                  <View style={this.styles.productCSS}>
                      <View style={this.styles.productItem}>
                          <Text style={this.styles.productName}>{item.table_name}</Text>
                         
                      </View>
                      <View style={this.styles.productItem}>
                       
                          <Text style={this.styles.productQunt}>Size : {item.size}</Text>
                          <Text style={this.styles.productQunt}>Quantity :{item.quantity}</Text>
                      </View>
                  </View>
          </View>
          
          <Button
          title="Go to Details"
          onPress={() => {

            this.props.navigation.navigate('Details',{
                orderID: parseInt(item.order_id),
                sellerID :parseInt(item.sales_man_id),
            });
          }}
        />
          
        </View>
        )
        
    }                

    render(){
        
        const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
       
            return(
                <View>
            <FlatList
                data={this.state.dataSource}
                renderItem={this._renderIteam}
                keyExtractor={item => item.order_id}
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
        Product: { screen: ProductTab },
        Details: { screen: OrderDetailsScreen },
    },
    {
      initialRouteName: 'Product',
    }
  );

  export default class ProductTabs extends React.Component {
    render() {
      return <RootStack />;
    }
  }
 

  //under button action 
  dataFetch =() => {

    // alert('under fetch')
         
              // Run your API call
              var  query ='SELECT personal_details_table.name,product_name_table.table_name,personal_details_table.phone_no,personal_details_table.email,order_table.order_id,order_table.quantity,order_table.size from order_table JOIN personal_details_table ON order_table.sales_man_id=personal_details_table.user_id JOIN product_name_table on product_name_table.table_id=order_table.product_id where order_table.status = 0 AND order_table.sales_man_id='+this.props.sellerID;
              console.log("Query :"+query)
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
                           this.setState({dataSource:responseJson})
                            console.log("--------------------------",responseJson)
                                  // {this.setState.response={responseJson}}
                          }).catch((error) => {
                              
                            console.error(error);
                            
                          });
          
               
}