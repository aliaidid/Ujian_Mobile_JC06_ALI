import React, { Component } from 'react'
import {Alert, View, ScrollView, Button, TextInput} from 'react-native'
import {Header, Form, Item, Content, Container, Text, Input, List, ListItem, Thumbnail, Body, Left, Right, Label, Footer} from 'native-base'


class App extends Component{
  constructor(){
    super()
    this.state = {massa:0, tinggi:0, imt:0, result:'', submit:false}
  }
  render(){
    var klik = () =>{
      var massaa = this.state.massa;
      var tinggii = this.state.tinggi / 100;
      this.setState({tinggi: tinggii});
      var hasil = massaa / (tinggii * tinggii);
      this.setState({imt: hasil});
      if(hasil < 18.5){
        this.setState({
          result:'BB Anda Kurang !'})
      }else if(hasil >=18.5 && hasil <= 24.9){
        this.setState({result:'BB Anda Ideal !'})
      }else if(hasil >=25.0 && hasil <=29.9){
        this.setState({result:'BB Anda Berlebih !'})
      }else if(hasil >=30.0 && hasil <=39.9){
        this.setState({result:'BB Anda Sangat Berlebih !'})
      }else if(hasil >39.9){
        this.setState({result:'Anda Obesitas !'})
      }
      this.setState({submit:true})
    }
    
    return(
      <Container style={{backgroundColor:'lightblue'}}>
        <Header style={{backgroundColor:'blue'}}>
        <Body><Text style={{color:'white'}}>INDEKS MASSA TUBUH</Text></Body>
        </Header>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label> Massa (kg) </Label>
                  <Input keyboardType="numeric" onChangeText={(x)=>{this.setState({massa: x})}}/>
              </Item>
              <Item floatingLabel>
                <Label> Tinggi (cm) </Label>
                  <Input keyboardType="numeric" onChangeText={(x)=>{this.setState({tinggi: x})}}/>
              </Item>
            </Form>
            <Button onPress={klik} title="Hitung IMT" color='blue'/>
            {this.state.submit && 
            <Body>
              <Text> Massa Tubuh: </Text>
              <Text style={{fontWeight: 'bold'}}> {this.state.massa} </Text>
              <Text> Tinggi Badan: </Text>
              <Text style={{fontWeight: 'bold'}}> {this.state.tinggi} </Text>
              <Text> Indeks Massa Tubuh: </Text>
              <Text style={{fontWeight: 'bold'}}> {this.state.imt} </Text>
              <Text> Diagnosa: </Text>
              <Text style={{fontWeight: 'bold'}}> {this.state.result} </Text>
            </Body> 
            }
          </Content>
          <Footer><Body><Text style={{color:'white'}}>ALI JC-06 </Text></Body></Footer>
      </Container>
    )
  }
}

export default App;

