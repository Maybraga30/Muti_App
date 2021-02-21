import React from 'react';
import { Text, View, Button, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../assets/CSS/Css';
/* import { TouchableOpacity } from 'react-native-gesture-handler'; */

const GuiaLixo = ({navigation}) =>  {
  
    const navHome = (screen) => {
      navigation.navigate(screen)
  }
    return(
        
        <ScrollView>
            <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Dicas') }>
                <Image source={require('../assets/img/lixeira.png')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
             Como começar
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Org') }>
             <Image source={require('../assets/img/organico.png')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
            Lixo Orgânico
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Elet') }>
             <Image source={require('../assets/img/telefone.png')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
             Lixo Eletrônico
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Rem') }>
             <Image source={require('../assets/img/remedio.png')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
             Medicamentos e Embalagens
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Vidro') }>
             <Image source={require('../assets/img/vidro.png')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
                Descarte de Vidro
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Masc') }>
             <Image source={require('../assets/img/facial.png')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
             Descarte de Máscaras
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Limp') }>
             <Image source={require('../assets/img/limpeza.png')} />
        
            <View style={styles.text_lixo}>
             <Text style={styles.textStrong}>
             Higienização do Lixo 
             </Text>
         </View>
         </TouchableOpacity> 
         </ScrollView>
         );
    }
    export default GuiaLixo;