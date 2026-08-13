import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Product } from '../types/product';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { styles as globalStyles, COLORS } from '../styles/Style';
import ProductCard from '../components/ProductCard';
import StatusIndicator from '../components/StatusIndicator';

// Define the props type for this screen using the navigator's param list
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  // State management for API data, loading spinner, and errors
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch product data from the REST API
  const getProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        throw new Error('Failed to fetch product data from server.');
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  // Run the fetch function once when the screen loads
  useEffect(() => {
    getProducts();
  }, []);

  // Extracted retry logic into its own function for clarity
  const handleRetry = () => {
    setLoading(true);
    setError(null);
    getProducts();
  };

  // 1. & 2. Display Loading or Error State
  if (loading || error) {
    return <StatusIndicator loading={loading} error={error} onRetry={handleRetry} />;
  }

  // 3. Display Main List View
  return (
    <View style={globalStyles.screenContainer}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onPress={() => navigation.navigate('ProductDetails', { product: item })} 
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }} // Adds padding at the end of the list
      />
    </View>
  );
}