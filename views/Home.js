import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default function Home(props) {
        
    return (

            <ScrollView>
    
            <View style={styles.container3}>
            <TouchableOpacity style={styles.sobre_img}><Image source={require('../assets/img/naturezaLixo.jpg')} />
            </TouchableOpacity>
             </View>
             <View>
                 <Text style={styles.text_about}>
                 Se junte aos seus vizinhos
                 Quando trabalhamos em conjunto com a nossa comunidade 
                 conseguimos bons resultados, cadastre-se na Mutiraê 
                 e mobilize seus vizinhos para realizar ações em prol de todos.
                 </Text>
             </View>
             </ScrollView>
            
            
        );
    }