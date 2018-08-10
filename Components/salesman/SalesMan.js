import React ,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Modal,Text,TouchableHighlight,TouchableOpacity,SectionList,View,StyleSheet,ScrollView,Button ,TextInput} from 'react-native';

export default class SalesMan extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.msg,
            modelVisiable:false,
            name:'Raj kumar',
            mobile:'9799787465',
            email:'dummy@gmail.com',
            add : 'At-gjat slkdj.skdj sfgkjfl,fdsf'
        }
    }

    setModalVisible(value,value1){
        this.setState({name:value1})
        this.setState({modelVisiable:value});
    }

    ViewSheller(){
        //alert('Method Called');
        return(
            <ScrollView >
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modelVisiable}
                    onRequestClose={() => this.setModalVisible(false,'')}
                    >
                    <View style={styles.model}>
                        <View style={{margin:10}}>
                            <Text style={{color:'green',fontSize:28,fontWeight:'500',textAlign:'center'}}> Seller Details </Text>
                        </View>
                        <View>
                            <Text style={styles.item}> Name : {this.state.name} </Text>
                            <Text style={styles.item}> Mobile No :{this.state.mobile} </Text>
                            <Text style={styles.item}> Email Id : {this.state.email} </Text>
                            <Text style={{fontSize: 20,fontWeight:'300',height: 100}}> Address : {this.state.add} </Text>
                        </View>
                        <View  style={{height:60,flexDirection:'row',position:'relative',justifyContent:'space-around',backgroundColor:'rgb(208, 229, 226)'}}>
                              
                            <TouchableOpacity 
                                style={{justifyContent:'center',alignItems:'center'}}
                                onPress={() => this.setModalVisible(false,'') }
                            >
                                    <Icon name="undo" style={{flex:1}} size={40} color="green" />
                                    <Text>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{justifyContent:'center',alignItems:'center'}}
                                onPress={() => this.setModalVisible(false,'') }
                            >
                                    <Icon name="trash" style={{flex:1}} size={40} color="red" />
                                    <Text>Delete</Text>
                                
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{justifyContent:'center',alignItems:'center'}}
                                onPress={() => this.setModalVisible(false,'')}
                            >
                                    <Icon name="times" style={{flex:1}} size={40} color="red" />
                                    <Text>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <SectionList
                
                sections={[
                    {title:'A',data:['Aderson','Amritesh']},
                    {title:'B',data:['Bikash','Beeri']},
                    {title: 'C',data:['charks','Charles','Charli']},
                    {title: 'D', data: ['Devin']},
                    {title: 'J', data: ['Jackson','jokey','James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jackson','jokey','James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jackson','jokey','James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jackson','jokey','James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem={({item}) =><TouchableOpacity style={styles.tabIteam} onPress={() => this.setModalVisible(true,item)}><Text style={styles.item}>{item}</Text></TouchableOpacity>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
                />
                <Text >   </Text>
            </ScrollView>

        );
    }

    GeneText(){
        console.log('Clicked Happend');
        alert('button pressed!');
    }
    showText(){
        
    }
    render(){
        if(this.state.data == "Update"){
            return(
                <ScrollView style = {styles.bgView}>
                <View style={{margin:10}}>
                    <Text style={{color:'red',fontSize:20,fontWeight:'500',textAlign:'center'}}> Update Account </Text>
                </View>    
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='Name'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='S/O'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='Email Id'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='Mobile No.'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='User Name'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='Password'               
                        />
                </View>
                    <View style={styles.PosImg}>
                        <Button 
                            onPress={ () => this.GeneText()}
                            title = 'Update'                    
                        />
                    </View>
                </ScrollView>
            );
        }
        else if(this.state.data == "View"){
            return(
                <View  >
                    <View style={{flexDirection:'row',height:60,padding:10}}>
                        <Text style={{flex:2,color:'red',fontSize:25,fontWeight:'500',textAlign:'center'}}> Seller List </Text>
                        <TouchableOpacity >
                            <Icon name="plus" style={{flex:1}} size={40} color="green" />
                        </TouchableOpacity>
                    </View>
                    {this.ViewSheller()}
                </View>
            );
        }
        else
        {
            return(
                <ScrollView style = {styles.bgView}>
                    <View style={{margin:10}}>
                        <Text style={{color:'red',fontSize:20,fontWeight:'500',textAlign:'center'}}> Create New Account </Text>
                    </View>                
                    <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='Name'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='S/O'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='Email Id'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='Mobile No.'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='User Name'               
                        />
                </View>
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                        <TextInput
                            style = {styles.txtPos2}
                            placeholder='Password'               
                        />
                </View>
                <View style={styles.PosImg}>
                    <Button 
                        onPress={ () => this.GeneText()}
                        title = 'Create'                    
                    />
                </View>
                </ScrollView>
            );
            
        }
    }   
}

let styles = StyleSheet.create({
    
    model : {
        height:'80%',
        width:'80%',
        margin:'10%',
    },
    bgView : {  
        paddingTop: '5%',
        backgroundColor:'#739ef7',
        height:'100%',
        width:'100%',
        marginBottom:'5%',
        paddingBottom:'5%'
    },
    PosImg : {
        marginLeft:'20%',
        marginTop:'5%',
        marginBottom:'5%',
        width:'60%'
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
    container: {
        flex: 1,
        paddingTop: 22
       },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
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
    }
}); 