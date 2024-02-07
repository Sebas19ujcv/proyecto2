import React from 'react';
import { View, Text, Image } from 'react-native';
import RatingComponent from './RatingComponent';

const ProfileScreen = ({ route }) => {
  const { name, birthday, hobbies, photo } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: photo }} style={{ width: 200, height: 200, borderRadius: 100 }} />
      <Text>{name}</Text>
      <Text>{birthday}</Text>
      <Text>{hobbies}</Text>
      <RatingComponent />
    </View>
  );
};

export default ProfileScreen;
