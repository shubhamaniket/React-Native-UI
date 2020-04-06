import React from 'react';
import {View,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';
import Date from '../components/date';
import Movietime from '../components/movietime';
const {width} = Dimensions.get('window')

export default class Bookscreen extends React.Component{
    render(){
        const navigation = this.props.route.params
        return(
            <View style={styles.container}>
                <View style={styles.background}>
                    <Image source={require('../assets/antbackground.png')} resizeMode="cover" style={{width:width,height:'100%',borderBottomLeftRadius:15,borderBottomRightRadius:15}}/>
                </View>
                <View style={styles.box}>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:22,letterSpacing:-1}}>{navigation.moviename}</Text>
                        <Image source={require('../assets/time.png')} style={{marginTop:10}}/>
                    </View>
                    <View style={{width:300,height:2,backgroundColor:'#C4C9DF',opacity:0.3,marginTop:20}}></View>
                    <View style={styles.synopsis}>
                        <View style={styles.synopsisheader}>
                            <Text style={{fontSize:20}}>Synopsis</Text>
                        </View>
                        <View style={styles.tags}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#F2F3F4',margin:10,borderRadius:10}}>
                                <Text style={{fontWeight:'bold'}}>Action</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#F2F3F4',margin:10,borderRadius:10}}>
                                <Text style={{fontWeight:'bold'}}>Adventure</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.synopsistext}>
                        <Text style={{color:'grey'}}>
                            Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don …
                        </Text>
                    </View>
                    <View style={styles.btn}>
                        <Text style={{color:'#868E96'}}>Read more</Text>
                    </View>
                </View>
                <View style={styles.seats}>
                    <View style={styles.selection}>
                        <View style={styles.date}>
                            <Date dayname="Fri" number="12"/>
                            <Date dayname="Sat" number="13"/>
                            <Date dayname="Sun" number="14"/>
                            <Date dayname="Mon" number="15"/>
                        </View> 
                        <Text style={{fontWeight:'bold',fontSize:20,left:20,top:45}}>ABCD Cinemas</Text>
                        <View style={styles.movietime}>
                            <Movietime time="12:30 pm"/>
                            <Movietime time="5:00 pm"/>
                            <Movietime time="1:30 pm"/>
                            <Movietime time="9:00 am"/>
                        </View>
                        <TouchableOpacity style={styles.nextbutton}>
                            <Text style={{alignSelf:'center',top:20,fontSize:25,color:'#fff'}}>Continue to Payment ></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#F2F2F2'
    },
    background : {
        flex : 1,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    seats : {
        flex : 2
    },
    box : {
        width : 335,
        height : 280,
        backgroundColor : '#fff',
        position : 'absolute',
        alignSelf:'center',
        top : 120,
        alignItems:'center',
    },
    synopsis : {
        width : 300,
        height : 40,
        flexDirection:'row',
        marginVertical:10
    },
    synopsisheader : {
        flex : 1,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    tags:{
        flex:2,
        flexDirection : 'row'
    },
    synopsistext : {
        marginHorizontal : 18
    },
    btn : {
        width : 200,
        height : 30,
        backgroundColor : '#F2F3F4',
        marginTop : 30,
        borderRadius : 20,
        alignItems:'center',
        justifyContent:'center'
    },
    selection : {
        width : width,
        height : 370,
        top : 160
    },
    date : {
        width:width,
        height : 100,
        flexDirection : 'row',
        marginHorizontal : 10,
        top : 20
    },
    movietime : {
        width:width,
        height : 35,
        flexDirection : 'row',
        marginHorizontal : 10,
        top : 60
    },
    nextbutton : {
        width : width-80,
        height : 80,
        backgroundColor : 'blue',
        left : width/9,
        top : 80,
        borderRadius : 100,
    }
})