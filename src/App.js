import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import getRealm from './services/realm.configuration'

import { Container, Title, Input, LabelInput, AreaBtn, Button, LabelButton, List } from './styles.js'

import ItemList from './components/ItemList';

export default function App() {

  const [books, setBooks] = useState([]);
  const [_id, set_Id] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {

    async function getBooks() {

      const realm = await getRealm()

      const data = realm.objects("Book").sorted('name');
      setBooks(data)
    }

    getBooks()


  }, [])

  async function handleAddBook() {
    if (name === '' || price === '') {
      alert("Preencha o nome do livro e o preço para salvar.")
      return
    }

    try {
      const realm = await getRealm()

      let id;
      let findBooks = realm.objects("Book").sorted('_id', true)

      if (findBooks.length > 0) {
        id = findBooks[0]._id + 1
      } else {
        id = 1
      }

      realm.write(() => {
        realm.create("Book", {
          _id: id,
          name: name,
          price: price
        })

        setName('');
        setPrice('');
        Keyboard.dismiss()
      })

    } catch (error) {
      console.log(error)
    }

  }

  function handleSelectBook(book) {

    set_Id(book._id);
    setName(book.name);
    setPrice(book.price);
  }

  async function handleEditBook() {
    if (_id === null) return

    const realm = await getRealm()

    try {

      realm.write(() => {
        realm.create('Book', { _id, name, price }, 'modified')
      })

      set_Id(null);
      setName('');
      setPrice('');
      Keyboard.dismiss()


      const data = realm.objects('Book').sorted('name')
      setBooks(data)

    } catch (error) {
      console.log(error)
    }


  }

  async function handleDeleteBook(book) {

    try {
      const realm = await getRealm();

      realm.write(() => {
        realm.delete(book)
      })

      const data = realm.objects("Book").sorted("name")
      setBooks(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Title>LISTA DE LIVROS</Title>

      <LabelInput>Nome</LabelInput>
      <Input value={name} onChangeText={(text) => setName(text)} autoCorrect={false} />

      <LabelInput>Valor</LabelInput>
      <Input value={price} onChangeText={(text) => setPrice(text)} autoCorrect={false} />

      <Button onPress={!_id ? handleAddBook : handleEditBook}>
        <LabelButton>{!_id ? "Incluir" : "Editar"}</LabelButton>
      </Button>

      <List
        data={books}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <ItemList
          data={item}
          remove={() => handleDeleteBook(item)}
          select={() => handleSelectBook(item)}
        />}
      />


    </Container>
  );
}