import React from 'react';
import axios from 'axios';

import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {PizzasBlock} from '../components/pizzasBlock';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Home: React.FC<any> = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPost = () => {
    setIsLoading(true);

    axios
      .get('https://6410724cbe7258e1452a25cc.mockapi.io/items')
      .then(({data}) => {
        setItems(data);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось загрузить пиццы');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  React.useEffect(fetchPost, []);
  if (isLoading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100%',
        }}>
        <ActivityIndicator size={'large'} />
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.Container, {paddingTop: top}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 12,
        }}>
        <View
          style={{
            flexDirection: 'row-reverse',
            alignItems: 'center',
          }}>
          <Text>React-Pizza</Text>
          <Image
            style={{
              width: 30,
              height: 30,
              marginRight: 5,
              transform: [{rotate: '180deg'}],
            }}
            source={require('../assets/img/pizzaLogo.png')}
          />
        </View>
      </View>
      <FlatList
        style={{marginBottom: 40}}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
        }
        data={items}
        renderItem={({item}) => (
          <PizzasBlock
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
  },
  Basket: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
  },
});
