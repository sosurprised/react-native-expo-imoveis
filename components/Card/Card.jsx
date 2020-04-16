import React from 'react';
import {StyleSheet,
        //ScrollView,
        TouchableOpacity,
        Text,
        Image, View} from 'react-native';
import { styles } from './styles';


   
        
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state={detailsHidden: false}; 
    }

    handleHideDetails= () =>
    {
        const { detailsHidden } = this.state; 
        this.setState({ detailsHidden: !this.state.detailsHidden }); 
    }
    
 render() {
   return (
       <TouchableOpacity style={styles.card} onPress={this.handleHideDetails}>
        <Image style={styles.cardImage} source={{uri: this.props.item.images[0]}} /> 
        <Text style={styles.cardTitleText}> Imóvel a Venda</Text>
        <Text style={styles.cardText}>Valor: R${this.props.item.price}.00</Text>
        {this.state.detailsHidden ? 
        <View style={styles.card}>
            <Text style={styles.cardText}>{this.props.item.address.formattedAddress}</Text>
            <Text style={styles.cardText}>Quarto(s): {this.props.item.bedrooms} / Banheiro(s): {this.props.item.bathrooms}</Text>
        </View> : null} 
       </TouchableOpacity>
           
   );
 }
}
         
