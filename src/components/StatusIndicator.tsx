import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { styles as globalStyles, COLORS } from '../styles/Style';

interface StatusIndicatorProps {
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

export default function StatusIndicator({ loading, error, onRetry }: StatusIndicatorProps) {
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={COLORS.primaryOrange} />
        <Text style={styles.statusText}>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={[styles.statusText, { marginBottom: 20 }]}>⚠️ {error}</Text>
        <TouchableOpacity style={globalStyles.buttonPrimary} onPress={onRetry}>
          <Text style={globalStyles.buttonTextPrimary}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 20,
  },
  statusText: {
    marginTop: 12,
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});