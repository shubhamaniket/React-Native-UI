import React from 'react';
import {View,Image,TouchableOpacity} from 'react-native';

export default class Moviecard extends React.Component{
    render(){
        return(
            <TouchableOpacity style={{flex:1,marginLeft:10,borderRadius:20}} onPress={this.props.navigation}>
                <Image source={this.props.movie} style={{width:'100%',height:'100%',borderRadius:20}}/>  
            </TouchableOpacity>
        );
    }
}