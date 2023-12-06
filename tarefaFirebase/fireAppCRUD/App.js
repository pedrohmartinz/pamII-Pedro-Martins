import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import { ImageBackground, Image} from "react-native";


const firebaseConfig = {
  apiKey: "AIzaSyAAh_D8xHmXEnxsBKOI3rK-A014jqGdbFE",
  authDomain: "barbieworld-37993.firebaseapp.com",
  projectId: "barbieworld-37993",
  storageBucket: "barbieworld-37993.appspot.com",
  messagingSenderId: "557626257683",
  appId: "1:557626257683:web:d0d79048b719da9655aae6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const App = () => {
  const [nomeContaos, setNomeContatos] = useState('');
  const [dadosContatos, setDadosContatos] = useState([]);

  const testFirestoreConnection = async () => {
    try {
      if (nomeContaos.trim() === '') {
        console.error('Digite algo');
        return;
      }

      const docRef = await addDoc(collection(db, 'Banco'), {
        nome: nomeContaos,
      });
      console.log('Documento adicionado com ID:', docRef.id);

      setNomeContatos('');
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
    }
  };

  const lerDadosContato = async () => {
    try {

      const querySnapshot = await getDocs(collection(db, 'Banco'));
      const dados = [];
      querySnapshot.forEach((doc) => {
        dados.push({ id: doc.id, ...doc.data() });
      });
      setDadosContatos(dados);
    } catch (error) {
      console.error('Erro ao ler dados da coleção:', error);
    }
  };

  return (


<SafeAreaView>

      <Text style={styles.title}>Lista telefonica</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da pessoa"
        value={nomePokemon}
        onChangeText={(text) => setNomeContatos(text)}
      />
      
      <View style={styles.btnCP}>
      <Button  title="Cadastrar" onPress={testFirestoreConnection} />
      </View>

      <Text>{'\n'}</Text>

      <View style={styles.btnVP}>
      <Button style={styles.btnVP} title="Ver contatos" onPress={lerDadosContato} />
      </View>

      <Text style={styles.subtitle}>Contatos:</Text>
      <View>
        {dadosContatos.map((Banco) => (
          <Text key={Banco.id} style={styles.userText}>{Banco.nome}</Text>
        ))}
      </View>
   
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  title: {
    position: 'absolute',
    top: 120,
    left: 23,
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },

  btnCP: {
    position: 'absolute',
    top: 220,
    left: 55,
    padding: 16
  },

  btnVP: {
    position: 'absolute',
    top: 260,
    left: 30,
    padding: 16
  },

  subtitle: {
    position: 'absolute',
    top: 110,
    left: 350,
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },

  input: {
    position: 'absolute',
    top: 175,
    left: 60,
    padding: 16,

    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    textAlign: 'center', 
    color: '#000', 
  },
  imageBackground: {
    position: 'absolute',
    top: 50,
    left: 40,
    width: 600,
    height: 400,
    flex: 1,
    resizeMode: "cover",
  },
  userText: {
    top: 150,
    left: 365,
    padding: 1,

    fontSize: 16,
    marginBottom: 2,
  },
});

export default App;
