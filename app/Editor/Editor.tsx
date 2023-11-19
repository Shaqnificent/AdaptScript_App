import {View, Text, Button, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import Progress from './progress/Progress';
interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Editor=({navigation}: RouterProps) => {
   const Title= "Adapt/Script>"
   return (
    <View style={{flex: 1, justifyContent: "flex-end"}}>
            <Text style={styles.Title} >{Title}</Text>
            <Progress navigation={navigation} />
            <Pressable style={styles.button} onPress={() => navigation.navigate('Menu')} >
                <Text style={styles.text}>Close Editor</Text>
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
        backgroundColor: 'red',
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