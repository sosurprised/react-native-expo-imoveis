import {StyleSheet} from 'react-native';

 export const styles = StyleSheet.create({
   container: {
    flex:1,
    marginTop:20,
    backgroundColor: '#F5FCFF',
  },
  containerfilter: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop:30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: '#F8E0EC',
  },
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
    filterText: {
    padding:5,
    fontSize:20
  },
    icon : {
    padding:5,
    width: 40,
    height: 40,   
    marginHorizontal:45,
    marginTop: 5
    }
  });