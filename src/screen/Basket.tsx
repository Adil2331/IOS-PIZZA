import React from 'react';
import {useDispatch} from 'react-redux';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useAppSelector} from '../redux/store';
import {BasketPizzas} from '../components/BasketPizzas';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {setReset} from '../redux/basketSlice';

export const Basket = () => {
  const Dispatch = useDispatch();
  const {top} = useSafeAreaInsets();
  const pizza = useAppSelector(state => state.basket.basket);
  const totalPrice = pizza.reduce(
    (sum, e) => sum + Number(e.price) * 4 * Number(e.count),
    0,
  );
  if (pizza.length < 1) {
    return (
      <View
        style={{
          marginTop: '80%',
          padding: 5,
        }}>
        <Text style={{textAlign: 'center', fontWeight: '700', fontSize: 25}}>
          Корзина пустая 😕
        </Text>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </Text>
      </View>
    );
  }
  return (
    <View style={[style.Container, {paddingTop: top}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
          marginBottom: 15,
        }}>
        <Text style={{fontWeight: '700', fontSize: 25, marginLeft: 10}}>
          Корзина
        </Text>
        <TouchableOpacity
          onPress={() => Dispatch(setReset())}
          style={{
            padding: 7,
            backgroundColor: 'orange',
            borderRadius: 15,
            marginRight: 10,
          }}>
          <Text style={{color: 'white', fontWeight: '700'}}>
            Очистить корзину
          </Text>
        </TouchableOpacity>
      </View>
      <BasketPizzas />
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderTopWidth: 0.5,
          borderTopColor: 'rgba(166, 164, 164, .3)',
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: 'orange',
            alignItems: 'center',
            borderRadius: 20,
            marginVertical: 10,
          }}>
          <Text style={style.ToatalPrice}> ОФОРМИТЬ ЗА {totalPrice} ТГ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  ToatalPrice: {
    fontWeight: '700',
    color: 'white',
  },
});
