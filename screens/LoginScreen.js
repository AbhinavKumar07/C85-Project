import React,{Component} from 'react';
import { Text,View , ActivityIndicator, Touchable} from 'react-native'
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class LoginScreen extends Component {
   
    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            if (
              providerData[i].providerId ===
                firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.getBasicProfile().getId()
            ) {
              return true;
            }
          }
        }
        return false;
      };

    onSignIn = googleUser => {
        var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
          unsubscribe();
          if (!this.isUserEqual(googleUser, firebaseUser)) {
            var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.idToken,
              googleUser.accessToken
            );
    
            firebase
              .auth()
              .signInWithCredential(credential)
              .then(function(result) {
                if (result.additionalUserInfo.isNewUser) {
                  firebase
                    .database()
                    .ref("/users/" + result.user.uid)
                    .set({
                      gmail: result.user.email,
                      profile_picture: result.additionalUserInfo.profile.picture,
                      locale: result.additionalUserInfo.profile.locale,
                      first_name: result.additionalUserInfo.profile.given_name,
                      last_name: result.additionalUserInfo.profile.family_name,
                      current_theme: "dark"
                    })
                    .then(function(snapshot) {});
                }
              })
              .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
              });
          } else {
            console.log("User already signed-in Firebase.");
          }
        });
      };
    
    signInWithGoogleAsync = () =>{
            const result = await GooglelogInAsync({
                behavior:'web',
                androidClientId:'823840453471-a6bj4jt32oki6l5ij4kdr1cf1c3msqmu.apps.googleusercontent.com',
                scopes: ['profile','email'],
            })
    }
    
    render(){
        return(
            <View style={{flex:1 , justifyContent:'center' , alignItems:'center'}}>
                <TouchableOpacity onPress={() => this.signInWithGoogleAsync}></TouchableOpacity>
            </View>
        )
    }
}