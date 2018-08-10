import React ,{Component} from 'react';
import { Text,View ,ScrollView, StyleSheet,Button,TouchableHighlight,TouchableOpacity,TextInput,Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapViewClass from '../MapViewClass'

export default class HomeTab extends Component{
    render(){

       
        return(

                
                    <View style={styles.contener}>
                        <View style={styles.subContener}>
                            <View style={styles.header}>
                                <Text style={styles.tytle}>Track Location</Text>
                                
                            </View>
                            <View style={styles.subBoady}>
                                <MapViewClass/>
                                <Button onPress={()=>{}} title='Track Now'/>
                            </View>
                            
                        </View>

                        <View style={styles.subContener}>
                            <View style={styles.header}>
                                <Text style={styles.tytle}>Camera</Text>
                            </View>
                            <View style={styles.subBoady}>
                            </View>
                        </View>

                        <View style={styles.subContener}>
                            <View style={styles.header}>
                                <Text style={styles.tytle}>Total Order</Text>
                            </View>
                            <View style={styles.subBoady}>
                            </View>
                        </View>

                    </View>
                
        );
    }
}





const styles = StyleSheet.create({
                                    subBoady:{
                                                height:200,
                                                backgroundColor:'#5fef97'
                                            },
                                    contener:{
                                        flexDirection: 'column',
                                        flex:1,
                                            },
                                    subContener:{
                                       paddingTop: 10,
                                        backgroundColor: '#d6b89a', 
                                        width:'100%',
                                        height:200
                                           
                                            },
                                    header:{
                                       
                                        backgroundColor:'#023318',
                                        alignItems: 'center',
                                        borderBottomWidth:5,
                                        borderBottomColor:'rgb(0,0,0)',
                                    },
                                    tytle:{
                                        color:'#ffffff',
                                        fontSize:30,
                                        fontStyle: 'italic',
                                        fontWeight: '900',
                                    }
                                })