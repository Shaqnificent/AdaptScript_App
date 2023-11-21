import {View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Pressable} from 'react-native'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
interface RouterProps {
    navigation: NavigationProp<any, any>;
}
const Compiler=({navigation}: RouterProps)=> {
    const [code, setCode] = useState('')  
    const [consoleLog, setConsoleLog] = useState('')
    const Title= "Adapt/Script>"

    const Compiler =async () => {
    
        try {
            const apiUrl = "http://127.0.0.1:5000/execute"; // Replace with your API endpoint
            const requestBody = {
              code: code,
            };
      
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestBody),
            });
      
            const responseData = await response.json();
            setConsoleLog(JSON.stringify(responseData.result[0]|| responseData.error));
          } catch (error) {
            console.error('Error making POST request:', error);
            setConsoleLog('Error making POST request');
          }
        
    }
    

    return(
        <View style={styles.container}>
            <Text style={styles.Title} >{Title}</Text>
            <View style={{backgroundColor: "grey", padding:5}}>
                <TextInput value={code} style={styles.code} multiline={true} numberOfLines={6} placeholder='' autoCapitalize='none' onChangeText={(text)=> setCode(text)}></TextInput>
                <Text style={{backgroundColor:"#3E3E3E", height:75, padding:5, color: "white"}}>{consoleLog}</Text>
                <Pressable style={styles.buttonRun} onPress={() => Compiler()} >
                    <Text style={styles.text}>Run</Text>
                </Pressable> 
            </View>
            
            <Pressable style={styles.button} onPress={() => navigation.navigate('Editor') } >
                <Text style={styles.text}>Close Editor</Text>
            </Pressable>  
        </View>
    )
}

export default Compiler

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    code: {
        marginVertical: 4,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: 'black',
        color: 'white',
        minHeight: 200
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginVertical: 4,
      },
      buttonRun: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#008E06',
        marginVertical: 4,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      Title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
      }
})