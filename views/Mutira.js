import React from 'react';
import { Text, View, Button} from 'react-native';

export default function Mutira(props)
{
    console.log(props);
    return(
        <View>
            <Text>Esse é o componente Home</Text>
            <Button title="Ir para Login" onPress ={()=>props.navigation.navigate('Login')} />
            <Button title="Ir para Login" onPress ={()=>props.navigation.navigate('Login')} />
        </View>
        
    );
}