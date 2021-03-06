import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo'
import Header from '../components/Header'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Button from '../components/Button'

export default function DashboardScreen({ navigation }) {
     return ( <Background>
        <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>EVENTOS</Header>

          
        <SectionList
          sections={[
            {title: 'Agronomia', data: ['Palestra manejo do solo']},
            {title: 'Engenharia de Software', data: ['Copa Software', 'Palestra UX e UI design']},
            {title: 'Zootecnia', data: ['']},
            {title: 'Biologia', data: ['Semana Academica']},
            {title: 'Geral', data: ['Palestra Boas Vindas']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Button
        mode="contained"
        onPress={() => navigation.navigate('NewEventScreen')}
      >
         Novo Evento
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('InfoEventsScreen')}
      >
        Info eventos
      </Button>

     </Background>
     
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
  