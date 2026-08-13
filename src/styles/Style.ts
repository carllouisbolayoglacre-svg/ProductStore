import { StyleSheet, Platform } from 'react-native';

// Color Palette Constants
export const COLORS = {
  primaryOrange: '#FF5500',
  orangeGradientTop: '#FF7722',
  orangeDark: '#D94800',
  glossyWhite: '#FFFFFF',
  glossyBorder: '#E1E8F0',
  background: '#EBF0F5',
  textPrimary: '#1A212D',
  textSecondary: '#627084',
  textLight: '#FFFFFF',
  accentGlow: 'rgba(255, 85, 0, 0.15)',
};

export const styles = StyleSheet.create({
  // ==================== LAYOUT & CONTAINERS ====================
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  
  // Glossy White Card Surface
  card: {
    backgroundColor: COLORS.glossyWhite,
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    // Android Glossy Depth
    elevation: 6,
    borderWidth: 1,
    borderColor: COLORS.glossyBorder,
    borderTopWidth: 1.5,
    borderTopColor: '#FFFFFF', // Creates top edge light-reflection effect
  },

  // Orange Highlight Card
  cardOrange: {
    backgroundColor: COLORS.primaryOrange,
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    elevation: 8,
    borderWidth: 1,
    borderColor: COLORS.orangeGradientTop,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.orangeDark,
  },

  // ==================== BUTTONS ====================
  // Primary Orange Glossy Button
  buttonPrimary: {
    backgroundColor: COLORS.primaryOrange,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    // Glossy Android border highlight
    borderWidth: 1,
    borderTopColor: '#FFA066',
    borderBottomColor: COLORS.orangeDark,
    borderLeftColor: COLORS.primaryOrange,
    borderRightColor: COLORS.primaryOrange,
    elevation: 5,
  },

  // Secondary Glossy White Button
  buttonSecondary: {
    backgroundColor: COLORS.glossyWhite,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    borderWidth: 1.5,
    borderColor: COLORS.primaryOrange,
    borderTopColor: '#FFFFFF',
    elevation: 3,
  },

  buttonTextPrimary: {
    color: COLORS.textLight,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  buttonTextSecondary: {
    color: COLORS.primaryOrange,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // ==================== INPUTS & FORMS ====================
  inputContainer: {
    marginVertical: 8,
  },
  
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 6,
  },

  textInput: {
    backgroundColor: COLORS.glossyWhite,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.glossyBorder,
    borderBottomColor: '#D0D7DE',
    elevation: 2,
  },

  textInputFocused: {
    borderColor: COLORS.primaryOrange,
    borderWidth: 1.5,
    elevation: 4,
  },

  // ==================== BADGES & CHIPS ====================
  badgeOrange: {
    backgroundColor: COLORS.accentGlow,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 85, 0, 0.3)',
  },

  badgeTextOrange: {
    color: COLORS.primaryOrange,
    fontSize: 12,
    fontWeight: '700',
  },

  // ==================== TYPOGRAPHY ====================
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
    marginBottom: 4,
  },

  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 16,
  },

  bodyText: {
    fontSize: 15,
    color: COLORS.textPrimary,
    lineHeight: 22,
  },

  bodyTextMuted: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },

  // ==================== DIVIDERS ====================
  divider: {
    height: 1,
    backgroundColor: COLORS.glossyBorder,
    marginVertical: 16,
  },
});