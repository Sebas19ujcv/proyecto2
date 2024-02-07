import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Mi Perfil"
        onPress={() => navigation.navigate('Profile', { user: 'myself' })}
      />
      <Button
        title="Persona Admirada"
        onPress={() => navigation.navigate('Profile', { user: 'admirable_person' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
