import React, {Component}from 'react';
import {FlatList,
        View} from 'react-native';
import Card from './components/Card/Card';      
import Filter from './components/Filter/Filter'; 
import { styles } from './components/styles';

export default class App extends Component { 

  constructor() {
    super();
    this.state = {
      items: []     
    }
  }

    
  componentDidMount() {
     this._get('http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed').then(
       data => {
         this.setState({items: data})
       }
    )
}

_get = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
  }
 

 render() {
     
   return (

    <View> 

    <Filter /> 
    
    <View>
      <FlatList 
       style={styles.container}
       data={this.state.items}
       keyExtractor={(item, index) => index.toString()}
       renderItem={({item}) => <Card item={item}/>}
     /> 
    </View> 
     </View>
   );
 } 
}

         
