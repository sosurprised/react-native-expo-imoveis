import {StyleSheet} from 'react-native';

 export const styles = StyleSheet.create({
    card: {
     backgroundColor: '#fff',
     marginBottom: 10,
     marginLeft:'2%',
     width:'96%',
     shadowColor:'#000',
     shadowOpacity: 0.2,
     shadowRadius: 1,
     shadowOffset: {
       width:3,
       height:3
     }
    },
    cardImage: {
    width: '100%',
    height:200,
    resizeMode:'cover'
    },
    cardTitleText: {
      fontSize:20,
      fontWeight: "bold",
      color: '#ff0000',
    },
    cardText: {
    padding:1,
    fontSize:16
    },
  });
  