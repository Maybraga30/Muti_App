import React from 'react';
import { Text, View, Button} from 'react-native';


export default function Home(props) {
        
    return (
        <View>
            <Text>Esse é o componente Home</Text>
            
            <Button title="Ir para About Us" onPress ={()=>props.navigation.navigate('AboutUs')} />
            <Button title="Ir para Login" onPress ={()=>props.navigation.navigate('Login')} />
            <Button title="Ir para SignUp" onPress ={()=>props.navigation.navigate('SignUp')} />
        </View>
        
    );
}