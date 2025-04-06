import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

export const RegisterScreen = () => {
  return (
    //Se comporta como si fuera una columna si no le damos orientacion
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chef.jpg")}
        style={styles.ImageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/user_image.png")}
          style={styles.logoImage}
        />

        <Text style={styles.logoText}>SELECCIONE UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/user.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Nombres"
            keyboardType="default"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/my_user.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Apellidos"
            keyboardType="default"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/phone.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Telefono"
            keyboardType="numeric"
          />
        </View>

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

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/confirm_password.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Confirmar Contraseña"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="CONFIRMAR"
            onPress={() => ToastAndroid.show("Hola", ToastAndroid.SHORT)}
          />
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
    height: "70%",
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
    top: "5%",
    alignItems: "center",
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
  },
});
