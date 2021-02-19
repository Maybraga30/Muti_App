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
                 Somos uma equipe Somos uma equipe  Somos uma equipe 
                  Somos uma equipe  Somos uma equipe  Somos uma equipe  
                  Somos uma equipe Somos uma equipe  Somos uma equipe 
                 </Text>
             </View>
             <View >
             <TouchableOpacity style={styles.sobre_img}><Image source={require('../assets/img/naturezaLixo.jpg')} />
            </TouchableOpacity>
             </View>
             </ScrollView>
            
            
        );
    }