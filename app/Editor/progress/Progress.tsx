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

interface Lesson{
  title: string;
  text: string;
  example: string;
}


const start: Lesson = {
  title: "Getting Started with AdaptScript",
  text: "AdaptScript is a programming language that is designed to be easy to learn and use. It is a high-level language, meaning it is a language that is closer to human languages than computer languages. AdaptScript is a language that is designed to be easy to learn and use. It is a high-level language, meaning it is a language that is closer to human languages than computer languages. AdaptScript is a language that is designed to be easy to learn and use. It is a high-level language, meaning it is a language that is closer to human languages than computer languages.",
  example: "func init() {\n\tprint(\"Hello World\")\n}"
}

const variables: Lesson = {
  title: "Variables",
  text: "Variables are used to store information to be referenced and manipulated in AdapScript program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program.",
  example: " func init() {\n\tstring name = \"AdaptScript\"\n}"
}

const input: Lesson = {
  title: "Input",
  text: "AdaptScript supports the following input methods: input(). This takes and assigns an input to a variable",
  example: "func init(){\n\tstring name = input()\n\tprint(name)\n}"
}
const arithmetic: Lesson = {
  title: "Arithmetic",
  text: "AdaptScript supports the following arithmetic operators: +, -, *, /,. AdaptScript also supports the following assignment operators: ++,--.",
  example: "func init(){ \n\tint a = 5\n\tint b = 10\n\tint c = a + b\n\tprint(c)\n}"
}

const functions: Lesson = {
  title: "Functions",
  text: "AdaptScript also supports functional programming paradigm which is now a common means in the software development field",
  example: "func init(){\n \t sum(int a,int b):int{\n \treturn a+b\n}\n\tprint(sum(5,10))\n}"
}

const loops: Lesson = {
  title: "For Loop and While loops",
  text: "Iteration Constructions are used to execute a block of statements repeatedly. AdaptScript supports the following iteration constructs: for loop, while loop.",
  example: "func init(){\n\tfor(int i = 0; i < 10; i++){\n\t\tprint(i)\n\t}\n  \tint i = 0\n\twhile(i < 10){\n\t\tprint(i)\n\t\ti++\n\t}\n}"
}
let lessons: Lesson[] = [start, variables, input,arithmetic, functions, loops]




  
  


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
          {lessons.map((lesson, index) => (
            <AccordionItem key={index} title={lesson.title}>
              <Text style={styles.textSmall}>{lesson.text} </Text>
              <Text style={{fontSize: 16, color: "white", backgroundColor: "black", paddingLeft: 16}}>{lesson.example} </Text>
              <View style={{flex:1, flexDirection: 'row'}}>
                {/* Other components */}
              </View>
              <View style={{flexDirection: 'row'}}>
                <Pressable style={styles.buttonContinue} onPress={() => null } >
                    <Text style={styles.text}>Continue</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Compiler')} >
                    <Text style={styles.text}>Try</Text>
                </Pressable>
              </View>
            </AccordionItem>
          ))}
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
    display: 'flex',
    flexDirection: 'row',
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