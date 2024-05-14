import {StyleSheet} from 'react-native'

export const styleDetail = StyleSheet.create({
    styleImage:{
        height:350,
        width:"100%",
        borderRadius:10,
        resizeMode:'cover'
    },
    cardContainer: {
        position: 'absolute', // Para que se superponga sobre la imagen
        top: 320, // Ajusta esta propiedad para controlar la distancia desde la parte superior de la imagen
        left: 20, // Ajusta esta propiedad para controlar la distancia desde el borde izquierdo
        right: 20, // Ajusta esta propiedad para controlar la distancia desde el borde derecho
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 4, // Nivel de elevación para la sombra
      },
      titleStyle:{
        color:"#FD8E3E",
        fontSize:18,
        fontWeight:"700",
        marginBottom:30
      },
      containerPrice:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
      },
      containerAmount:{
        justifyContent:"space-between",
        flexDirection:"row",
      },
      textAmount:{
        backgroundColor:"#EEEEEE",
        padding:5,
        borderRadius:50,
        marginHorizontal:15,
        fontSize:10
      },
      textPrice:{
        color:"#FD8E3E",
        fontSize:16,
        fontWeight:"500"
      },
      textTag:{
        marginTop:40,
        marginBottom:20,
        color:"#FD8E3E",
        fontSize:14
      },
      textDescription:{
        fontSize:16,
        fontWeight:"400",

      },
      containerButton:{
        alignItems:"center",
        marginTop:50,
        marginBottom:30
      },
      cartButton:{
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
      textButton:{
        textAlign:"center",
        color:"white",
        fontWeight:"600"
      }
})