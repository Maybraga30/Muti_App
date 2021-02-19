import React from 'react';
import { Text, View, Button, Image, ScrollView} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';

export default function DicasLixo(props)
{
    return(
        <View style={styles.container3}>

        <View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/equipe.png')} /></TouchableOpacity>
         </View>
         <View>
             <Text style={styles.text_about}>
             Procedimentos a serem seguidos para realização da coleta conforme a comlurb
  ● Todo material reciclável deve ser embalado em sacos plásticos
  transparentes ou translúcidos (azul e verde) para que o Gari possa
  visualizar o seu conteúdo bem como detectar a possível presença de
  materiais orgânicos, contundentes ou perfurantes no seu interior. 
  ● Não será permitido o uso de sacos pretos.
  ● Para garantir a qualidade dos recicláveis basta uma rápida lavagem.
  Com esse pequeno gesto você garante que o reciclável limpo aumente a
  produção das atividades dos catadores
  ● O resíduo orgânico, além de representar risco à saúde dos catadores,
  contamina todo o material potencialmente reciclável, inviabilizando o seu
 aproveitamento e, consequentemente, a sua reutilização.

             </Text>
         </View>
         </View>
        
        
    );
}
