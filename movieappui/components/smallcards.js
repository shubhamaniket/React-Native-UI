import React from 'react';
import {View,Text,Image} from 'react-native';

export default class Smallcards extends React.Component{
    render(){
        return(
            <View style={{flex:1.5}}>
                <Image source={this.props.image}/>
            </View>
        );
    }
}