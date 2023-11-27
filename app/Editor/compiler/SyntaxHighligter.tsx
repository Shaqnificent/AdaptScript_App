import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';


interface SyntaxHighlighterProps {
  code: string;
  onChange?: (newCode: string) => void;
}

const reservedWords = [ 'int','str','float','adapt','void','init','return','for','if','while',
    'else','func','print','accept()','fn'];


const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ code, onChange }) => {

    const isReservedWord = (word: string): boolean => {
        return reservedWords.includes(word.toLowerCase());
    };

  const highlightCode = (code: string): React.ReactNode => {
  const startComment= '/*Please enter a space after each keyword for syntax higlighting*/'
    const words = code.split(/\s+/);
    return words.map((word, index) => {
      const isReserved = isReservedWord(word);
      const isString = /^['"].*['"]$/.test(word);
      const isComment = /^\/\/.*$/.test(word);
      const isVariable = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(word);

      let style = {};
      if (isReserved) {
        // Check if the reserved word is misspelled
        const isMisspelled = !reservedWords.includes(word.toLowerCase());
        style = isMisspelled ? styles.error : styles.keyword;
        }   
      else if (isString) style = styles.string;
      else if (isComment) style = styles.comment;
      else if (isVariable) style = styles.variable;

      const space = index < words.length - 1 ? ' ' : '';

      return (
      
        <Text key={index} style={style}>
          {word + space}
        </Text>
      );
    });
  };

  return (
    <TextInput
      style={styles.code}
      multiline={true}
      autoCapitalize='none'
      onChangeText={(text) => onChange && onChange(text)}
    >
        {highlightCode(code)}
    </TextInput>
  );
};

export default SyntaxHighlighter;


const styles = StyleSheet.create({
    code: {
      marginVertical: 4,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: 'black',
      color: 'white',
      minHeight: 200,
      fontSize: 20,
    
    },
    keyword: {
      color: '#FFA500', // Blue color for keywords
      fontWeight: 'bold',
    },
    string: {
      color: '#CE9178', // Orange color for strings
    },
    comment: {
      color: '#6A9955', // Green color for comments
      fontStyle: 'italic',
    },
    variable: {
      color: '#9CDCFE', // Light blue color for variables
    },
    error: {
        color: 'red', // Red color for misspelled words
        textDecorationLine: 'underline',
      },
  });
