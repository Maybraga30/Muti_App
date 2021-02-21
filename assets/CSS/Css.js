import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex1: {
        flex: 1,
    },
    container2: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingTop: 25
    },
    container4: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 25
    },
    container5: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 25,
        marginTop: 20,
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
        width: "80%",

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
        width: 280,
        marginTop: 20,
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
        marginBottom: 5
    },
    login__logomarca2:{
        marginTop: 15,

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
   drawerContent: {
       flex: 1
   },
   userInfoSction: {
       paddingLeft: 20,
   },
   titleDrawer: {
       fontSize: 16,
       marginTop: 3,
       fontWeight: 'bold',
   } ,
   caption: {
       fontSize: 14,
       lineHeight: 14,
   },
   row: {
       marginTop: 20,
       flexDirection: 'row',
       alignItems: 'center'
   },
   section: {
       flexDirection: 'row',
       alignItems: 'center',
       marginRight: 15,
   },
   paragraph: {
       fontWeight: 'bold',
       marginRight: 3,
   },
   drawerSection: {
       marginTop: 15,
   },
   bottomDrawerSection: {
       marginBottom: 15,
       borderTopColor: '#f4f4f4',
       borderTopWidth: 1,
   },
   preference: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingVertical: 12,
       paddingHorizontal: 16,
   },
   sobre_img: {
       marginBottom: 10,
   },
   sobre_img1: {
    marginBottom: 10,
    
},
   text_about:{
        fontSize: 16,
        padding: 10,
        backgroundColor: "#DCDCDC",
        alignSelf: "center",
        textAlign: 'justify',
        borderRadius: 5,
        width: 340
   },
   text_about2:{
    fontSize: 16,
    padding: 10,
    backgroundColor: "#5867F0",
    color: '#fff',
    alignSelf: "center",
    textAlign: 'center',
    borderRadius: 5,
    width: 340
},
   text_lixo: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "#DCDCDC",
    alignItems: 'center',
    borderRadius: 5,
    width: 300,
    marginBottom: 25
   },
   img_lixo:{
       alignItems: 'center',
   },
   img_home:{
       width: 7,
       height: 20,
   },
   textStrong: {
       fontSize: 16,
    fontWeight: 'bold',
   },
   textStrong2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
   },
   
   home_view: {
       borderColor: 10,
   }
});

export {styles};