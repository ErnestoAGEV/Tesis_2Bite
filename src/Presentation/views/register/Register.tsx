import React ,{useEffect} from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { RoundedButton } from "../../../Presentation/components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";

export const RegisterScreen = () => {
  const {
    name,
    lastname,
    phone,
    email,
    password,
    confirmPassword,
    errorMessage,
    onChange,
    register,
  } = useViewModel();

  useEffect(() => {
    if(errorMessage !== ''){
    ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])
  

  return (
    //Se comporta como si fuera una columna si no le damos orientacion
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.ImageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/user_image.png")}
          style={styles.logoImage}
        />

        <Text style={styles.logoText}>SELECCIONE UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        
        <ScrollView>
        
        <Text style={styles.formText}>REGISTRARSE</Text>

        <CustomTextInput
          image={require("../../../../assets/user.png")}
          placeholder="Nombres"
          keyboardType="default"
          property="name"
          onChangeText={onChange}
          value={name}
        />

        <CustomTextInput
          image={require("../../../../assets/my_user.png")}
          placeholder="Apellidos"
          keyboardType="default"
          property="lastname"
          onChangeText={onChange}
          value={lastname}
        />

        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Correo Electronico"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}
        />

        <CustomTextInput
          image={require("../../../../assets/phone.png")}
          placeholder="Telefono"
          keyboardType="numeric"
          property="phone"
          onChangeText={onChange}
          value={phone}
        />

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          keyboardType="default"
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <CustomTextInput
          image={require("../../../../assets/confirm_password.png")}
          placeholder="Confirmar Contraseña"
          keyboardType="default"
          property="confirmPassword"
          onChangeText={onChange}
          value={confirmPassword}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="CONFIRMAR" onPress={() => register()} />
        </View>

        </ScrollView>

      </View>
    </View>
  );
};



