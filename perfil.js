import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;

  const getUserDetails = (user) => {
    
    if (user === 'myself') {
      return {
        name: 'Tu Nombre',
        birthday: 'Tu Fecha de Nacimiento',
        hobbies: 'Tus Pasatiempos',
        
      };
    } else if (user === 'admirable_person') {
      return {
        name: 'Nombre de la Persona Admirada',
        birthday: 'Fecha de Nacimiento de la Persona Admirada',
        hobbies: 'Pasatiempos de la Persona Admirada',
        
      };
    }
  };

  const userDetails = getUserDetails(user);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: userDetails.photo }} 
        style={styles.photo}
      />
      <Text>{userDetails.name}</Text>
      <Text>{userDetails.birthday}</Text>
      <Text>{userDetails.hobbies}</Text>
      <Button title="Volver al Menú Inicial" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
});

export default ProfileScreen;
