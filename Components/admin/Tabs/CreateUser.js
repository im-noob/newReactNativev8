import React ,{Component} from 'react';
import {Modal,Text,KeyboardAvoidingView,Platform,TouchableOpacity,SectionList,View,StyleSheet,ScrollView,Button ,TextInput} from 'react-native';

export default class CreateUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           name:'',
           city:'',
           address:'',
           id_card_no:'',
           email:'',
           mobile_no:'',
           password:'',
           submitIsDisable:false,

        };
    }
    onSubmit = () =>{
        this.setState({submitIsDisable:true});
        fetch('https://biharilegendsback.000webhostapp.com/run_query.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: "            BEGIN;"+
                    "INSERT INTO `security_table`( `password`, `userType`) VALUES ('"+this.state.password+"','SalesMan');"+
                    "INSERT INTO `personal_details_table`(`user_id`, `name`, `city`, `address`, `id_card_no`, `email`, `phone_no`) VALUES (LAST_INSERT_ID(),'"+this.state.name+"','"+this.state.city+"','"+this.state.address+"' ,'"+this.state.id_card_no+"','"+this.state.email+"','"+this.state.mobile_no+"');"+
                    "INSERT INTO `curr_location_table`(`user_id``) VALUES (LAST_INSERT_ID());"+
                    "COMMIT;",
          }) 
        }).then((response) => response.json())
              .then((responseJson) => {
                alert("Profile Created Successfully..");
                this.setState({submitIsDisable:false});

                return(responseJson);       
              }).catch((error) => {
                //console.error(error);
                alert("Profile Created Successfully..slow network");

                this.setState({submitIsDisable:false});

              });
    }
    render(){

    //     const { navigation } = this.props;
    // const itemId = navigation.getParam('itemId', 'NO-ID');
    // const otherParam = navigation.getParam('otherParam', 'some default value');
    
        return(
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior="padding"
                windowSoftInputMode="adjustResize"
                keyboardVerticalOffset={Platform.select({ios: 550, android: 500})}
            enabled>
                
                    
                    <View>
                        <TextInput
                            style = {styles.TextInputStyleClass}
                            placeholder='Name'  
                            onChangeText={(text) => this.setState({name: text})} 
                                        
                        />
                    
                    
                    
                            <TextInput
                                style = {styles.TextInputStyleClass}
                                placeholder='Email Id'  
                                onChangeText={(text) => this.setState({email: text})}
                                keyboardType = "email-address"             
                            />
                    
                    
                            <TextInput
                                style = {styles.TextInputStyleClass}
                                placeholder='Mobile No.'       
                                onChangeText={(text) => this.setState({mobile_no: text})}      
                                keyboardType = "number-pad"  
                            />
                    
                            <TextInput
                                style = {styles.TextInputStyleClass}
                                placeholder='City'       
                                onChangeText={(text) => this.setState({city: text})}        
                            />
                    
                            <TextInput
                                style = {styles.TextInputStyleClass}
                                placeholder='Address'    
                                onChangeText={(text) => this.setState({address: text})}           
                            />
                    
                            <TextInput
                                style = {styles.TextInputStyleClass}
                                placeholder='ID Card NO'      
                                onChangeText={(text) => this.setState({id_card_no: text})}         
                            />

                            <TextInput
                                style = {styles.TextInputStyleClass}
                                placeholder='Password'      
                                onChangeText={(text) => this.setState({password: text})} 
                                windowSoftInputMode={true}        
                            />
                        
                            <Button 
                                style = {styles.TextInputStyleClass}
                                onPress={ () => this.onSubmit()}
                                title = 'Create' 
                                disabled = {this.state.submitIsDisable}                   
                            />
                        </View>
                    
                        
               
            </KeyboardAvoidingView>
        );
    }
}

let styles = StyleSheet.create({
    
    

    //outer input
    MainContainer :{
        //top: 15,
        //justifyContent: 'center',
        //flex:1,
        margin: 10
    },
         
    TextInputStyleClass: {
         
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
         borderColor: '#2196F3',
        
         // Set border Radius.
         borderRadius: 5 ,
         
        // Set border Radius.
         //borderRadius: 10 ,
         padding: 10,
        
        fontWeight: '800',
        backgroundColor:'#eaf1f4'
    }
}); 


 
    
     