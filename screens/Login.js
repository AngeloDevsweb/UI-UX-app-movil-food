import React from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { loginStyle } from "../styles/loginStyle";

export function Login(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar translucent backgroundColor={"rgba(0,0,0,0.3)"} />
      <View style={loginStyle.container}>
        <Image
          style={loginStyle.imagenPerfil}
          source={require("../images/hamburguesa.jpg")}
        />

        <View style={{ marginTop: 30 }}>
          <View style={loginStyle.cajaTexto}>
            <TextInput style={{ paddingHorizontal: 20 }} placeholder="Correo" />
          </View>
          <View style={loginStyle.cajaTexto}>
            <TextInput
              style={{ paddingHorizontal: 20 }}
              placeholder="Contraseña"
            />
          </View>

          <View style={loginStyle.containerBoton}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("Product")}} style={loginStyle.estiloBoton}>
              <Text style={loginStyle.TextoBoton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
