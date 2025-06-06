import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Display from './components/Display';
import Tecla from './components/Tecla';

const teclas: string[][] = [
  ['AC', '(', ')', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '<-', '='],
];

export default function App() {
  const [expressao, setExpressao] = useState<string>('');
  const [resultado, setResultado] = useState<string>('0');

  const TeclaPressionada = (tecla: string) => {
    if (tecla === 'AC') {
      setExpressao('');
      setResultado('0');
    } else if (tecla === '<-') {
      setExpressao((prev) => prev.slice(0, -1));
    } else if (tecla === '=') {
      try {
        const res = eval(expressao);
        setResultado(String(res));
      } catch {
        setResultado('Erro');
      }
    } else {
      setExpressao((prev) => prev + tecla);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Display expressao={expressao} resultado={resultado} />
      <View style={styles.teclado}>
        {teclas.map((linha, i) => (
          <View key={i} style={styles.linha}>
            {linha.map((tecla, j) => (
              <Tecla key={j} label={tecla} onClick={() => TeclaPressionada(tecla)} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    justifyContent: 'flex-end',
  },
  teclado: {
    padding: 10,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
