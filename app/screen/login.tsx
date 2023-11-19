import {View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Pressable} from 'react-native'
import React, { useState } from 'react'
import { AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login=()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const auth = AUTH;
    const Title= "Adapt/Script>"
    const signIn =async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch(error) {
            console.log(error);
            alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }
    const signUp = async ()=> {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails')
        }catch(error) {
            console.log(error);
            alert('Registration failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <Text style={styles.Title} >{Title}</Text>
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text)=> setEmail(text)}></TextInput>
                <TextInput value={password} secureTextEntry={true} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text)=> setPassword(text)}></TextInput>
                {
                    loading ? (
                        <ActivityIndicator size="large" color="#0000ff"/>
                    ):(
                        <>
                           <Pressable style={styles.button} onPress={()=> signIn()} >
                                <Text style={styles.text}>Login</Text>
                            </Pressable>
                            <Pressable style={styles.button} onPress={()=> signUp()} >
                                <Text style={styles.text}>Create Account</Text>
                            </Pressable>
                        </>
                    )
                    
                }
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
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