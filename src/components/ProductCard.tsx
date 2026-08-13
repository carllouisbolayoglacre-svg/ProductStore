import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../types/product';
import { styles as globalStyles, COLORS } from '../styles/Style';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} resizeMode="cover" />
      <View style={styles.cardContent}>
        <View style={globalStyles.badgeOrange}>
          <Text style={globalStyles.badgeTextOrange}>{product.category.toUpperCase()}</Text>
        </View>
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        
        <TouchableOpacity
          style={globalStyles.buttonSecondary}
          onPress={onPress}
        >
          <Text style={globalStyles.buttonTextSecondary}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.glossyWhite,
    borderRadius: 16,
    marginVertical: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: COLORS.glossyBorder,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginVertical: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.primaryOrange,
    marginBottom: 16,
  },
});