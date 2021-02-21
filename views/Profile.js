import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default function Profile(props) {
        
    return (

            <ScrollView>
            <View style={styles.container4}>
            <TouchableOpacity style={styles.sobre_img}><Image source={require('../assets/img/calendario.png')} />
            </TouchableOpacity>
            <View>
                 <Text style={styles.textStrong}>
                 Calendário dos Mutirões 
                 </Text>
                 </View>
                 <View style={styles.container5}>
            <TouchableOpacity style={styles.sobre_img}>
            <Image source={require('../assets/img/fala.png')} />
            </TouchableOpacity>
             <View>
                 <Text style={styles.textStrong}>
                 Fórum e chat 
                 </Text>
                 </View>
                 </View>
                 </View>
                 <View style={styles.container5}>
            <TouchableOpacity style={styles.sobre_img}>
            <Image source={require('../assets/img/bloco.png')} />
            </TouchableOpacity>
             <View>
                 <Text style={styles.textStrong}>
                 Cadastrar Mutirão
                 </Text>
                 </View>
                 </View>
             </ScrollView>
            
            
        );
    }