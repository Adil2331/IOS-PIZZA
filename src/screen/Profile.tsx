import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Profile() {
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text>Для заказа пиццы войдите в личный кабинет</Text>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: 'orange',
          alignItems: 'center',
          borderRadius: 20,
          marginVertical: 10,
        }}>
        <Text style={{color: 'white'}}>Указать телефон</Text>
      </TouchableOpacity>
    </View>
  );
}
