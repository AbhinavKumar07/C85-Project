import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image,ScrollView,TextInput} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import { transparent } from "react-native-paper/lib/typescript/styles/colors";


export default class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            previewImage : "image_1",
            dropdownHeight : 35,
            caption:""
        }
    }
    
    render(){
        let preview_images = {
            image_1: require("../assets/Image_1.jpg"),
            image_2: require("../assets/Image_2.jpg"),
            image_3: require("../assets/Image_3.jpg"),
            image_4: require("../assets/Image_4.jpg"),
            image_5: require("../assets/Image_5.jpg")
        }
        
        return(
            <View style={styles.Container}>
                <SafeAreaView style={styles.DroidSafeArea}/>
                <View style={styles.AppTitle}>
                    <View style={styles.AppIcon}>
                        <Image
                            source={require("../assets/Image_1.jpg")}
                            style={styles.IconImage}
                        ></Image>
                    </View>
                    <View style = {styles.appTitleTextContainer}>
                        <Text style = {styles.appTitleText}>New Post</Text>
                    </View>
                </View>
               <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image
                            source={preview_images[this.state.previewImage]}
                            style={styles.previewImage}
                        ></Image>
                        <View style={{height:RFValue(this.state.dropdownHeight)}}>
                            <DropDownPicker
                                items={[
                                    {label: Image1 , value: 'image_1'},
                                    {label: image2 , value: 'image_2'},
                                    {label: Image3 , value: 'image_3'},
                                    {label: Image4 , value: 'image_4'},
                                    {label: Image5 , value: 'image_5'},
                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{height:40, borderRadius:20, marginBottom:10}}
                                onOpen={()=>{
                                    this.setState({dropdownHeight:200})
                                }}
                                onClose={()=>{
                                    this.setState({dropdownHeight:35})
                                }}
                                style={{backgroundColor:transparent}}
                                itemStyle={{justifyContent:'flex-start'}}
                                dropdownStyle={{backgroundColor:'#2a2a2a'}}
                                labelStyle={{color:"white"}}
                                arrowStyle={{color:"white"}}
                                onChangeItem={item=>
                                    this.setState({preview_images:item.value})
                                }
                            ></DropDownPicker>
                        </View>

                        <TextInput
                            style={styles.inputFont}
                            onChangeText={this.setState({caption:this.textInput})}
                            placeholder={"Caption"}
                            placeholderTextColor="white"
                            numberOfLines={15}
                        />
                    </ScrollView>
               </View>
               <View style={{flex:0.08}}/>
            </View>
        )
     }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    droidSafeArea:{
        marginTop: Platform.OS === "Android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:'row',
    },
    appIcon:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center',
    },
    iconImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:'center',
    },
    appTitleText:{
        color:'white',
        fontSize:RFValue(28),
    },
    inputFont:{
        color:'white',
        fontSize: RFValue(14)
    },
    fieldsContainer: {
        flex: 0.85
    },
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain"
    }
})
