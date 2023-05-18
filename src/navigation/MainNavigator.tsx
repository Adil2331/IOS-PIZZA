import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../screen/Home';
import {Basket} from '../screen/Basket';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screen/Profile';

Ionicons.loadFont();

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'pizza' : 'pizza';
          } else if (route.name === 'Basket') {
            iconName = focused ? 'cart' : 'cart';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Меню', headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Профиль', headerShown: false}}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarLabel: 'Корзина',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
