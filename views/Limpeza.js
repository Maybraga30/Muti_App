import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


export default function Limpeza(props)
{
    return(

        <ScrollView>
        <View style={styles.container4}>

        <View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/limpeza.png')} /></TouchableOpacity>
         </View>
         <View>
             <Text style={styles.text_about}> Para evitar o mau cheiro e a proliferação de fungos e 
             bactérias, além de atrair insetos pela decomposição do lixo orgânico e assim contaminá-los,
             podendo até mesmo inviabilizar o processo de reciclagem caixas fica com volume
             muito reduzido, mais fácil de ensacar bem e de ser levado para fora de casa
             com pouco esforço, facilitando o percurso de distâncias maiores até um local
             adequado.</Text></View>
             <View><Text style={styles.text_about}>
             O resíduo inorgânico limpo pode ser compactado dentro de casa, sem risco
             de ferimento e contaminação, amassando-se latas e caixas. Pode ser mantido
             em casa por mais tempo, sem atrair insetos, até que seja mais conveniente 
             para alguém da família levá-lo. E ainda pode ser trocado por dinheiro ou
             benefícios em pontos de recolhimento de lixo reciclável.</Text>
             
             <View><Text style={styles.text_about}>Isso porque eles possuem substâncias tóxicas e devem ser
             encaminhados para um aterro sanitário próprio. Possuem metais
             pesados (como o zinco) em sua composição e, quando entram em
             contato direto com o solo, podem contaminar a terra e os lençóis
             freáticos.
             </Text>
             </View>
             </View>
             </View>

             <View>
                 <Text style={styles.textStrong2}>Como higienizar o lixo:</Text>
                 <Text style={styles.text_about}>
                 Retire o máximo de resíduo "sem utilizar água, mas caso não haja opção,
                 faça uso de água reaproveitada.</Text></View>
                 <View><Text style={styles.text_about}>
                    ·  Potes de iogurte, latas de molho e caixas de lasanha congelada – são lixos
                 inorgânicos e devemos limpar as embalagens como se fosse reutilizá-las.</Text></View>
                 <View><Text style={styles.text_about}>· Garrafas Pet, de vidro e embalagens longa vida - uma simples passada de
                 água pode ser suficiente.</Text></View>
                 <View><Text style={styles.text_about}> · Embalagens feitas com papel como as caixas de pizza, por exemplo,
                 devem ser separadas. As partes que estiverem limpas devem ser direcionadas
                 à reciclagem, as que estiverem sujas não. Lembre-se que guardanapos e papel
                 higiênico, ainda que limpos, não são recicláveis;</Text></View>
                 <View>
                 <Text style={styles.text_about}>· Não é necessário lavar todas as embalagens direcionadas ao descarte.
                 Alguns exemplos são as embalagens de grãos (arroz, feijão, etc.) e os
                 materiais de limpeza domésticos.
                 </Text>
                 </View>
            <View>
             </View>
         </ScrollView>
        
        
    );
}