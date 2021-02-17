import React from 'react';
import { Text, View, Button} from 'react-native';

export default function Profile(props)
{
    return(
        <View>
            <Text>Esse é o componente Profile</Text>
            <Button title="Ir para Login" onPress ={()=>props.navigation.navigate('Login')} />
            <Button title="Ir para Login" onPress ={()=>props.navigation.navigate('Login')} />
        </View>
        
    );
}