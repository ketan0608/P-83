import React,{Component} from 'react'
import {Text} from 'react-native'
export default class LoadingScreen extends Component{
  render(){
    return(
      <Text style={{flex:1,justifyContent:'center',alignItems:'center'}}>Loading</Text>
    )
  }
}