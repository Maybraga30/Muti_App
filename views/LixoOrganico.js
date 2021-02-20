import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default function LixoOrganico(props)
{
    return(

        <ScrollView>
        <View style={styles.container3}>

        <View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/equipe.png')} /></TouchableOpacity>
         </View>
         <View>
             <Text style={styles.text_about}>
             Lixos Orgânicos - é todo resto de alimento, como cascas de legumes,
frutas, raízes, vegetais e folhas, entre outros tipos de resíduos de origem
biológica e separá-los em sacos biodegradáveis. Eles são aproveitados
como adubo.
4- Amassar o papel para jogar no lixo? Não! Evite dobrar ou amassar o
papel antes de jogar no lixo: mantê-lo inteiro é sempre melhor. No
máximo, rasgue as folhas. É fácil entender: quanto mais intacto o papel,
mais dinheiro ele vale, porque as fibras (celulose) são mantidas,
aumentando o número de vezes que ele pode ser reciclado.

             </Text>
         </View>
         </View>
         </ScrollView>
        
        
    );
}
