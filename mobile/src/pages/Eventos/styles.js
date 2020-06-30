import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import {AMB} from '../../../params'
export default StyleSheet.create({
    container:{ 
    flex: 1,
    paddingHorizontal:24,
    paddingTop:  Constants.statusBarHeight + 20,
    paddingBottom: Constants.statusBarHeight+140
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    } ,
    dados:{
        textAlign:'right',
        fontWeight:'normal'
    },
    bodyTitle:{
        fontSize:18.18,
        color:'#737368',
        fontWeight:'bold'
    },
    bodyHeader:{
        paddingTop:30
    }
    ,
    headerText:{
            fontSize:15,
            color:'#737368'
            },
    headerTextBold:{
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:10,
        color:'#13131a'
    },
    description:{
        fontSize:16,
        lineHeight:24,
        color:"#737380"
    },
    eventos:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16
    },
    eventosTitulo:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginBottom:6
    },
    eventosDC:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginBottom:6
    },
    eventosDescricao:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginBottom:6
    },
    eventosResponsavel:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginBottom:10
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    detailsButtonText:{
        color:AMB.colorDefault,
        fontSize: 15,
        fontWeight:'bold'
    }

})