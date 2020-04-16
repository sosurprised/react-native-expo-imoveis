import React from 'react';
import {StyleSheet,
        TouchableOpacity,
        Text} from 'react-native';
import { styles } from './styles';

export default class Filter extends React.PureComponent { 
 render() {
   return (
       <TouchableOpacity style={styles.filter}> 
     <Text style={styles.filterText}> Imóvel a Venda</Text>
       </TouchableOpacity>
           
   );
 }
}
