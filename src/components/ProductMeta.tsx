import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/Style';

interface ProductMetaProps {
  price: number;
  rating: number;
}

export default function ProductMeta({ price, rating }: ProductMetaProps) {
  return (
    <View style={styles.metaRow}>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ {rating.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.primaryOrange,
  },
  ratingContainer: {
    backgroundColor: COLORS.accentGlow,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 85, 0, 0.3)',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primaryOrange,
  },
});