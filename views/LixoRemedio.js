import React from 'react';
import { Text, View, Button, Image, ScrollView} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';

export default function LixoRemedio(props)
{
    return(
        <View style={styles.container4}>

        <View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/remedio.png')} /></TouchableOpacity>
         </View>

         <View>
         <Text style={styles.text_about}>
             <Text style={styles.textStrong}>São itens difíceis de reciclar - </Text>Cartela e frasco de remédio
             As caixas podem ser recicladas normalmente, mas as cartelas em que
             ficam os comprimidos, não. Elas, assim como tubos e vidros de remédio,
             podem contar restos de compostos químicos que contaminam o meio
             ambiente. Por isso, é preciso levá-las a pontos de coleta – muitas
             farmácias e postos de saúde têm.
             </Text>
             </View>
         </View>
        
        
    );
}