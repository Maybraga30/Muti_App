import React from 'react';
import { Text, View, Button, Image, ScrollView} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';

export default function GuiaLixo(props)
{
    return(
        
        <ScrollView>
            <TouchableOpacity style={styles.img_lixo} onPress ={()=>props.navigation.navigate('Home')}>
                <Image source={require('../assets/img/lixo.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
             Como começar. 
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress ={()=>props.navigation.navigate('Home')}>
             <Image source={require('../assets/img/organico.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
            Lixo Orgânico. 
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress ={()=>props.navigation.navigate('Home')}>
             <Image source={require('../assets/img/telefone.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
             Lixo Eletrônico. 
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress ={()=>props.navigation.navigate('Home')}>
             <Image source={require('../assets/img/remedio.png')} />
        
            <View style={styles.text_lixo}>
             <Text>
             Como começar. 
             </Text>
         </View>
         </TouchableOpacity> 
         <TouchableOpacity style={styles.img_lixo} onPress ={()=>props.navigation.navigate('Home')}>
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
         