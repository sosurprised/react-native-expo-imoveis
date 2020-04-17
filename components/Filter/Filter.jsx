import React from 'react';
import {StyleSheet,
        TouchableOpacity,
        Text} from 'react-native';

export default class Filter extends React.PureComponent { 
 render() {
   return (
       <TouchableOpacity style={styles.filter}> 
     <Text style={styles.filterText}> Imóvel a Venda</Text>
       </TouchableOpacity>
           
   );
 }
}
         
const styles = StyleSheet.create({

  filterText: {
  padding:1,
  fontSize:16
  },
});

