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
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PizzasBlock} from '../components/PizzasBlock';

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
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} />
        <Text>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text>React-Pizza</Text>
          <Image
            style={styles.innerImg}
            source={require('../assets/img/pizzaLogo.png')}
          />
        </View>
      </View>
      <FlatList
        style={styles.flatList}
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
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100%',
  },
  container: {
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  headerInner: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  innerImg: {
    width: 30,
    height: 30,
    marginRight: 5,
    transform: [{rotate: '180deg'}],
  },
  flatList: {
    marginBottom: 40,
  },
});
