import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');

  const handlePress = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display || '0'}</Text>

      <View style={styles.row}>
        <CalcButton label="7" onPress={() => handlePress('7')} />
        <CalcButton label="8" onPress={() => handlePress('8')} />
        <CalcButton label="9" onPress={() => handlePress('9')} />
        <CalcButton label="/" onPress={() => handlePress('/')} />
      </View>

      <View style={styles.row}>
        <CalcButton label="4" onPress={() => handlePress('4')} />
        <CalcButton label="5" onPress={() => handlePress('5')} />
        <CalcButton label="6" onPress={() => handlePress('6')} />
        <CalcButton label="*" onPress={() => handlePress('*')} />
      </View>

      <View style={styles.row}>
        <CalcButton label="1" onPress={() => handlePress('1')} />
        <CalcButton label="2" onPress={() => handlePress('2')} />
        <CalcButton label="3" onPress={() => handlePress('3')} />
        <CalcButton label="-" onPress={() => handlePress('-')} />
      </View>

      <View style={styles.row}>
        <CalcButton label="C" onPress={handleClear} />
        <CalcButton label="0" onPress={() => handlePress('0')} />
        <CalcButton label="=" onPress={handleResult} />
        <CalcButton label="+" onPress={() => handlePress('+')} />
      </View>
    </View>
  );
}

function CalcButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 20,
    margin: 5,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});