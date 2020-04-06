import React from 'react';
import {View,StyleSheet,Text,Dimensions,Image,ScrollView,TouchableOpacity} from 'react-native';
const {width,height} = Dimensions.get('window')
import Moviecard from '../components/moviecard';
import Smallcards from '../components/smallcards';

export default class Home extends React.Component{
    handlechange=()=>{
        this.props.navigation.navigate('Bookscreen')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.boxone}>
                    <View style={styles.header}>
                        <Text style={{fontSize:24,fontWeight:'bold',letterSpacing:-1,marginHorizontal:15,color:'#212224'}}>Now Showing..</Text>
                        <Text style={{color:'#868E96',fontSize:13,marginHorizontal:15,marginTop:8}}>Movies in Delhi</Text>
                    </View>
                    <View style={styles.menu}>
                        <Image source={require('../assets/menu.png')} style={{marginRight:10,marginTop:10}}/>
                    </View>
                </View>
                <ScrollView contentContainerStyle={{height:700,width:width}} style={{flex:1}}>
                    <View style={styles.boxtwo}>
                        <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{flex:1}}
                        contentContainerStyle={{width:2100,height:'100%'}}
                        >
                            <Moviecard movie={require('../assets/Bitmap.png')} navigation={()=>this.props.navigation.navigate('Bookscreen',{moviename:'Ant Man & the Wasp'})}/>
                            <Moviecard movie={require('../assets/interstellar.jpg')}/>
                            <Moviecard movie={require('../assets/gravity.jpg')}/>
                            <Moviecard movie={require('../assets/dunkirk.jpg')}/>
                            <Moviecard movie={require('../assets/spiderman.jpg')}/>
                            <Moviecard movie={require('../assets/johnwick.jpg')}/>
                        </ScrollView>
                    </View>
                    <View style={styles.boxthree}>
                        <View style={styles.moremovies}>
                            <View style={{flex:2,alignItems:'flex-start',justifyContent:'center'}}>
                                <Text style={{fontSize:24,color:'#212224',fontWeight:'bold',letterSpacing:-0.5}}>All Movies</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                                <TouchableOpacity><Text style={{color:'blue'}}>View More</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.movielist}>
                            <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{width:520}}
                            style={{flex:1}}
                            >
                                <Smallcards image={require('../assets/venom.png')}/>
                                <Smallcards image={require('../assets/mamamia.png')}/>
                                <Smallcards image={require('../assets/jurrassic.png')}/>
                                <Smallcards image={require('../assets/oceans.png')}/>
                                <Smallcards image={require('../assets/skyscraper.png')}/>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    boxone : {
        width : width,
        height : 70,
        marginVertical : 0,
        flexDirection : 'row',
        marginTop : 40
    },
    header : {
        flex : 5,
    },
    menu : {
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'flex-start'
    },
    boxtwo : {
        flex : 3,
        flexDirection : 'row',
    },
    boxthree : {
        flex : 1,
        marginTop : 20,
        marginBottom : 10
    },
    moremovies : {
        flex:1.5,
        flexDirection:'row',
        marginHorizontal : 10
    },
    movielist : {
        flex : 5,
        marginHorizontal : 10,
        flexDirection : 'row'
    }
})