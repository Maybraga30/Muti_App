import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default function LixoMascara(props)
{
    return(

        <ScrollView>
        <View style={styles.container4}>

        <View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/facial.png')} /></TouchableOpacity>
         </View>
         <View>
             <Text style={styles.text_about}>
             É preciso colocar uma ou várias máscaras juntas
             dentro de dois saquinhos plásticos (um dentro do outro), amarrar bem forte,
             sinalizar que ali contém máscaras, se possível, e jogar no lixo comum, o
             orgânico.</Text>
             </View>
                 
             </View>
         </ScrollView>
        
        
    );
}