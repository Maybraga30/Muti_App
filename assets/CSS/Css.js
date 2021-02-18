import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textPage:{
        backgroundColor:'orange',
        padding: 20
    },
    darkbg: {
        backgroundColor: '#fff',
    },
    login__msg:{
        fontWeight:"bold",
        fontSize: 18,
        color: "red",
        marginTop: 5,
        marginBottom: 15,
    },
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 15,
        paddingLeft: 10,
    },
    login__button:{
        padding: 10,
        backgroundColor: "#5867F0",
        alignSelf:"center",
        borderRadius: 5,
        width: 280
    },
    login__button2:{
        padding: 10,
        backgroundColor: "#fff",
        alignSelf:"center",
        borderRadius: 5,
        width: 280
    },
    login__buttonText:{
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
        alignSelf: 'center'
    },
    login__buttonText2:{
        fontWeight: "bold",
        fontSize: 16,
        color: "#5867F0",
        alignSelf: 'center'
    },
    login__logomarca:{
        marginBottom: 10
    },
    text_footer:{
        color: '#05375a',
        fontSize: 16,
        marginBottom: 3
    },
    action:{
        borderBottomWidth:1,
        borderBottomColor: '#f2f2f2',
        flexDirection: 'row',
        marginTop: 6
    },
   
});

export {styles};