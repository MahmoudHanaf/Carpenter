

import React from "react";
import {
  Text, View, TouchableOpacity, Image, StyleSheet, StatusBar, TextInput, ScrollView,FlatList,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Share from 'react-native-share';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      Data: [],
      index: 0,
      color:'#000',
      visiable: false,
      mycolor:'#000',
      path:'',
      file:'data:image/jpg:base64',
      myurl:'',
      modal_visible:false,
      photo:'',

    }
  }

  componentDidMount() {
    let Data = this.props.navigation.getParam("Data")
    let name = this.props.navigation.getParam("name")
    let index = this.props.navigation.getParam("index")
    this.setState({
      Data: Data,
      name: name,
      index: index
    })

    //  this.setData()
    // //this.getData()
  }



  // async setData() {
  //   let numbers = this.state.Data.mycolor
  //   await AsyncStorage.setItem("Data", JSON.stringify(numbers))
  // }

  // async getData() {

  //   let numbers = await AsyncStorage.getItem("Data")
  //   numbers = JSON.parse(numbers)
  //   this.setState({ Data: numbers })
  // }


  // setItem(){
  //   let Data=this.state.Data
  //    await AsyncStorage.setItem('Data',json.stringfy(Data))
  // }

  // setItem({})


heart(index){
  let data=this.state.Data
  data[index].mycolor 
  if(data[index].mycolor== '#000' )
  data[index].mycolor='#f00'
  else{
    data[index].mycolor='#000'
  }
 
  this.setState({Data :data})
  // this.setData()
}



onShare(index){
    let data =this.state.Data
    var myurl=data[index].myurl

  let shareImage = {
    title: 'caption',//string
    // message: 'message',//string          // url:  `'data:image/jpg;base64,'+${'../img/a5.jpg'}`
    // source:require('../img/a5.jpg'),// eg.'http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg',//`${'../img/a5.jpg'}
   url:  myurl,
  // type: '../img/a5.jpg',
};
Share.open(shareImage).catch(err => console.log(err));
}


  render() {
    return (
      <>
        <StatusBar
          backgroundColor="#F04500"
        />


        <View style={styles.style_view}>
          <Image source={require('../img/m7.png')}
            style={{ width: 70, height: 60, resizeMode: 'contain' }}
          />
          
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff' }}>{this.state.name}</Text>
          <TouchableOpacity
            onPress={()=>{
              this.props.navigation.goBack()
            }}
          >
           <Icon name="arrow-left" size={23} style={{color:'#fff'}}/>
           </TouchableOpacity>
        </View>

       
      <ScrollView>
       <View style={styles.container}>
       
           <FlatList 
           data={this.state.Data}
           renderItem={({item,index})=>
             
           <View style={styles.style_map}>

              <TouchableOpacity  activeOpacity={.7}
                   onPress={()=>{
                     this.props.navigation.navigate("Page3",{
                       photo:item.name_photo
                     })
                   }}
              >
           <Image  source={item.name_photo}
           style={{
             width:windowWidth*.94,
             height:windowHeight*.34,
             resizeMode:'stretch',
             borderTopLeftRadius:8,
             borderTopRightRadius:8,
            }}
           />
      
            <View style={styles.my_view}>
            <TouchableOpacity 
             onPress={()=>{
               this.onShare(index)
               // this.share(index)
              //  alert(this.state.myurl)
             }}
          >
            <View style={{ flexDirection: 'row', width: windowWidth*.22, justifyContent: 'space-between', alignItems: 'center', }}>
              <Icon name="share-alt-square" size={24} style={{ color: '#FF5D00' }} />
              <Text style={{ fontWeight: 'bold', fontSize: 19, color: '#000' }}>مشاركة</Text>
            </View>
          </TouchableOpacity>

                <TouchableOpacity activeOpacity={.4}
                  onPress={()=>{
                    this.heart(index)
                  }}
                >
                <Icon  name="heart" size={24} style={{color:item.mycolor}}/>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
      </View>

           }
          
           />
          

     <View style={{justifyContent:'center',alignItems:'center',width:windowWidth,height:80,}}>
            <Image  source={require('../img/mm1.png')}
              style={{width:windowWidth*.4,height:50,resizeMode:'stretch'}}
            />

            </View>

            <View style={{justifyContent:'space-between',alignItems:'center',width:windowWidth,height:80,flexDirection:'row',paddingRight:8}}>
            <Image  source={require('../img/mm5.png')}
              style={{width:windowWidth*.4,height:50,resizeMode:'stretch'}}
            />

           <Image  source={require('../img/mm4.png')}
              style={{width:windowWidth*.4,height:50,resizeMode:'stretch'}}
            />

            </View>


       </View>

       </ScrollView>

      
      </>
    )
  }
}

const styles = StyleSheet.create(
  {
    style_view: {
      width: '100%',
      height: '8%',
      backgroundColor: '#FF5D00',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 8,
      paddingRight: 12,

    },
    style_map :{
      width:windowWidth*.94,
      height:windowHeight*.42,
      backgroundColor:'#F7F6F2',
      marginBottom:windowWidth*.09,
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:18,
      paddingBottom:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      
    },
     container :{
      width:'100%',
      height:'100%',
      justifyContent:'space-around',
      alignItems:'center',
      paddingLeft:10,
      paddingRight:10,
      marginTop:windowWidth*.07,
      paddingBottom:25
     },
      
     my_view:{
      width:windowWidth*.94,
      height:windowHeight*.062,
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:15,
      paddingRight:10,
     
     }

  }
)

