import React, { Component } from 'react';
import {Alert, ScrollView, Image} from 'react-native';
import { Container, Header, Content, Text, Thumbnail, Left, List, ListItem, Body, Item, Icon, Input, Footer, FooterTab, Button, View, Card, CardItem , Right} from 'native-base';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {resto: [],textapi:''};
  }

  cariresto(){
    var url = `https://developers.zomato.com/api/v2.1/search?q=${this.state.textapi}`;
    var config = {
      headers:{'user-key':'afcaa8a8d7de881ebabe9a096be8a66d'}
    };

    axios.get(url, config).then((ambilData)=>{
      this.setState({
        resto: ambilData.data.restaurants,
      })
      console.log(url);
    })
  }

  render(){

    const data = this.state.resto.map((item,index) => {
      var nama = item.restaurant.name;
      var kota = item.restaurant.location.city;
      var Alamat = item.restaurant.location.address;
      var harga = item.restaurant.average_cost_for_two;
      var gambar = item.restaurant.thumb;
      var gambar2 = 'http://vescortravel.com/_website/images/noimage.png'
      if(gambar == false){
        gambar = gambar2;
      }
      return (
        <ListItem avatar key={index}>
          <Content>
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:gambar}} />
                <Body> 
                  <Text> {nama} </Text>
                  <Text note> {kota} </Text>  
                </Body> 
              </Left> 
              <Right>
                <Text>Rp {harga}</Text>
              </Right>
            </CardItem>
            <CardItem>            
              <Body>
                <Image source={{uri:gambar}}style={{height: 200, width: 370, flex: 1}}/>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="globe" />
                <Text>{Alamat}</Text>
              </Left>
            </CardItem>
            </Card>
          </Content>
        </ListItem>
      )
    })

    return(
      <Container>
        <Header searchBar rounded style={{backgroundColor:'red'}}>
          <Item>
            <Icon name="search" />
            <Input placeholder="Cari menu makanan..." onChangeText={(x) => this.setState({textapi: x})}/>
          </Item> 
        </Header>                
            <Button style={{backgroundColor:'red', width:420}} onPress={()=>{this.cariresto()}}><Text>LIHAT DAFTAR RESTO</Text></Button>
        <Content>
          <ScrollView>
            <List>
              {data}
            </List>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}


export default App;
