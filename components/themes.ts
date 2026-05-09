import { DarkTheme, DefaultTheme, useTheme as useThemeBase } from '@react-navigation/native';
import { Appearance } from 'react-native';

export const BlueDefaultTheme = {
  ...DefaultTheme,
  closeImage: require('../img/close.png'),
  barStyle: 'dark-content',
  scanImage: require('../img/scan.png'),
  colors: {
    ...DefaultTheme.colors,
    borderWidth: 0.5,
    brandingColor: '#e8f1ff',
    customHeader: '#e8f1ff',
    foregroundColor: '#0a2540',
    borderTopColor: 'rgba(15, 40, 80, 0.12)',
    buttonBackgroundColor: '#93c5fd',
    buttonTextColor: '#0a2540',
    secondButtonTextColor: '#50555C',
    buttonAlternativeTextColor: '#1d4ed8',
    buttonDisabledBackgroundColor: '#e8f1ff',
    buttonDisabledTextColor: '#9aa0aa',
    inputBorderColor: '#bfdbfe',
    inputBackgroundColor: '#f0f7ff',
    alternativeTextColor: '#64748b',
    alternativeTextColor2: '#2563eb',
    buttonBlueBackgroundColor: '#93c5fd',
    buttonGrayBackgroundColor: '#EEEEEE',
    incomingBackgroundColor: '#d2f8d6',
    incomingForegroundColor: '#37c0a1',
    outgoingBackgroundColor: '#f8d2d2',
    outgoingForegroundColor: '#d0021b',
    successColor: '#37c0a1',
    failedColor: '#ff0000',
    placeholderTextColor: '#81868e',
    shadowColor: '#000000',
    inverseForegroundColor: '#ffffff',
    hdborderColor: '#3b82f6',
    hdbackgroundColor: '#e8f1ff',
    lnborderColor: '#FFB600',
    lnbackgroundColor: '#FFFAEF',
    background: '#FFFFFF',
    lightButton: '#eef0f4',
    ballReceive: '#d2f8d6',
    ballOutgoing: '#f8d2d2',
    lightBorder: '#ededed',
    ballOutgoingExpired: '#EEF0F4',
    modal: '#ffffff',
    formBorder: '#d2d2d2',
    modalButton: '#93c5fd',
    darkGray: '#9AA0AA',
    scanLabel: '#9AA0AA',
    feeText: '#81868e',
    feeLabel: '#d2f8d6',
    feeValue: '#37c0a1',
    feeActive: '#d2f8d6',
    labelText: '#81868e',
    cta2: '#1e3a8a',
    outputValue: '#0a2540',
    elevated: '#ffffff',
    mainColor: '#bfdbfe',
    success: '#bfdbfe',
    successCheck: '#1d4ed8',
    msSuccessBG: '#37c0a1',
    msSuccessCheck: '#ffffff',
    newBlue: '#2563eb',
    redBG: '#F8D2D2',
    redText: '#D0021B',
    changeBackground: '#FDF2DA',
    changeText: '#F38C47',
    receiveBackground: '#D1F9D6',
    receiveText: '#37C0A1',
    androidRippleColor: '#CCCCCC',
  },
};

export type Theme = typeof BlueDefaultTheme;

export const BlueDarkTheme: Theme = {
  ...DarkTheme,
  closeImage: require('../img/close-white.png'),
  scanImage: require('../img/scan-white.png'),
  barStyle: 'light-content',
  colors: {
    ...BlueDefaultTheme.colors,
    ...DarkTheme.colors,
    customHeader: '#0c1929',
    brandingColor: '#0c1929',
    borderTopColor: '#334155',
    background: '#0a1628',
    foregroundColor: '#e8f1ff',
    buttonDisabledBackgroundColor: '#1e3a5f',
    buttonBackgroundColor: '#1e3a5f',
    buttonTextColor: '#e8f1ff',
    lightButton: 'rgba(59,130,246,.15)',
    buttonAlternativeTextColor: '#93c5fd',
    alternativeTextColor: '#94a3b8',
    alternativeTextColor2: '#60a5fa',
    ballReceive: '#202020',
    ballOutgoing: '#202020',
    lightBorder: '#313030',
    ballOutgoingExpired: '#202020',
    modal: '#202020',
    formBorder: '#202020',
    inputBackgroundColor: '#262626',
    modalButton: '#1e3a5f',
    darkGray: '#3A3A3C',
    feeText: '#81868e',
    feeLabel: '#8EFFE5',
    feeValue: '#000000',
    feeActive: 'rgba(210,248,214,.2)',
    cta2: '#ffffff',
    outputValue: '#ffffff',
    elevated: '#121212',
    mainColor: '#3b82f6',
    success: '#1e3a5f',
    successCheck: '#60a5fa',
    buttonBlueBackgroundColor: '#1e3a5f',
    scanLabel: 'rgba(255,255,255,.2)',
    labelText: '#ffffff',
    msSuccessBG: '#8EFFE5',
    msSuccessCheck: '#000000',
    newBlue: '#2563eb',
    redBG: '#5A4E4E',
    redText: '#FC6D6D',
    changeBackground: '#5A4E4E',
    changeText: '#F38C47',
    receiveBackground: 'rgba(210,248,214,.2)',
    receiveText: '#37C0A1',
    androidRippleColor: '#444444',
  },
};

// Casting theme value to get autocompletion
export const useTheme = (): Theme => useThemeBase() as Theme;

export const platformColors = {
  background: BlueDefaultTheme.colors.background,
  card: BlueDefaultTheme.colors.modal ?? BlueDefaultTheme.colors.elevated ?? BlueDefaultTheme.colors.background,
  text: BlueDefaultTheme.colors.foregroundColor,
  secondaryText: BlueDefaultTheme.colors.alternativeTextColor ?? BlueDefaultTheme.colors.darkGray,
  separator: BlueDefaultTheme.colors.lightBorder ?? BlueDefaultTheme.colors.borderTopColor,
  chevron: BlueDefaultTheme.colors.alternativeTextColor ?? BlueDefaultTheme.colors.darkGray,
};

export class BlueCurrentTheme {
  static colors: Theme['colors'];
  static closeImage: Theme['closeImage'];
  static scanImage: Theme['scanImage'];

  static updateColorScheme(): void {
    const isColorSchemeDark = Appearance.getColorScheme() === 'dark';
    BlueCurrentTheme.colors = isColorSchemeDark ? BlueDarkTheme.colors : BlueDefaultTheme.colors;
    BlueCurrentTheme.closeImage = isColorSchemeDark ? BlueDarkTheme.closeImage : BlueDefaultTheme.closeImage;
    BlueCurrentTheme.scanImage = isColorSchemeDark ? BlueDarkTheme.scanImage : BlueDefaultTheme.scanImage;
    const colors = BlueCurrentTheme.colors;
    platformColors.background = colors.background;
    platformColors.card = colors.modal ?? colors.elevated ?? colors.background;
    platformColors.text = colors.foregroundColor;
    platformColors.secondaryText = colors.alternativeTextColor ?? colors.darkGray;
    platformColors.separator = colors.lightBorder ?? colors.borderTopColor;
    platformColors.chevron = colors.alternativeTextColor ?? colors.darkGray;
  }
}

BlueCurrentTheme.updateColorScheme();
