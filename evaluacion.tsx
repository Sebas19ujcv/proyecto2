import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const RatingComponent = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
        <TouchableOpacity key={value} onPress={() => handleRating(value)}>
          {value <= rating ? (
            value % 1 === 0 ? (
              <Image
                source={{ uri: 'https://www.svgrepo.com/svg/453413/star-alt' }}
                style={{ width: 30, height: 30 }}
              />
            ) : (
              <Image
                source={{ uri: 'https://www.svgrepo.com/svg/453415/star-half' }}
                style={{ width: 30, height: 30 }}
              />
            )
          ) : (
            <Image
              source={{ uri: 'https://www.svgrepo.com/svg/304561/star-outlined' }}
              style={{ width: 30, height: 30 }}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingComponent;
