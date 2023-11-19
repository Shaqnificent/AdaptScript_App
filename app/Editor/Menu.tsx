import {View, Text, Button, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { AUTH } from '../../FirebaseConfig';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Editor=({navigation}: RouterProps) => {
    const Title= "Adapt/Script>"
    return(
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.Title} >{Title}</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Editor')} >
                <Text style={styles.text}>Open Editor</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => AUTH.signOut()} >
                <Text style={styles.text}>Logout</Text>
            </Pressable>
           
        </View>
    )
}

export default Editor

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginVertical: 4,
        marginHorizontal: 20
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