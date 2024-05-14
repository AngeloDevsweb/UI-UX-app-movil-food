import React from 'react'
import { Text, View, StatusBar, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import {styleDetail} from '../styles/detailStyle'

export function ProductDetail({route}) {
  const {detail} = route.params;

  const alerta = ()=>{
    Alert.alert("Success", `Haz añadido ${detail.nombre} al carrito`)
  }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
        <Image source={{ uri: detail.imagen }} style={styleDetail.styleImage} />
        <View style={styleDetail.cardContainer}>
        <Text style={styleDetail.titleStyle}> {detail.nombre} </Text>

        <View style={styleDetail.containerPrice} >
          <View style={styleDetail.containerAmount}>
            <TouchableOpacity>
            <Text style={styleDetail.textAmount}>-</Text>
            </TouchableOpacity>
            <Text >1</Text>
            <TouchableOpacity>
            <Text style={styleDetail.textAmount}>+</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styleDetail.textPrice}>{detail.precio}$</Text>
          </View>
        </View>

        <Text style={styleDetail.textTag}>{detail.etiqueta}</Text>
        <Text style={styleDetail.textDescription}>{detail.descripcion}</Text>

        <View style={styleDetail.containerButton}>
        <TouchableOpacity style={styleDetail.cartButton} onPress={()=>alerta()}>
          <Text style={styleDetail.textButton}>Add To Cart</Text>
        </TouchableOpacity>
        </View>
        </View>
      

      </SafeAreaView>
    )
}

export default ProductDetail
