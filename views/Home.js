import React from 'react';
import { Text, View, Button, Image, ProgressBarAndroidComponent} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default function Home(props) {
        
    return (

            <ScrollView>
    
            <View style={styles.container4}>
            <TouchableOpacity style={styles.sobre_img}><Image source={require('../assets/img/vol1.png')} />
            </TouchableOpacity>
             </View>
             <View style={styles.home_view}>
                 <Text style={styles.text_about2}><Text style={styles.textStrong}>
                 Se junte aos seus vizinhos</Text></Text>

                 <View><Text style={styles.text_about}>Quando trabalhamos em conjunto com a nossa comunidade 
                 conseguimos bons resultados, cadastre-se na Mutiraê 
                 e mobilize seus vizinhos para realizar ações em prol de todos.
                 </Text>
                 
                 </View>
        
             </View>
             </ScrollView>
            
            
        );
    }