import * as React from 'react';
import { DatePickerModal } from 'react-native-paper-dates';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { theme } from '../core/theme'
import { TextInput } from 'react-native-paper'
import { format } from "date-fns";

export default function InputData({ name }) {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(({ name }) => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity

          onPress={() => setOpen(true)}
        >
          <TextInput
            label={name}
            disabled={true}
            value={format(date,"dd/MM/yyyy")}
          />
        </TouchableOpacity>
        <DatePickerModal
          locale={'pt-BR'}
          mode="single"

          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // saveLabel="Save" // optional
        // label="Select date" // optional
        // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
        />
      </View>
    </>
  );
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
