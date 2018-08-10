import React ,{Component} from 'react';

import { Text,View,StyleSheet,ScrollView,Button ,
    TextInput,
    SectionList
} from 'react-native';

export default class AddItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataNew : [],
            no:5,
            record:'',
            name:'',
            item0:'',
            item1:'',
            item2:'',
            item3:'',
            item4:'',
            item5:'',
            item6:'',
            item7:'',
            item8:'',
            item9:'',
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'New Item',
        };
      };
    fire(query){
        console.log(query);
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
            //alert("Data Received");
            //console.log("data recied");
            console.log(JSON.stringify(responseJson));
            return(responseJson);       
            }).catch((error) => {
            console.error(error);
            });
    }
    onClickPress(){
        this.fire(sql);
    }
    render(){
        const { navigation } = this.props;
        const value = navigation.getParam('data', '[{"No Record Found"}]');
        let showData  = [];
        for (var key in value)
        {               
            temp.push(
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                    <TextInput
                        style = {styles.txtPos2}
                        placeholder='Eneter Fields Name'
                   
                        underlineColorAndroid='transparent'
                        onChangeText = {(text) => value[key]=text}               
                    />
            </View>)
        } 
        const name1 = navigation.getParam('name','error');
        console.log("Recieved Data:",value)
        return(
            <ScrollView style = {styles.bgView}
            >
                <View style={{backgroundColor:'blue'}} >
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'500',color:'red',marginTop:10}}> {this.state.name} </Text>
                                 
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                    
                </View>
            </ScrollView>
        );
    }
}
let styles = StyleSheet.create({
    
    bgView : {
        backgroundColor:'#739ef7',
        height:'100%',
        width:'100%'
    },
    PosImg : {
        marginLeft:'20%',
        marginTop:'5%',
        marginBottom:'5%',
        width:'60%'
    },
    textCont:{
        flexDirection:'row',
         margin:'5%',
    },
    posBt : {
        flex:1,
        height:40,
        padding:30
    },
    txtPos : {
        flex:1,
        height:40,
        borderWidth: 1,
        padding:2,
        textAlign:'center',
        color:'white',
        borderColor: 'white',
        borderRadius:20,
        backgroundColor:'black',
        fontSize:20,
        fontWeight:'500'
    },
    txtPos2 : {
        textAlign:'center',
        borderRadius:20,
        height:40,
        borderWidth: 1,
        padding:2,
        color:'white',
        borderColor: 'white',
        backgroundColor:'black',
        fontSize:20,
        fontWeight:'500'
    },
    txtPos1 : {
        flex:2,
        height:40,
        borderWidth: 1,
        padding:2,
        color:'white',
        borderColor: 'white',
        backgroundColor:'black',
        fontSize:20,
        fontWeight:'500'
    }
}); 