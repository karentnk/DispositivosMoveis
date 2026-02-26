import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {
  const [contador, setContador] = useState(0);

return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App</Text>
      <Text style={styles.numero}>{contador}</Text>

      <Button
        title="Aumentar"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  numero: {
    fontSize: 30,
    marginBottom: 20,
  },
});
