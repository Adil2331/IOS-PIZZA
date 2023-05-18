import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {useDispatch} from 'react-redux';
import {useAppSelector} from '../redux/store';
import {setCountMinus, setCountPlus, setRemove} from '../redux/basketSlice';

export const BasketPizzas = () => {
  const pizza = useAppSelector(state => state.basket.basket);
  const Dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={pizza}
        renderItem={({item}) => (
          <View style={style.BasketInner}>
            <Image source={{uri: item.img}} style={style.Img} />
            <Text style={style.Title}>{item.title}</Text>
            <Text>{item.price * 4 * item.count} тг.</Text>
            <View style={style.CountBox}>
              <TouchableOpacity
                onPress={() => Dispatch(setCountPlus(item.id))}
                style={style.BtnPlus}>
                <Text>+</Text>
              </TouchableOpacity>
              <Text style={style.Count}>{item.count}</Text>
              <TouchableOpacity
                onPress={() =>
                  item.count > 1
                    ? Dispatch(setCountMinus(item.id))
                    : Dispatch(setRemove(item.id))
                }
                style={style.BtnMinus}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  BasketInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  Img: {
    width: 80,
    height: 80,
  },
  Title: {
    fontWeight: '700',
    fontSize: 15,
    width: 120,
    textAlign: 'center',
  },
  CountBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Count: {
    padding: 5,
    // fontWeight: '700',
    fontSize: 16,
  },
  BtnPlus: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: 'orange',
    borderRadius: 50,
  },
  BtnMinus: {
    paddingTop: 3.5,
    paddingBottom: 3.5,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'orange',
    borderRadius: 50,
  },
});
