import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { styles as globalStyles, COLORS } from '../styles/Style';
import ProductMeta from '../components/ProductMeta';

// Define the props type for this screen
type ProductDetailsScreenProps = StackScreenProps<RootStackParamList, 'ProductDetails'>;

export default function ProductDetailsScreen({ route }: ProductDetailsScreenProps) {
  // Extract the selected product from navigation route parameters
  const { product } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContentContainer}>
      {/* The card now contains the image and all details */}
      <View style={[globalStyles.card, styles.card]}>
        {/* Image container with a white background */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />
        </View>
        
        {/* Wrapper for all text content to apply padding */}
        <View style={styles.detailsContainer}>
          {/* Category Badge using global badge style */}
          <View style={globalStyles.badgeOrange}>
            <Text style={globalStyles.badgeTextOrange}>{product.category.toUpperCase()}</Text>
          </View>

          {/* Title using global header style */}
          <Text style={[globalStyles.headerTitle, { marginTop: 12 }]}>{product.title}</Text>

          {/* Price and Rating Row */}
          <ProductMeta price={product.price} rating={product.rating} />

          <View style={globalStyles.divider} />

          {/* Description Header and Text */}
          <Text style={styles.sectionHeader}>Description</Text>
          <Text style={globalStyles.bodyText}>{product.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

// Local styles that complement the global style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContentContainer: {
    padding: 16,
  },
  card: {
    padding: 0, // Override global card padding
    marginVertical: 0, // Override global card margin
    overflow: 'hidden', // Ensure image corners are rounded with the card
  },
  imageContainer: {
    backgroundColor: COLORS.glossyWhite, // White background for the image
  },
  image: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
});