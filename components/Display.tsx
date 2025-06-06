import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DisplayProps = {
  expressao: string;
  resultado: string;
};

export default function Display({ expressao, resultado }: DisplayProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.expressao}>{expressao}</Text>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#333',
    alignItems: 'flex-end',
  },
  expressao: {
    fontSize: 28,
    color: '#ccc',
  },
  resultado: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
});
