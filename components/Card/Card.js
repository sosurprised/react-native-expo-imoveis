import React from 'react';
import {TouchableOpacity,
        Text,
        ScrollView,
        Dimensions,
        Image,
        View} from 'react-native';
import { styles } from '../styles';
        
        
    const {width} = Dimensions.get('window');
    const height = width * 0.6;



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
     <View>
    <View style={{width, height}}>
  <ScrollView pagingEnabled horizontal style={{width, height}} >

<Image source={{uri: this.props.item.images}} style={{width, height, 
  resizeMode: 'contain'}}/>
 
   </ScrollView>
    </View>

    <TouchableOpacity style={styles.card} onPress={this.handleHideDetails}>
    <View>
        <Text style={styles.cardTitleText}> Imóvel a Venda</Text>
        <Text style={styles.cardText}> Valor: R${this.props.item.price}.00</Text>
        <Text style={styles.cardText}> {this.props.item.usableArea} mts²</Text>
        {this.state.detailsHidden ? 
        <View style={styles.card}>
            <Text style={styles.cardText}>{this.props.item.address.formattedAddress}</Text>
            <Text style={styles.cardText}>Quarto(s): {this.props.item.bedrooms} / Banheiro(s): {this.props.item.bathrooms}</Text>
            <Text style={styles.cardText}>Estacionamento Vaga(s): {this.props.item.parkingSpaces}</Text>
        </View> : null} 
        </View>
        </TouchableOpacity>
           </View>
   );
 }
}
