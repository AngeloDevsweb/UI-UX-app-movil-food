import {StyleSheet} from 'react-native'

export const productStyle = StyleSheet.create({
    ContainerTags:{
        marginTop:60
    },
    boxTag:{
        backgroundColor:"#FD8E3E",
        padding:15,
        borderRadius:20,
        width:90,
        height:50,
        marginHorizontal:5
    },
    textTag:{
        color:"white",
        textAlign:"center",
        fontSize:15,
        fontWeight:"600"
    },
    containerList:{
        backgroundColor:"#EEEEEE",
        flex:2,
        margin:15,
        padding:15
    },
    tarjeta: {    
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
      },
      imagen: {
        flex:1,
        width: 150,
        height:"100%", // Cambia la altura para que se ajuste dinámicamente al tamaño de la tarjeta
        aspectRatio: 1, // Asegura que la imagen tenga una relación de aspecto cuadrada para evitar distorsiones
        resizeMode:'cover', // Mantiene la relación de aspecto y recorta la imagen si es necesario para ajustarse
        borderRadius:10,
        marginLeft:5
      },
      
      contenido: {
        flex: 1,
        padding: 10,
      },
      nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      descripcion: {
        fontSize: 14,
        marginBottom: 5,
      },
      precio: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FD8E3E',
      },
})