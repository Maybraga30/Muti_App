import React from 'react';
import { Text, View, Button, Image, ScrollView} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';

export default function DicasLixo(props)
{
    return(
        <View style={styles.container4}>

<View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/telefone.png')} /></TouchableOpacity>
         </View>
         <View>
             <Text style={styles.text_about}>
             Celulares, computadores e aparelhos de som, pilhas,
             baterias, termômetros e lâmpadas fluorescentes devem ser descartados
             em um lixo separado dos materiais orgânicos e inorgânicos.</Text>
             </View>
                 <View><Text style={styles.text_about}>Isso porque eles possuem substâncias tóxicas e devem ser
             encaminhados para um aterro sanitário próprio. Possuem metais
             pesados (como o zinco) em sua composição e, quando entram em
             contato direto com o solo, podem contaminar a terra e os lençóis freáticos.
             </Text>
             </View>
             </View>
        
        
    );
}


        
