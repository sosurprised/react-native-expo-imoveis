import React from 'react';
import {TouchableOpacity,
        Text,
        Image, View} from 'react-native';
import { styles } from '../styles';
        
        
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
    !this.props.item.address.formattedAddress.includes("Rua Desconhecida") && this.props.item.publish != false ?
       <TouchableOpacity style={styles.card} onPress={this.handleHideDetails}>
        <Image style={styles.cardImage} source={{uri: this.props.item.images[0]}} /> 
        <Text style={styles.cardTitleText}> Imóvel a Venda</Text>
        <Text style={styles.cardText}> Valor: R${this.props.item.price}.00</Text>
        <Text style={styles.cardText}> {this.props.item.usableArea} mts²</Text>
        {this.state.detailsHidden ? 
        <View style={styles.card}>
            <Text style={styles.cardText}>{this.props.item.address.formattedAddress}</Text>
            <Text style={styles.cardText}>Quarto(s): {this.props.item.bedrooms} / Banheiro(s): {this.props.item.bathrooms}</Text>
            <Text style={styles.cardText}>Estacionamento Vaga(s): {this.props.item.parkingSpaces}</Text>
        </View> : null} 
       </TouchableOpacity> : <View></View>
           
   );
 }
}