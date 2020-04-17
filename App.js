import React, {Component}from 'react';
import {StyleSheet,
        FlatList,
        ActivityIndicator,
        View} from 'react-native';
import Card from './components/Card/Card';        

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

 render() {
   
  /*return (
    <View><Text>Filtro</Text></View>
  );*/


    if(this.state.items.length===0) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  
   return (
     <FlatList 
       style={styles.container}
       data={this.state.items}
       keyExtractor={(item, index) => index.toString()}
       renderItem={({item}) => <Card item={item}/>}
     /> 
   );
 }

 _get = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
  }
}
         
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    backgroundColor: '#F5FCFF',
  }
});

