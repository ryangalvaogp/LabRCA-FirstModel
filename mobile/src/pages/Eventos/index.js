
import * as React from 'react';
import Icone from 'react-native-vector-icons/Feather'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import logoImg from '../../assets/img/logo.png'
import {AMB} from '../../../params'
import { useNavigation } from '@react-navigation/native'
//import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../../services/api'
import moment from 'moment'


export function Eventos() {

  const [eventos, setEventos] = React.useState('');
  const [loading, setLoading] = React.useState(false)
  const [total, setTotal] = React.useState(0);
  const [page, setPage]= React.useState(1)


  async function loadEventos(){

    if(loading){
      return;
    }
    if(total >0 && eventos.length === total){
      return;
    }

    setLoading(true)

    const response = await api.get('eventos');
    setEventos(response.data)
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }
  React.useEffect(()=>{
    loadEventos()
  }, [])


  const navigation = useNavigation();
  function navigateToDetail(eventos) {
    navigation.navigate('detailEventos', {eventos})

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}> Total de <Text style={styles.headerTextBold}>{eventos.length} </Text>Eventos</Text>
      </View>

      <View style={styles.body}>
      <View style={styles.bodyHeader}>
        <Text style={styles.bodyTitle}>Laboratório de Robótica e Computação Aplicada </Text>
        <Text style={styles.title}>Eventos</Text>
      </View>
        


        <FlatList
          style={styles.eventosList}
          data={eventos}
          keyExtractor={eventos => String(eventos.id)}
          onEndReached={loadEventos}
          onEndReachedThreshold={0.2}
          showsVerticalScrollIndicator={false}
          renderItem={({item: eventos}) => (
            <View style={styles.eventos}>
              <Text style={styles.eventosTitulo}>Título:  <Text style={styles.dados}>{eventos.Titulo}</Text> </Text>
             
              
              <Text style={styles.eventosDC}>Data:  <Text style={styles.dados}>{moment(eventos.Data_do_evento).format('DD/MM/YYYY')}</Text> </Text>
              <Text style={styles.eventosDescricao}>Hora:  <Text style={styles.dados}>{eventos.Hora_do_evento}</Text></Text>
              <Text style={styles.eventosDC}>Local:  <Text style={styles.dados}>{eventos.Local_do_evento}</Text></Text>

              <Text style={styles.eventosResponsavel}>Responsável:  <Text style={styles.dados}>{eventos.name}</Text></Text>
              <Text style={styles.eventosDescricao}>Descrição:  <Text style={styles.dados}>{eventos.Descricao}</Text></Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={()=>navigateToDetail(eventos)}>
                <Text style={styles.detailsButtonText}> Ver mais</Text>
                <Icone name="arrow-right" size={16} color={AMB.colorDefault}></Icone>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>);
}

