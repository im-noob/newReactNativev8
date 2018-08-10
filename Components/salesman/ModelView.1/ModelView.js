import React ,{Component} from 'react';
import { Text,View ,FlatList,Image,Modal, StyleSheet,Button,TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ModelViews extends Component{
    constructor(props){
                        super(props)
                        this.state={
                                        title:this.props.title,
                                        subTitle:this.props.subTitle,
                                        seller:false,
                                        pOrder:true,
                                        oHistory:false,
                                        flag:true,
                                        calling:"2",
                                        
                                    }
                     }
setModalVisible(visible){
                        this.setState({modalVisible: visible});
                      }

                      menuButtonHome = (value) =>{
                       this.setState.calling=value
                       this.setState.flag=false
                       this.setState.flag=true
                        console.log(value + " buttton pressed");
                     }
  
    render(it){
               /** return(
                   
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                alert('Modal has been closed.');
                        }}>
                            <View style={{marginTop: 22}}>
                                <View>
                                {()=>this.viewFn()}

                                <TouchableHighlight
                                    onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>
            
                );*/

                return(
                    <View style={containerMain.screenMain}>
                            <View style={containerMain.headerCSS}>
                                <View style={containerMain.headerName}>
                                    <Text style={containerMain.tabName}>{this.state.subTitle}</Text>
                                </View>
                            </View>

                                <View style={containerMain.boadyCSS}>
                               <Text>Heloo</Text>
                             
                               {this.state.modal}
                                </View>

                            <View style={containerMain.footer}>        
                                <TouchableOpacity
                                style={containerMain.tabIteam}
                                onPress={ () => this.menuButtonHome("1")}
                                >
                                <Icon name="user" size={30} color="black" />
                                <Text style={containerMain.tabTitle}>Seller Profile</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                style={containerMain.tabIteam}
                                onPress={() => this.menuButtonHome("2")}
                                >
                                <Icon name="exclamation-triangle" size={30} color="black" />
                                <Text style={containerMain.tabTitle}>Panding Order</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                style={containerMain.tabIteam}
                                onPress={() => this.menuButtonHome("3")}
                                >
                                <Icon name="trash-o" size={30} color="black" />
                                <Text style={containerMain.tabTitle}>Order History</Text>
                                </TouchableOpacity>

                               
                            </View>                  
                  </View>
                )
            }

}

// var MyComponent = React.createClass({
//     getInitialState() {
//       return { /* initial state */ };
//     },
//   });

 containerMain = StyleSheet.create({
    screenMain:{
                  // flexDirection:'row',
                  // backgroundColor:'rgb(241, 244, 171)',
                  flex:1,
                  // height:'100%',
                  // width:'100%',
                
                },
     footer:{                            
    //             position: 'absolute',
    //             flex:0.1,
    //             left: 0,
    //             right: 0,
    //             bottom: -10,
                backgroundColor:'rgb(208, 229, 226)',
               flexDirection:'row',
                height:60,
                justifyContent:'space-around',
               // alignItems:'center',
              },
      header:{                            
                //position: 'absolute',
               // flex:0.1,
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
                //  flex: 1, 
                 // flexDirection: 'row',
                  position: 'relative',
                  bottom:0,
                  right:0,
                  left:0,
                  height:80,
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
              // flexDirection: 'row',
                 flex:1,
                backgroundColor:"#becde5",
              },
              tabTitle:{
                fontSize:11,
                color:'rgb(0,0,0)',
              },
              tabIteam:{
                alignItems:'center',
                justifyContent:'center'
              }

      // flexDirection: 'row',
      // backgroundColor:'red',
      // borderWidth : 1,
      // borderColor : 'blue',
      // marginBottom: 2,
      // position: 'absolute',<Header
//    statusBarProps={{ barStyle: 'light-content' }}
//    leftComponent={{ icon: 'menu', color: '#fff' }}
//    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
//    rightComponent={{ icon: 'home', color: '#fff' }}
//  />
//             // bottom:0,
      // width:500,
        
});

class ModelNevigate extends Component{
    constructor(props){
        
                        super(props)
                        
                       this.state={
                            calling:this.props.calling
                        }
                    }
           render(){
            console.log(this.state.calling);
                    if(this.state.calling == "1")
                        return(<View><Text>Hello tot1 </Text></View>)
                    else if(this.state.calling == "2")
                    return(<View><Text>Hello tot4 </Text></View>)
                    else if(this.state.calling == "3")
                    return(<View><Text>Hello tot7 </Text></View>)
                    else 
                         return(<View><Text>Hello tot1 </Text></View>)
            }

            
    
   
    
}