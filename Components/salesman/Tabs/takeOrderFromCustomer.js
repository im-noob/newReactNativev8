import React, { Component } from 'react';
import {
    AppRegistry,Modal,View,Button,TextInput,Picker,StyleSheet,Text,KeyboardAvoidingView,Platform
} from 'react-native';
import { Camera, Permissions ,FileSystem} from 'expo';


export default class TakeOrderFromCustomer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userType: 'SalesMan',
            //for camera start
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            buttonDisableStatus: false,
            buttonClickText: "click",
            modalVisible: false,
            imageBase64:'',
            uploadButtonText:'Upload',
            //for camera end
            productName:'',
            subCategory:'',
            size:'',
            quantity:'',

            productNameList:["Loading Product List"],
            subCategoryList:["Select product Name first"],
            sizeList:["Select Product Name first"],

            sales_man_id:'1',
            MakeOrderTextDisable:false,

            
        };
    }
    submitForm = () => {
        //alert("called");
        this.setState({MakeOrderTextDisable:true});
        let query = "INSERT INTO `order_table`( `sales_man_id`, `product_id`, `sub_category`, `image`, `quantity`, `size`) VALUES ('"+this.state.sales_man_id+"','"+this.state.productName+"','"+this.state.subCategory+"','"+"data:image/png;base64,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"+"','"+this.state.quantity+"','"+this.state.size+"')";
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
                if(responseJson ==  "YES"){
                    console.log(responseJson
                );
                    alert("Order Done");
                }
                else{
                    alert("try again");
                    console.log(responseJson);
                }
                    
                //console.log("Response");                
                //console.log(responseJson);
                this.setState({
                    productName:'',
                    subCategory:'',
                    size:'',
                    quantity:'',
                    uploadButtonText:"Upload",
                    imageBase64:'',
                    MakeOrderTextDisable:false,
                });
                      
              }).catch((error) => {
                console.alert("Order Done: slow connection");
                this.setState({
                    productName:'',
                    subCategory:'',
                    size:'',
                    quantity:'r',
                    uploadButtonText:"Upload",
                    imageBase64:'',
                    MakeOrderTextDisable:false,
                });
                console.error(error);
              });
    }
    //for camera:start
    showCamera = () =>{
        this.setState({
            modalVisible:true
        });
    }
    
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }


    handleMountError = ({ message }) => console.error(message);

    takePictureNewNew = async function(){
        this.setState({ buttonDisableStatus: true ,buttonClickText:"saving..."});
        if(this.camera){
        const options = { quality: 1};
        this.camera.takePictureAsync(options).then(data =>{
            //alert("clicked");
            //console.log('data:',data);
            this.setState({modalVisible:false});
            this.setState({ buttonDisableStatus: false,buttonClickText:"click" });
            this.setState({imageBase64:data.base64,uploadButtonText:"Upload Again"});
            alert(data.base64.length);
            console.log('base64data:',this.state.imageBase64);
            
        })
        }
    }
    componentDidMount(){
        fetch('https://biharilegendsback.000webhostapp.com/run_query.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: "SELECT `table_name` FROM `product_name_table`",
          }) 
        }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            let arr = [];
            let i = 1 ;
            responseJson.forEach(element => {
              arr.push(element.table_name);
              
            });
            console.log(arr);
            this.setState({
              productNameList: arr
             })        
          }).catch((error) => {
            console.error(error);
          });
      }
      
    //for camera:end
    updateSubCategoryList = (data) =>{
        if(data == "desc_pname")
            return;
        let query = "SELECT `SUBCATEGORY` FROM `"+data+"`";
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
            console.log(responseJson);
            let arr = [];
            let i = 1 ;
            responseJson.forEach(element => {
              arr.push(element.SUBCATEGORY);
              
            });
            console.log(arr);
            this.setState({
              subCategoryList: arr
             })        
          }).catch((error) => {
            console.error(error);
          });
    }
    updateSizeList = (data) =>{
        let query = "SELECT `SIZE` FROM "+data;// `"+this.state.subCategory+"`";
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
            console.log(responseJson);
            let arr = [];
            let i = 1 ;
            responseJson.forEach(element => {
              arr.push(element.SIZE);
              
            });
            console.log(arr);
            this.setState({
              sizeList: arr
             })        
          }).catch((error) => {
            console.error(error);
          });
    }
    render(){
        let productNameList_val = this.state.productNameList.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
        let subCategoryList_val = this.state.subCategoryList.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
        let sizeList_val = this.state.sizeList.map( (s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
        return(
            
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior="padding"
                windowSoftInputMode="adjustResize"
                keyboardVerticalOffset={Platform.select({ios: 0, android: 120})}
                
            enabled>
                <View style={styles.container}
                >
                    
                    <View style = { styles.HeaderView}>
                        <Text style = { styles.Header}>Create Order</Text>
                    </View>
                    <View style={{margin:7}} />
                    
                    <View style = {styles.MainConteiner}>
                        <View style = {styles.pickerParent}>
                            <Text>Product Name:</Text>
                            <Picker
                                selectedValue={this.state.productName}
                                style={styles.pickerStyle}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({productName: itemValue})
                                    this.updateSubCategoryList(itemValue); 
                                }}>
                                <Picker.Item label="Select Product Name" value="desc_pname" />
                                {productNameList_val}
                                

                            </Picker>
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Sub Category:</Text>
                            <Picker
                                selectedValue={this.state.subCategory}
                                style={styles.pickerStyle}
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({subCategory: itemValue});
                                    this.updateSizeList(this.state.productName); 
                                }}>
                                <Picker.Item label="Select Sub Type" value="desc_subName" />
                                {subCategoryList_val}

                            </Picker>
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Size:</Text>
                            <Picker
                                selectedValue={this.state.size}
                                style={styles.pickerStyle}
                                onValueChange={(itemValue, itemIndex) => this.setState({size: itemValue})}>
                                <Picker.Item label="Select Size" value="desc_size" />
                                {sizeList_val}

                            </Picker>
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Quantity:</Text>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = "Enter The Quantity"
                                underlineColorAndroid='transparent'
                                keyboardType = "phone-pad"
                                onChangeText={(text) => this.setState({quantity: text})}
                                value={this.state.quantity}

                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Text>Upload a picture:</Text>
                            <Button
                                onPress = {()=>{this.showCamera()}}
                                title = {this.state.uploadButtonText}
                            />
                        </View>
                        <View style = {styles.pickerParent}>
                            <Button
                                    onPress={()=>{this.submitForm() }}
                                    title="Submit"
                                    
                            />
                        </View>
                        <Modal 
                            onRequestClose={() => {
                                this.setState({modalVisible:false});
                            }}
                            transparent={false}
                            visible={this.state.modalVisible}
                        >
                            <View style={{ flex: 1 }}>
                                <Camera style={{ flex: 1 }} 
                                    type={this.state.type}
                                    ref={ref => {
                                        this.camera = ref;
                                    }}
                                    >
                                    
                                </Camera>
                                <Button
                                        title = {this.state.buttonClickText} 
                                        onPress={() => this.takePictureNewNew() }
                                        style = {{ height:330}}
                                        disabled = {this.state.buttonDisableStatus}
                                />
                            </View>
                         
                    
                        </Modal>
                        
                        
                    </View>
                
                </View>
            </KeyboardAvoidingView>
        );
    }
}

let styles = StyleSheet.create({
    
    MainConteiner:{
        padding: 20,
    },
    HeaderView:{
        padding:8,
        
        borderBottomWidth: 3,
        elevation:3,
        
    },
    pickerParent:{
        padding: 10,
    },
    pickerStyle:{
        
        width: '100%',
        //color: '#eaf1f4',
        backgroundColor:'#eaf1f4',
        
        flex:1,
        paddingBottom:10,
    },
    Header:{
        
        fontWeight: '500',
        fontSize:25,
    },
    input:{
       
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        fontWeight: '800',
    }

}); 