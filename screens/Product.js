import React from 'react'
import { Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { productStyle } from '../styles/productStyle'
import { etiquetas } from '../Apis/etiquetas'

export function Product() {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={productStyle.boxTag}>
            <Text style={productStyle.textTag} >{item.title}</Text>
        </TouchableOpacity>
      );

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}> 
        <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
        <View style={productStyle.ContainerTags}>
           
            <FlatList 
                data={etiquetas}
                keyExtractor={(item)=>item.id}
                renderItem={renderItem}
                horizontal
            />
        </View>

        <View style={productStyle.containerList}>

        </View>
      </SafeAreaView>
    )
}

export default Product
