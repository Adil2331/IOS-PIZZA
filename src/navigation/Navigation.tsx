import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Basket} from '../screen/Basket';
import MainNavigator from './MainNavigator';
import Profile from '../screen/Profile';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainNavigator"
          component={MainNavigator}
          options={{
            title: 'Самая вкусная пицца во вселенной',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Basket"
          component={Basket}
          options={{title: 'Корзина', headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Профиль', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
