import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  ToastAndroid,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RoundedButton } from "../../../Presentation/components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { rootstackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from './Styles';

export const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();

  const navigation = useNavigation<StackNavigationProp<rootstackParamList>>();

  return (
    //Se comporta como si fuera una columna si no le damos orientacion
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.ImageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logoImage}
        />

        <Text style={styles.logoText}>2Bite</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>

        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Correo electronico"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}
        />

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          keyboardType="default"
          secureTextEntry={true}
          property="password"
          onChangeText={onChange}
          value={password}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="ENTRAR"
            onPress={() => {
              console.log("Email:" + email);
              console.log("Password:" + password);
            }}
          />
        </View>

        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
