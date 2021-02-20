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
            <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('') }>
                <Image source={require('../assets/img/lixo.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
             Como começar. 
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Org') }>
             <Image source={require('../assets/img/organico.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
            Lixo Orgânico. 
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Elet') }>
             <Image source={require('../assets/img/telefone.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
             Lixo Eletrônico. 
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Rem') }>
             <Image source={require('../assets/img/remedio.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
             Lixo Remédio. 
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress={() => navHome('Vidro') }>
             <Image source={require('../assets/img/vidro-quebrado.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
             Medicamentos e Embalagens. 
             </Text>
         </View>
         </TouchableOpacity> 
         </ScrollView>
         );
    }
    export default GuiaLixo;