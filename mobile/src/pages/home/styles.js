import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import {AMB} from '../../../params'
export default StyleSheet.create({
    container:{ 
    flex: 1,
    paddingHorizontal:24,
    paddingTop:  Constants.statusBarHeight + 20,
    
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    s:{
        backgroundColor:'transparent' ,
    },
    bodyHeader:{
        paddingTop:30
    }
    ,
    bodyTitle:{
        fontSize:18.18,
        color:'#737368',
        fontWeight:'bold'
    },
    headerText:{
        paddingRight:150,
            marginRight:69,
            fontSize:15,
            color:'#737368'
            },
    headerTextBold:{
        
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color:'#13131a'
    },
    detailsButton:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginRight:16,
        alignItems:"center",
        
    },
    detailsButtonText:{
        color:AMB.colorDefault,
        fontSize: 15,
        fontWeight:'bold'
    },
    projetos:{
        flexDirection:'row',
        padding:5,
        
    }

})