import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailPage';
import { Product } from './src/types/product';
import { COLORS } from './src/styles/Style';

// Define the type for the navigation stack parameters
export type RootStackParamList = {
  Home: undefined; // No parameters expected for Home
  ProductDetails: { product: Product }; // ProductDetails expects a 'product' object
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.primaryOrange,
            },
            headerTintColor: COLORS.textLight,
            headerTitleStyle: {
              fontWeight: '700',
            },
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Product Store' }} 
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={({ route }) => ({ title: route.params.product.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}