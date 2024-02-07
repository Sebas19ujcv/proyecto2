import React, { useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
  } from 'react-native';

const perfil_VG = () => {
    const [comentario, setcomentario] = useState('')

  return (
    <SafeAreaView>
      ContentContainerStyle={styles.svContenedor}
      <ScrollView> contentInsetAdjustmentBehavior="automatic" 
        <text style={styles.encabezado}>Sebastian castro</text>
<image style=(styles.20210613_163348) 
source={require('.imagenes/20210613_163348.jpg')}
/>
<view>
  <text> style= {styles.seccionHeader} Lugar de nacimiento:</text>
  <text> style={styles.seccioncontent} Honduras, Tegucigalpa</text>
</view>
<view>
  <text> style= {styles.seccionHeader} Fecha de nacimiento:</text>
  <text> style={styles.seccioncontent} 19 de septiembre de 1999 </text>
</view>
<view>
  <text> style= {styles.seccionHeader} Pasatiempos:</text>
  <text> style={styles.seccioncontent} Jugar, descansar, salir, correr </text>
</view>

<SafeAreaView>
      ContentContainerStyle={styles.svContenedor}
      <ScrollView> contentInsetAdjustmentBehavior="automatic" 
        <text style={styles.encabezado}>Sebastian castro</text>
<image style=(styles.20210613_163348) 
source={require('.imagenes/MV5BYTViMTA1MzEtODgyZi00YmM2LTgzMjAtYTgxN2JiYjZlNzc4XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg')}
/>
<view>
  <text> style= {styles.seccionHeader} Lugar de nacimiento:</text>
  <text> style={styles.seccioncontent} Honduras, Tegucigalpa</text>
</view>
<view>
  <text> style= {styles.seccionHeader} Fecha de nacimiento:</text>
  <text> style={styles.seccioncontent} 19 de septiembre de 1999 </text>
</view>
<view>
  <text> style= {styles.seccionHeader} Pasatiempos:</text>
  <text> style={styles.seccioncontent} Jugar, descansar, salir, correr </text>
</view>

</ScrollView>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  encabezado: {
 fontSize: 36,
 fontWeight: "bold",
 color: "00000"
  },

  svContenedor: {
alignItems: 'center'
 },
 20210613_163348: {
  width:200,
  height:220,

 },
 seccion: {
  flexDirection: 'row'
 },
 seccionHeader: {
  fontSize: 24,
fontWeight: 'bold'
 },

});

export default perfil_VG;
