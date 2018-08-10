import React ,{Component} from 'react';

import { Text,View,StyleSheet,ScrollView,Button ,
    TextInput,
    SectionList
} from 'react-native';

export default class AddProduct extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'New Product'),
        };
    };
    constructor(props){
        super(props);
        this.state = {
            dataNew : [],
            no:1,
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
    setData(data){
        this.setState({dataNew:data});
    }
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
            console.log("data recied");
            console.log(responseJson);
            return(responseJson);       
            }).catch((error) => {
            console.error(error);
            });
    }
    check_Correnct(value){
        const count = value.toString();
        var temp = count.split(' ').join('_');
        return temp;
    }

    onClickPress(){
        if(this.state.item0 == ''){
            alert("select Abouve field");
        }else{
            let sql1 = 'CREATE TABLE '+this.state.name+' (';
            switch(this.state.no)
            {
                case '1':
                sql1 = sql1+this.state.item0+' VARCHAR,'; 
                    break;
                case '2':
                sql1 = sql1+this.state.item0+' VARCHAR,';
                sql1 = sql1+this.state.item1+' VARCHAR,';
                    break;
                case '3':
                sql1 = sql1+this.state.item0+' VARCHAR,';
                sql1 = sql1+this.state.item0+' VARCHAR,';
                sql1 = sql1+this.state.item0+' VARCHAR,';
                    break;
                case '4':
                sql1 = sql1+this.state.item0+' VARCHAR,';
                    sql1 = sql1+this.state.item1+' VARCHAR,';
                    sql1 = sql1+this.state.item2+' VARCHAR,';
                    sql1 = sql1+this.state.item3+' VARCHAR,';   
                    break;
                case '5':
                sql1 = sql1+this.state.item0+' VARCHAR,';
                    sql1 = sql1+this.state.item1+' VARCHAR,';
                    sql1 = sql1+this.state.item2+' VARCHAR,';
                    sql1 = sql1+this.state.item3+' VARCHAR,';
                    sql1 = sql1+this.state.item4+' VARCHAR,';
                    break;
                case '6':
                sql1 = sql1+this.state.item0+' VARCHAR,';
                    sql1 = sql1+this.state.item1+' VARCHAR,';
                    sql1 = sql1+this.state.item2+' VARCHAR,';
                    sql1 = sql1+this.state.item3+' VARCHAR,';
                    sql1 = sql1+this.state.item4+' VARCHAR,';
                    sql1 = sql1+this.state.item5+' VARCHAR,';
                    break;
                case '7':
                sql1 = sql1+this.state.item0+' VARCHAR,';
                    sql1 = sql1+this.state.item1+' VARCHAR,';
                    sql1 = sql1+this.state.item2+' VARCHAR,';
                    sql1 = sql1+this.state.item3+' VARCHAR,';
                    sql1 = sql1+this.state.item4+' VARCHAR,';
                    sql1 = sql1+this.state.item5+' VARCHAR,';
                    sql1 = sql1+this.state.item6+' VARCHAR,';
                    break;
                case '8':
                sql1 = sql1+this.state.item0+' VARCHAR,';
                    sql1 = sql1+this.state.item1+' VARCHAR,';
                    sql1 = sql1+this.state.item2+' VARCHAR,';
                    sql1 = sql1+this.state.item3+' VARCHAR,';
                    sql1 = sql1+this.state.item4+' VARCHAR,';
                    sql1 = sql1+this.state.item5+' VARCHAR,';
                    sql1 = sql1+this.state.item6+' VARCHAR,';
                    sql1 = sql1+this.state.item7+' VARCHAR,';
                    break;
                case '9':
                sql1 = sql1+this.state.item0+' VARCHAR,';
                    sql1 = sql1+this.state.item1+' VARCHAR,';
                    sql1 = sql1+this.state.item2+' VARCHAR,';
                    sql1 = sql1+this.state.item3+' VARCHAR,';
                    sql1 = sql1+this.state.item4+' VARCHAR,';
                    sql1 = sql1+this.state.item5+' VARCHAR,';
                    sql1 = sql1+this.state.item6+' VARCHAR,';
                    sql1 = sql1+this.state.item7+' VARCHAR,';
                    sql1 = sql1+this.state.item8+' VARCHAR,';
                break;
                case '10':
                    sql1 = sql1+this.state.item0+' VARCHAR,';
                    sql1 = sql1+this.state.item1+' VARCHAR,';
                    sql1 = sql1+this.state.item2+' VARCHAR,';
                    sql1 = sql1+this.state.item3+' VARCHAR,';
                    sql1 = sql1+this.state.item4+' VARCHAR,';
                    sql1 = sql1+this.state.item5+' VARCHAR,';
                    sql1 = sql1+this.state.item6+' VARCHAR,';
                    sql1 = sql1+this.state.item7+' VARCHAR,';
                    sql1 = sql1+this.state.item8+' VARCHAR,';
                    sql1 = sql1+this.state.item9+' VARCHAR,';
                    break;
            }
            sql1 =sql1+ 'PHOTO VARCHAR (20) NOT NULL)';
            let sql = 'INSERT INTO product_name_table (table_name,description) VALUES("'+this.state.name+'" ,"this table contain '+this.state.no+' Column for containing information")';
            //alert(sql1);
            //alert(sql);
            this.fire(sql);
            this.fire(sql1);
        }
        
    }
    GeneText0(){
        console.log(0);
         return(
                <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                    <TextInput
                        style = {styles.txtPos2}
                        placeholder='Eneter Fields Name'
                        
                        underlineColorAndroid='transparent'
                        onChangeText = {(text) => this.setState({item0:text})}               
                    />
               </View>
         );
         console.log('return'+0);
    }
    GeneText9(){
        let temp =[];
        temp.push(this.GeneText8());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                    onChangeText = {(text) => this.setState({item9:text})} 
                    underlineColorAndroid='transparent'              
                />
            </View>)
        return temp;        
    }
    GeneText8(){
        let temp =[];
        temp.push(this.GeneText7());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                    
                    underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({item8:text})}               
                />
            </View>)
        return temp;
        
    }
    GeneText7(){
        let temp =[];
        temp.push(this.GeneText6());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                   
                    underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({item7:text})}               
                />
            </View>)
        return temp;
    }
    GeneText6(){
        let temp =[];
        temp.push(this.GeneText5());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                   
                    underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({item6:text})}               
                />
            </View>)
        return temp;
        
    }
    GeneText5(){
        let temp =[];
        temp.push(this.GeneText4());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                   
                    underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({item5:text})}               
                />
            </View>);
        return temp;
        
    }
    GeneText4(){
        let temp =[];
        temp.push(this.GeneText3());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                   
                    underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({item4:text})}               
                />
            </View>);
        return temp;
        
    }
    GeneText3(){
        console.log(3);
        let temp =[];
        temp.push(this.GeneText2());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                   
                    underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({item3:text})}               
                />
            </View>);
        return temp;
        console.log('return'+3);
    }
    GeneText2(){
        console.log(2);
        let temp =[];
        temp.push(this.GeneText1());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                   
                    underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({item2:text})}               
                />
            </View>);
        return temp;
        console.log('return'+2);
    }
    GeneText1(){
        console.log(1);
        let temp =[];
        temp.push(this.GeneText0());
        temp.push(
            <View style={{marginLeft:'15%',width:'70%',marginBottom:10}}>
                <TextInput
                    style = {styles.txtPos2}
                    placeholder='Eneter Fields Name'
                    
                     underlineColorAndroid='transparent'
                    onChangeText = {(text) => this.setState({item1:text})}               
                />
            </View>);
        return temp;
        console.log('return'+1);
    }
    GeneText(){
        console.log('sd');
        let temp = [];
        this.setData(temp);
        switch(this.state.no)
       {
            case '1':
                temp.push(this.GeneText0())
                break;
            case '2':
                temp.push(this.GeneText1())
                break;
            case '3':
                temp.push(this.GeneText2())
                break;
            case '4':
                temp.push(this.GeneText3())
                break;
            case '5':
                temp.push(this.GeneText4())
                break;
            case '6':
                temp.push(this.GeneText5())
                break;
            case '7':
                temp.push(this.GeneText6())
                break;
            case '8':
                temp.push(this.GeneText7())
                break;
            case '9':
                temp.push(this.GeneText8())
                break;
            case '10':
                temp.push(this.GeneText9())
                break;
            default:
                alert('Invalid Selection!')
       }   
       this.setData(temp);
       console.log('return sd');
    }
    render(){
        return(
            <ScrollView style = {styles.bgView}>
                <View style={{backgroundColor:'blue'}} >
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'500',color:'red',marginTop:10}}> Enter Product name & Filed No.</Text>
                 <View style={styles.textCont}>
                    <TextInput 
                        style={styles.txtPos1}
                        placeholder='Name'
                        onChangeText = {(text) => this.setState({name:text})}
                        underlineColorAndroid = 'transparent'
                    />
                    <TextInput 
                        style={styles.txtPos}
                        placeholder='Fields No.:'
                        onChangeText = {(text) => this.setState({no:text})}
                        underlineColorAndroid = 'transparent'
                    />
                 </View>                 
                </View>
                <View style={styles.PosImg}>
                    <Button 
                        onPress={() => this.GeneText()}
                        title = 'Generate'                    
                    />
                </View>
                {this.state.dataNew}
            <View style={styles.PosImg}>
                <Button
                    style={{margin:'5'}}
                    onPress={() => this.onClickPress()}
                    title = 'Submit'                    
                />
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
    },
});
