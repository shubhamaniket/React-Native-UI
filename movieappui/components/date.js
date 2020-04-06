import React from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';

export default class Date extends React.Component{
    state = {
        isactive : false
    }
    render(){
        return(
            <TouchableOpacity style={this.state.isactive ? styles.active : styles.inactive}
            onPress={()=>this.setState({isactive:!(this.state.isactive)})}
            >
                <Text style={{fontSize:18}}>{this.props.dayname}</Text>
                <Text style={{fontSize:35}}>{this.props.number}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    active : {
        flex : 1,
        borderWidth : 1,
        marginHorizontal : 5,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        backgroundColor : 'cyan'
    },
    inactive : {
        flex : 1,
        borderWidth : 1,
        marginHorizontal : 5,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        backgroundColor : '#fff'
    }
})