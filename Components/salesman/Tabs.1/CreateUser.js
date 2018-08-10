import React ,{Component} from 'react';
import {Modal,Text,TouchableHighlight,TouchableOpacity,SectionList,View,StyleSheet,ScrollView,Button ,TextInput} from 'react-native';

export default class CreateUser extends React.Component{

    
    render(){

        const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    
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
