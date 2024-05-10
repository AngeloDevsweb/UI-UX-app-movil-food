import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagenPerfil: {
    borderRadius: 100,
    borderColor: "white",
    width: 180,
    height: 169,
    marginVertical: 20,
  },
 
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: "#EEEEEE",
    borderRadius: 15,
    marginVertical: 10,
    width: 280,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2, // ajusta este valor para controlar la sombra en la dirección Y
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    
  },
  containerBoton:{
    alignItems:"center"
  },
  estiloBoton:{
    backgroundColor:'#FD8E3E',
    borderRadius:15,
    paddingVertical:20,
    width:150,
    marginTop:30,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2, // ajusta este valor para controlar la sombra en la dirección Y
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  TextoBoton:{
    textAlign:'center',
    color:'white'
  },

});
