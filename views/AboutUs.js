import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import App from '../App';
import { Paragraph } from 'react-native-paper';

export default function AboutUs(props)
{
    return(

        <View style={styles.container4}>

        <View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/equipe.png')} /></TouchableOpacity>
         </View>
         <View>
             <Text style={styles.text_about}>
                A Mutiraê tem como principal objetivo melhorar problemas da comunidade através 
                da união entre vizinhos. </Text>
                <Text style={styles.text_about}>Nós sabemos que diversos bairros localizados nas regiões periféricas 
                sofrem pela omissão do Estado, e cada bairro é impactado por esta omissão de diferentes maneiras, 
                com cada região tendo suas próprias necessidades e particularidades.</Text>
                <Text style={styles.text_about}> Mutiraê foi desenvolvida para 
                que essas necessidades pudessem ser supridas, definitivamente, parcialmente ou temporariamente 
                por aqueles que mais entendem estas necessidades através da mobilização e organização. 

             </Text>
         </View>
         </View>
        
        
    );
}