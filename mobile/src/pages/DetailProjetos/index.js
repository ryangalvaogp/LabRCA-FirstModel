
import * as React from 'react';
import Icone from 'react-native-vector-icons/Feather'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import {AMB} from '../../../params'
import logoImg from '../../assets/img/logo.png'
import { useNavigation, useRoute } from '@react-navigation/native'
import Moment from 'moment'

export function detailProjetos() {
  const navigation = useNavigation();
  const route = useRoute();
  const projetos = route.params.projetos
  function navigateToDetail() {
    navigation.navigate('Projetos')

  }
  return (<View style={styles.container}>
    <View style={styles.header}>
      <Image source={logoImg} />

    </View>

    <View style={styles.body}>
      <Text style={styles.title}>{projetos.Titulo}</Text>

      <View style={styles.projetos}>



        <Text style={styles.projetosDC}>Data:  <Text style={styles.dados}>{Moment(projetos.Data_de_criacao).format('DD/MM/YYYY')}</Text></Text>



        <Text style={styles.projetosResponsavel}>Responsável:  <Text style={styles.dados}>{projetos.Responsavel_id}</Text></Text>
        <Text style={styles.projetosDescricao}>Descrição:  <Text style={styles.dados}>{projetos.Descricao}</Text></Text>


      </View>






      <TouchableOpacity
        style={styles.detailsButton}
        onPress={navigateToDetail}>
        <Text style={styles.detailsButtonText}> Voltar aos Eventos</Text>
        <Icone name="arrow-right" size={16} color={AMB.colorDefault}></Icone>
      </TouchableOpacity>



    </View>




  </View>


  );
}

