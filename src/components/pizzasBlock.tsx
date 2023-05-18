import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {useDispatch} from 'react-redux';

import {useAppSelector} from '../redux/store';
import {setBasket, setRemove} from '../redux/basketSlice';

type PizzasBlockProps = {
  title: string;
  price: number;
  imageUrl: string;
  id: number;
};

export const PizzasBlock: React.FC<PizzasBlockProps> = ({
  title,
  price,
  imageUrl,
  id,
}) => {
  const Dispatch = useDispatch();
  const pizza = useAppSelector(state => state.basket.basket);
  console.log(pizza);
  return (
    <View style={styles.Container}>
      <Image style={styles.HomeImage} source={{uri: imageUrl}} />
      <Text style={styles.Title}>{title}</Text>
      <View style={styles.PriceAndCount}>
        <Text style={styles.Price}>от {price * 4} тг.</Text>
        {!pizza.filter(obj => obj.id === id).length ? (
          <TouchableOpacity
            style={styles.Button}
            onPress={() =>
              Dispatch(
                setBasket({
                  id: id,
                  title: title,
                  img: imageUrl,
                  price: price,
                  count: 1,
                }),
              )
            }>
            <Text style={{color: 'orange'}}>Добавить</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.Button}
            onPress={() => Dispatch(setRemove(id))}>
            <Text style={{color: 'orange'}}>Убрать</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    border: 1,
  },
  Title: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
  },
  HomeImage: {
    width: 150,
    height: 150,
  },
  PriceAndCount: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Button: {
    marginLeft: 50,
    color: 'red',
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 12,
    padding: 5,
  },
  Price: {
    fontSize: 14,
    fontWeight: '700',
  },
});
