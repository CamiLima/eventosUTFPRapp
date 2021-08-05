import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import InputData from '../components/InputData'
import InputHora from '../components/InputHora'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'


export default function NewEventScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [descricao, setDescricao] = useState({ value: '', error: '' })
  const [local, setLocal] = useState({ value: '', error: '' })
  const [publico, setPublico] = useState({ value: '', error: '' })
 
  const onSignUpPressed = () => {
    return

  }

  return (
    <ScrollView>
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Novo evento</Header>
        <TextInput
          label="Nome do Evento"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Descrição"
          returnKeyType="next"
          value={descricao.value}
          onChangeText={(text) => setDescricao({ value: text, error: '' })}
          autoCapitalize="none"

        />
        <TextInput
          label="Local"
          returnKeyType="done"
          value={local.value}
          onChangeText={(text) => setLocal({ value: text, error: '' })}

        />
        <TextInput
          label="Público"
          returnKeyType="done"
          value={publico.value}
          onChangeText={(text) => setPublico({ value: text, error: '' })}

        />
        <InputData
          name="Data inicial" />

        <InputData
          name="Data Final" />

        <InputHora
          name="Hora inicial" />

               <InputHora
          name="Hora final" />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Salvar
        </Button>
      </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
