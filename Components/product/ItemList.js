import React ,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text,Modal,TouchableOpacity,Button,View,StyleSheet,ScrollView,
    FlatList
} from 'react-native';

export default class product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modelVisiable:false,
            details:[],
            name : 'temp',
            id : ''
        }   
    }
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Item List',
        };
      };

    fire(name1){
        console.log("Table name i fire = ",name1)
        console.log("Query:"+'select column_name from information_schema.columns where table_name="'+name1+'"')
        fetch('https://biharilegendsback.000webhostapp.com/run_query.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                //query : 'select * from security_table'
                query: 'select column_name from information_schema.columns where table_name="'+name1+'"',
            }) 
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log('table name :',name1);
                    console.log('Column Name :',responseJson);
                //  this.props.navigation.navigate('AddItem',{
                //    data:responseJson,
                //    name :name1
                //  });
            }).catch((error) => {
                //alert("cuk");
                console.error(error);
        });
    }
    
    setModalVisible = (value,item) =>{

        this.setState({details:item.item});
        console.log("this si sdat");
        this.setState({modelVisiable:value});
    }

    showData(){
        let temp = [];
        for(var key in this.state.details)
            temp.push(<Text style={styles.item}>{key} : {this.state.details[key]}</Text>)
        return temp;
    }
    render(){
        const { navigation } = this.props;
        const value = navigation.getParam('data', '[{"No Record Found"}]');
        const name1 = navigation.getParam('name','error');
        console.log(name1);
        return(
            <ScrollView >
                <Modal
                    aniqmationType="slide"
                    transparent={false}
                    visible={this.state.modelVisiable}
                    onRequestClose={() => {this.setState({modelVisiable:false})}}
                    >
                    <View style={styles.model}>
                        <View style={{margin:10}}>
                            <Text style={{color:'green',fontSize:28,fontWeight:'500',textAlign:'center'}}> Item Details </Text>
                        </View>
                        <View style={{justifyContent:'space-around'}}>
                            { this.showData() }
                        </View>
                        {/* <View  style={{height:60,flexDirection:'row',position:'relative',justifyContent:'space-around',backgroundColor:'rgb(208, 229, 226)'}}>
                            <TouchableOpacity 
                                style={{justifyContent:'center',alignItems:'center'}}
                            >
                                    <Icon name="undo" style={{flex:1}} size={40} color="green" />
                                    <Text>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity

                                style={{justifyContent:'center',alignItems:'center'}}               
                            >
                                    <Icon name="trash" style={{flex:1}} size={40} color="red" />
                                    <Text>Delete</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </Modal>
                {/* <Button 
                    onPress = {() => this.fire(name1)}
                    title = 'Add New '
                /> */}
                <FlatList
                    data={value}
                    renderItem={({item}) =><TouchableOpacity style={styles.tabIteam} onPress={() => this.setModalVisible(true,{item})}><Text style={styles.item}>{item.PRODUCT}</Text></TouchableOpacity>}
                    keyExtractor={item => item.BARCODE}
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
    }
}); 