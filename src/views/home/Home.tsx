import React from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  ToastAndroid,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack'
import { rootstackParamList } from "../../../App";

export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<rootstackParamList>>();

  return (
    //Se comporta como si fuera una columna si no le damos orientacion
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chef.jpg")}
        style={styles.ImageBackground}
      />

      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/logo.png")} style={styles.logoImage} />

        <Text style={styles.logoText}>2Bite</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/email.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Correo Electronico"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/password.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="ENTRAR"
            onPress={() => ToastAndroid.show("Hola", ToastAndroid.SHORT)}
          />
        </View>

        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

//HOT RELOAD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  //estilos de la imagen de fondo
  ImageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },

  //estilos del form de login
  form: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },

  formText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },

  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },

  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    marginLeft: 15,
  },

  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  formRegisterText: {
    fontStyle: "italic",
    color: "orange",
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    fontWeight: "bold",
    marginLeft: 10,
  },

  //estilos del logo
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "15%",
  },

  logoImage: {
    width: 100,
    height: 100,
  },

  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
  },
});
