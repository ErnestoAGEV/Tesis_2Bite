import React from "react";
import { Button, Text, View } from "react-native";
import useViewModel from './ViewModel';
// @ts-ignore
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from "../../../../../App";


interface Props extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'>{};
// @ts-ignore
export const ProfileInfoScreen = ({navigation, route}: Props) => {

  const { removeSession } = useViewModel();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
      onPress={() => {
        removeSession();
        navigation.navigate('HomeScreen');
      }}
      title='Cerrar Sesion'
      />
    </View>
  );
};
