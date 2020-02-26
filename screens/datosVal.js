import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, Spinner, CardItem,Text,Card} from 'native-base';
import {StyleSheet} from 'react-native';

export default class IconTextboxExample extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Icon type='MaterialIcons' name='person-pin'/>
          <Text style={styles}>BIENVENIDO</Text>
      </Header>
        <Content padder contentContainerStyle = {styles.content}>
          <Card>
           <CardItem header bordered>
              <Text style={styles.textCenter}>{this.props.route.params.titulo}</Text>
            </CardItem>
            <CardItem>
              <Text style={styles.textCenter}>{this.props.route.params.nombre}</Text>
            </CardItem>
            <CardItem>
              <Text style={styles.textCenter}>{this.props.route.params.contraseña}</Text>
            </CardItem>
          </Card>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center', // CENTRAR CONTENIDO
  },
  textCenter: {
    textAlign: 'center', // ALINEAR EL TEXTO
    width: '100%' // OCUPAR EL ANCHO DE CARD
  }
});