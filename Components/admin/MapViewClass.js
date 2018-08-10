import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';


export default class MapViewClass extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            latitude: parseFloat(this.props.latitude),
            longitude: parseFloat(this.props.longitude),
        };
    }
   

    render() {
        return (
          
                <MapView style={styles.map} initialRegion={{
                    latitude:this.state.latitude ,
                    longitude:this.state.longitude,
                    latitudeDelta: .05,
                    longitudeDelta: .05
                    }}> 
                
                    {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                        coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
                        title={"Your Location"}
                    />}

                </MapView>        )
    }

}


const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      
    },
  });