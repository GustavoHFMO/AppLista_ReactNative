import React, { useState, useEffect } from "react"
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Axios from "axios";
import Cabecalho from "./src/componentes/Cabecalho";
import ItensListados from "./src/componentes/ItensListados";
import AdicionarItem from "./src/componentes/AdicionarItem";

export default function App() {

  const [lista, setLista] = useState();

  // DELETE
  const deletarItem = (key) => {
    Axios.delete(`http://192.168.100.51:3001/item/${key}`,
    )
  }

  // READ
  useEffect(() => {
    Axios.get("http://192.168.100.51:3001/itens").then(
        (response) => {
          setLista(response.data)
        }
    )
  }, [lista])

  // CREATE
  const submeterInformacao = (texto) => {
    Axios.post(   "http://192.168.100.51:3001/item", {item: texto}   )
  }

  

  return (

    <View style={styles.container}>
      
      <Cabecalho />
     
      <View style={styles.conteudo}>

        <AdicionarItem funcao={submeterInformacao} />

        <View style={styles.estiloLista}>
          <FlatList
            data={lista}
            renderItem={({ item }) => (
              <ItensListados props={item} funcao={deletarItem} />
            )}
          /> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  conteudo: {
    padding: 40,
  },
  estiloLista: {

  }
});
