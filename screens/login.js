import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Registro from './registro';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nombre:'',
      contraseña:''
    } 
  }
  render(){
    const navegar = this.props.navigation;
    return (
    <Container>
    <Content padder contentContainerStyle={styles.content}>
      <Card>
        <CardItem header bordered>
          <Text style={styles.textCenter}>Inicio de Sesión</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Item inlineLabel>
              <Icon type='FontAwesome' name='user' />
                <Input placeholder='Nombre de Usuario' value={this.state.nombre} onChangeText={(nombre)=> this.setState({nombre}) } />
              </Item>
              <Item inlineLabel last>
                <Icon type='FontAwesome' name='lock' />
                <Input placeholder='Contraseña' secureTextEntry={true} value={this.state.contraseña} onChangeText={(contraseña)=> this.setState({contraseña}) }/>
              </Item>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Button
                primary
                onPress={() => {
                  navegar.navigate('DatosVal', {
                    titulo: 'Logeo Exitoso',
                    nombre: this.state.nombre,
                    contraseña: this.state.contraseña
                  });
                }}>
                <Text>ENTRAR</Text>
              </Button>
        </CardItem>
        <CardItem footer bordered>
          <Button
                success
                onPress={() => {
                  navegar.navigate('Registro', {
                    titulo: 'Registro de usuario',
                  });
                }}>
                <Text>
                  REGISTRATE
                </Text>
              </Button>
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


export default Login;