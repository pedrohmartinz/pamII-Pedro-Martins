import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';

// Inicialize o Firebase com suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyAiJZsyrJnvz1R4RX3USPiL3Sw5bmzNBuI",
  authDomain: "projeto1-32830.firebaseapp.com",
  projectId: "projeto1-32830",
  storageBucket: "projeto1-32830.appspot.com",
  messagingSenderId: "1098767204331",
  appId: "1:1098767204331:web:e1f95c8c7a3822f084a3ae"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [data, setData] = useState('');

  const handleInsertData = () => {
    if (data.trim() !== '') {

      const database = firebase.database().ref('Banco');
      database.push().set({
        nome: data
      })
      .then(() => {
        Alert.alert('Sucesso', 'Dados inseridos no Firebase!');
        setData(''); 
      })
      .catch(error => {
        Alert.alert('Erro', 'Houve um problema ao inserir os dados no Firebase: ' + error.message);
      });
    } else {
      Alert.alert('Atenção', 'Por favor, insira dados válidos.');
    }
  };

  return (
    <View>
      <TextInput
        value={data}
        onChangeText={text => setData(text)}
        placeholder="Insira seu nome"
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
      <Button title="Inserir no Firebase" onPress={handleInsertData} />
    </View>
  );
};

export default App;