import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface RouterProps {
  navigation: NavigationProp<any, any>;
}
type AccordionItemPros = PropsWithChildren<{
  title: string;
}>;

const grammar= {
  variables: {
    text:"In apps, we usually need to store some values, we do this by using variables. Variables are containers for storing values.",
    example: "let num"
  },
  
}

function AccordionItem({ children, title }: AccordionItemPros): JSX.Element {
  const [ expanded, setExpanded ] = useState(false);

  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <View style={styles.accordBody}>{ children }</View>;

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={ toggleItem }>
        <Text style={styles.accordTitle}>{ title }</Text>
        <Icon name={ expanded ? 'chevron-up' : 'chevron-down' }
              size={20} color="black" />
      </TouchableOpacity>
      { expanded && body }
    </View>
  );
}

function Progress({navigation}: RouterProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <AccordionItem title="Variables & Keywords">
            <Text style={styles.textSmall}>{grammar.variables.text} </Text>
            <Text style={{fontSize: 16, color: "white", backgroundColor: "black", paddingLeft: 16}}>{grammar.variables.example} </Text>
            <View style={{flex:1, flexDirection: 'row'}}>
              <Pressable style={styles.buttonContinue} onPress={() => null } >
                  <Text style={styles.text}>Continue</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => navigation.navigate('Compiler')} >
                  <Text style={styles.text}>Try</Text>
              </Pressable>
            </View>
        </AccordionItem>
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10

  },
  accordContainer: {
    paddingBottom: 4
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#D9FFDA',
    color: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "light-gray"


  },
  textSmall: {
    padding: 16,
    fontSize: 16
  },
  seperator: {
    height: 12
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00A2B8',
    marginVertical: 4,
    marginHorizontal: "2.5%",
    width: "45%"
    
  },
  buttonContinue: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#008E06',
    marginVertical: 4,
    marginHorizontal: "2.5%",
    width: "45%"
    
  },
  text: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Progress;