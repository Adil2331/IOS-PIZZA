import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Для заказа пиццы войдите в личный кабинет</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Указать телефон</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    color: 'white',
  },
});
