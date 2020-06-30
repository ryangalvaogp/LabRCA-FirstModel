
import * as React from 'react';
import Icone from 'react-native-vector-icons/Feather'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import logoImg from '../../assets/img/logo.png'
import {AMB} from '../../../params'
import { useNavigation } from '@react-navigation/native'
//import Icon from 'react-native-vector-icons/FontAwesome'


export function Home() {
  const imgp = Image.prefetch('https://www.labnetwork.com.br/wordpress/wp-content/uploads/2019/10/bioMerieux2.jpg')
  const navigation = useNavigation();
  function navigateToEventos() {
    navigation.navigate('Eventos')

  }
  function navigateToProjetos() {
    navigation.navigate('Projetos')

  }
  function navigateToContatos() {
    navigation.navigate('Contatos')

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <View style={styles.s}>
          <Text style={styles.headerText}><Text style={styles.headerTextBold}>Instituto Federal do Pará Campus Paragominas</Text>

          </Text>

        </View>


      </View>

      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyTitle}>Laboratório de Robótica e Computação Aplicada </Text>
        </View>

        <View style={styles.projetos}>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={navigateToEventos}>
            <Image source={imgp}></Image>
            <Text style={styles.detailsButtonText}>Eventos</Text>
            <Icone name="arrow-right" size={16} color={AMB.colorDefault} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={navigateToProjetos}>
            <Text style={styles.detailsButtonText}>Projetos</Text>
            <Icone name="arrow-right" size={16} color={AMB.colorDefault} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={navigateToContatos}>
            <Text style={styles.detailsButtonText}>Contatos</Text>
            <Icone name="arrow-right" size={16} color={AMB.colorDefault} />
          </TouchableOpacity>

        </View>


      </View>


    </View>);
}

