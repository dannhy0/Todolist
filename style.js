import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
    },
    containerPage:{
        width: "100%",
        height: "100%",
        backgroundColor: '#f5f5f5',
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    },
    container2:{
        width :"85%",
        height: "60%",
        display: "flex",
        alignItems:"center",
    },
    containerTitle1:{
        width: "100%",
        height: 80,

        display: "flex",
        justifyContent:"center",
        alignItems:"center",
    }
    ,
    containerTitle:{
        width: "50%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        borderRadius: 10

    },
    containerTextTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#d5d6f5"
    },
    containerTodoList:{
        width: "100%",
        height: "100%",
        marginTop: 50,
        backgroundColor: 'white', padding: 15
    },
    input1:{
        width: "55%",
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        borderRadius: 10

    },
    containerInput: {
        width: "100%",
        height: 70,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    newList:{
        width: "100%",
        height: "auto",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    newListTodo:{
        width: "100%",
        height: 50,
        backgroundColor:'white',
        display: "flex",
        flexDirection: 'row',
        marginTop: 20
    },
    newListTodoLeft:{
        width: "60%",
        height: "100%",
        backgroundColor:'white',
        display: 'flex',
        alignItems:"center",
        justifyContent:"center"
    },
    newListTodoLeftText: {
        fontSize: 16
    },
    newListTodoRight:{
        width: "40%",
        height: "100%",
        backgroundColor:'white',
        display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
    newButtonoRight: {
        width: '45%',
        height: '100%',
        display: 'flex', 
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: "F5F5F5",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    newButtonoLeft: {
        width: '45%',
        height: '100%',
        display: 'flex', 
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: "F5F5F5",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    Submit: {
        width: "40%", 
        height: 50,
        backgroundColor: 'white',
        display: 'flex', 
        alignItems: "center",
        justifyContent: 'center',
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 10
    },
    TextSubmit: {
        fontSize: 17, fontWeight: 'bold'
    }
    

});
