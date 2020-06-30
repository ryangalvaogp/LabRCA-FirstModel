
import * as React from 'react';
import Icone from 'react-native-vector-icons/Feather'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import logoImg from '../../assets/img/logo.png'
import { useNavigation } from '@react-navigation/native'
import { AMB } from '../../../params'
//import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../../services/api'
import Moment from 'moment'

export function Projetos() {
  const [projetos, setProjetos] = React.useState('');
  const [loading, setLoading] = React.useState(false)
  const [total, setTotal] = React.useState(0)
  const [page, setPage] = React.useState(1)
  const navigation = useNavigation();

  async function loadProjetos() {

    if (loading) {
      return;
    }
    if (total > 0 && projetos.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('projetos', {
      params: { page }
    });
    setProjetos(response.data)
    setTotal(response.headers['x-total-count'])
    setPage(page + 1);
    setLoading(false);

  }
  React.useEffect(() => {
    loadProjetos()
  }, [])



  function navigateToDetail(projetos) {
    navigation.navigate('detailProjetos', { projetos })



  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}> Total de <Text style={styles.headerTextBold}>{total} </Text>Projetos</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyTitle}>Laboratório de Robótica e Computação Aplicada </Text>
          <Text style={styles.title}>Projetos</Text>
        </View>



        <FlatList
          style={styles.projetosList}
          data={projetos}
          keyExtractor={projetos => String(projetos.id)}
          onEndReached={loadProjetos}
          onEndReachedThreshold={0.2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: projetos }) => (
            <View style={styles.projetos}>
              <Text style={styles.projetosTitulo}>Título:  <Text style={styles.dados}>{projetos.Titulo}</Text>  </Text>

              <Text style={styles.projetosDC}>Data de Criação:  <Text style={styles.dados}>{Moment(projetos.Data_de_criacao).format('DD/MM/YYYY')}</Text> </Text>
              <Text style={styles.projetosDescricao}>Descrição:  <Text style={styles.dados}>{projetos.Descricao}</Text></Text>
              <Text style={styles.projetosResponsavel}>Responsável:  <Text style={styles.dados}>{projetos.name}</Text> </Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(projetos)}>
                <Text style={styles.detailsButtonText}> Ver mais</Text>
                <Icone name="arrow-right" size={16} color={AMB.colorDefault}></Icone>
              </TouchableOpacity>
            </View>
          )}
        />







      </View>


    </View>);
}

