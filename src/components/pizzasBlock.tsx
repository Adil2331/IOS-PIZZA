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
    <View style={styles.container}>
      <Image style={styles.homeImage} source={{uri: imageUrl}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceAndCount}>
        <Text style={styles.price}>от {price * 4} тг.</Text>
        {!pizza.filter(obj => obj.id === id).length ? (
          <TouchableOpacity
            style={styles.button}
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
            <Text style={styles.btnColor}>Добавить</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Dispatch(setRemove(id))}>
            <Text style={styles.btnColor}>Убрать</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    border: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
  },
  homeImage: {
    width: 150,
    height: 150,
  },
  priceAndCount: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginLeft: 50,
    color: 'red',
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 12,
    padding: 5,
  },
  btnColor: {
    color: 'orange',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
  },
});
