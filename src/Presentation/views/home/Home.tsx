import React, { useEffect, useState } from "react";
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
// @ts-ignore
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../App';
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'>{};

// @ts-ignore
export const HomeScreen = ({navigation, route}: Props) => {
  const { email, password,errorMessage, onChange, login, user } = useViewModel();


  useEffect(() => {
   if(errorMessage !== '') {
    ToastAndroid.show(errorMessage, ToastAndroid.LONG);
   }
  }, [errorMessage])

  useEffect(() => {
    
    if(user?.id !== null && user?.id !== undefined) {
      navigation.replace('ProfileInfoScreen');
    }

  }, [user])
  
  

  return (
    //Se comporta como si fuera una columna si no le damos orientacion
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.ImageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/2Bite_1.png")}
          style={styles.logoImage}
        />

        <Text style={styles.logoText}>BIENVENIDO</Text>
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
            text="LOGIN"
            onPress={() =>login() }
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
