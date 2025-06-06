import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

type TeclaProps = {
  label: string;
  onClick: () => void;
};

export default function Tecla({ label, onClick }: TeclaProps) {
  const isOperador = ['/', '*', '-', '+', '=', '<-'].includes(label);

  return (
    <TouchableHighlight
      onPress={onClick}
      style={[styles.botao, isOperador && styles.operador]}
      underlayColor="#ccc"
    >
      <Text style={styles.texto}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#eee',
    borderRadius: 8,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  operador: {
    backgroundColor: '#a2d2ff',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
