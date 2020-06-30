
import * as React from 'react';
import Icone from 'react-native-vector-icons/Feather'
import { Linking, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import {AMB, USER} from '../../../params'
import styles from './styles'
import logoImg from '../../assets/img/logo.png'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'



export function Contatos() {
  let phone = USER.PHONE; // Sem código do País (+55)
  let url = "www.google.com" // Sem HTTP/HTTPS
  let message = `Olá ${USER.NAME}, este é um Teste!`

  const imgp = Image.prefetch('https://www.labnetwork.com.br/wordpress/wp-content/uploads/2019/10/bioMerieux2.jpg')
  const navigation = useNavigation();
  function navigateToEventos() {
    navigation.navigate('Eventos')

  }
  function navigateToProjetos() {
    navigation.navigate('Projetos')

  }
  function navigateBack() {
    navigation.goBack()
  }
  function sendMail() {
    MailComposer.composeAsync({
      subject: "",
      recipients: ["ryan.trompetista@gmail.com"],
      body: message,
    })


  }
  function site() {
    Linking.openURL(`http://${url}`)
  }
  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=55${phone}&text=${message}`)


  }
  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <Image source={logoImg} />

        <View style={styles.s}>
          <Text style={styles.headerText}><Text style={styles.headerTextBold}>Instituto Federal do Pará Campus Paragominas</Text>

          </Text>

        </View>

        <TouchableOpacity

          onPress={navigateBack}>

          <Icone name='arrow-left' color={AMB.colorDefault} size={20} style={styles.iconup} />
        </TouchableOpacity>




      </View>



      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyTitle}>Laboratório de Robótica e Computação Aplicada </Text>
        </View>




        <View style={styles.contactBox}>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.action}
              onPress={sendMail}>
              <Image source={imgp}></Image>
              <Text style={styles.actionText}>Email</Text>
              <Icone name="mail" style={styles.iconcc} size={16} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.action}
              onPress={sendWhatsApp}>
              <Text style={styles.actionText}>WhatsApp</Text>
              <Icone name="instagram" style={styles.iconcc} size={16} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.action}
              onPress={site}>
              <Text style={styles.actionText}>Site</Text>
              <Icone name="globe" style={styles.iconcc} size={16} color="#FFF" />
            </TouchableOpacity>

          </View>
        </View>



      </View>


    </View>);
}

