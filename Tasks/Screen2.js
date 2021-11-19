

import React from "react";
import {
  Text, View, TouchableOpacity, Image, StyleSheet, StatusBar, TextInput, ScrollView,FlatList,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      Data: [],
      photo:''
    }
}


componentDidMount() {
    let photo = this.props.navigation.getParam("photo")
   
    this.setState({
        photo:photo
    })

  }


render(){
    return(
        <>
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <Image  source={this.state.photo}
           style={{
             width:windowWidth,
             height:windowHeight*.4,
             resizeMode:'stretch',
            }}
           />
        </View>
        </>
    )
}
}