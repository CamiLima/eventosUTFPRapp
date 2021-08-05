import * as React from 'react';
import { Button } from 'react-native-paper'
import { TimePickerModal } from 'react-native-paper-dates'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { theme } from '../core/theme'
import { TextInput } from 'react-native-paper'

export default function InputHora({ name }) {
  const [visible, setVisible] = React.useState(false)
  const [date, setDate] = React.useState({hour: 2, minute: 30});
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
      setDate({ minute:minutes, hour: hours })
    },
    [setVisible]
  );


  return (
    <>
    <View style={styles.container}>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={date.hour} // default: current hours
        minutes={date.minute} // default: current minutes
        label={name} // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale={'pt-BR'} // optional, default is automically detected by your system
      />
      <TouchableOpacity

        onPress={() => setVisible(true)}
      >
        <TextInput
          label={name}
          disabled={true}
          value={date.hour + ':' + date.minute}
        />
      </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
