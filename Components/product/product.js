import React ,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text,Modal,TouchableOpacity,View,StyleSheet,ScrollView,Button ,
    TextInput,
    FlatList
} from 'react-native';

export default class product extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:'temp',
        }
    }
    
    static navigationOptions = ({ navigation }) => {
        return {
           header: null
        }
     }
    
    _ShowItem(name1){
        console.log('caeed db ilist name :',name1);
        fetch('https://biharilegendsback.000webhostapp.com/run_query.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: 'Select * From '+name1,
          }) 
        }).then((response) => response.json())
              .then((responseJson) => {
                console.log('caeed db ilist1');
                  this.props.navigation.navigate('IList',{
                    data:responseJson,
                    name:"1_item_tble",
                  });
              }).catch((error) => {
                console.error(error);
        });
    }
    render(){
        const { navigation } = this.props;
        const otherParam = navigation.getParam('data', '[{"No Record Found"}]');
        let value = JSON.parse(otherParam);
        return(
            <ScrollView >
                <FlatList
                    data={value}
                    renderItem={({item}) =><TouchableOpacity style={styles.tabIteam} onPress={() => this._ShowItem(item.table_name)}><Text style={styles.item}>{(item.table_name).split('_').join(' ')}</Text></TouchableOpacity>}
                    keyExtractor={item => item.table_id}
                />                
                <Text >   </Text>
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
    model : {
        height:'80%',
        width:'80%',
        margin:'10%',
    },
    item: {
        padding: 2,
        fontSize: 20,
        fontWeight:'300',
        height: 44
    },
    tabIteam:{
        backgroundColor:'gray',
        borderWidth:1,
        borderColor: 'black'
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