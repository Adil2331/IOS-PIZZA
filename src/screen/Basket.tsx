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
      <View style={style.emptyBasket}>
        <Text style={style.emptyTitle}>Корзина пустая 😕</Text>
        <Text style={style.emptyText}>
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </Text>
      </View>
    );
  }
  return (
    <View style={[style.container, {paddingTop: top}]}>
      <View style={style.basketHeader}>
        <Text style={style.headerText}>Корзина</Text>
        <TouchableOpacity
          onPress={() => Dispatch(setReset())}
          style={style.headerBtn}>
          <Text style={style.btnText}>Очистить корзину</Text>
        </TouchableOpacity>
      </View>
      <BasketPizzas />
      <View style={style.basketInner}>
        <TouchableOpacity style={style.innerBtn}>
          <Text style={style.toatalPrice}> ОФОРМИТЬ ЗА {totalPrice} ТГ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  emptyBasket: {
    marginTop: '80%',
    padding: 5,
  },
  emptyTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 15,
  },
  container: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  basketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginBottom: 15,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 25,
    marginLeft: 10,
  },
  headerBtn: {
    padding: 7,
    backgroundColor: 'orange',
    borderRadius: 15,
    marginRight: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
  },
  basketInner: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(166, 164, 164, .3)',
  },
  innerBtn: {
    padding: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  toatalPrice: {
    fontWeight: '700',
    color: 'white',
  },
});
