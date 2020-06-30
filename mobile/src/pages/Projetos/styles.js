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
    dados:{
        textAlign:'right',
        fontWeight:'normal'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerText:{
            fontSize:15,
            color:'#737368'
            },
    headerTextBold:{
        fontWeight:'bold'
    },
    bodyHeader:{
        paddingTop:30
    },
    bodyTitle:{
        fontSize:18.18,
        color:'#737368',
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
    projetos:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16
    },
    projetosTitulo:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginBottom:6
    },
    projetosDC:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginBottom:6
    },
    projetosDescricao:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginBottom:6
    },
    projetosResponsavel:{
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
    },
    projetosList:{
    }

})