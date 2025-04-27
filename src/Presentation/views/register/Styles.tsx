import { StyleSheet } from "react-native";


const RegisterStyles = StyleSheet.create({
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

  export default RegisterStyles;