import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo'
import Header from '../components/Header'



export default function DashboardScreen({ navigation }) {
    navigation.reset({
        index: 0,
        routes: [{ name: 'NewEvent' }],
      })
    return (
      <View style={styles.container}>
                <Logo />
                <Header>Informações do Evento</Header>

        <SectionList
          sections={[
            {title: 'Agronomia', data: ['Nome:Palestra manejo do solo','Descrição: Palestra ofertada para os alunos de agronomia, o palestrante será o professor Doutor Paulo Britto, com certificado de horas','Publico: Alunos de Agronomia','Data inicial: 21/11/21', 'Data Final: 21/11/21','Hora inicial 19:00','Hora Final 21:30']},
            
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  
