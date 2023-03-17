import React from 'react';

import { Container, ContainerInfo, Name, Price, ContainerButton, Button, LabelButton } from './styles'

export default function ItemList({ data, remove, select }) {

  return (
    <Container>

      <ContainerInfo>
        <Name>{data.name}</Name>
        <Price>R$ {data.price} </Price>
      </ContainerInfo>

      <ContainerButton>
        <Button style={{ backgroundColor: '#D7E639' }} onPress={() => select()} >
          <LabelButton>Editar</LabelButton>
        </Button>

        <Button style={{ backgroundColor: '#E66E67' }} onPress={() => remove()}>
          <LabelButton>Excluir</LabelButton>
        </Button>
      </ContainerButton>

    </Container>
  );
}