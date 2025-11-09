export const globalStyles = {
  // Typography
  fontFamily: "'Raleway', 'Open Sans', sans-serif, system-ui",
  textSizeMega: { min: 32.432, base: 61.04 }, // clamp(2.027rem, 5vw + 1rem, 3.815rem)
  textSizeHuge: { min: 28.832, base: 48.832 }, // clamp(1.802rem, 4vw + 1rem, 3.052rem)
  textSizeXLarge: { min: 25.632, base: 39.056 }, // clamp(1.602rem, 3vw + 1rem, 2.441rem)
  textSizeLarge: { min: 22.784, base: 31.248 }, // clamp(1.424rem, 2.5vw + 1rem, 1.953rem)
  textSizeMedium: { min: 20.256, base: 25.008 }, // clamp(1.266rem, 2vw + 1rem, 1.563rem)
  textSizeSmall: { min: 18, base: 20 }, // clamp(1.125rem, 1.5vw + 1rem, 1.25rem)
  textSizeBase: 16,

  // Neutral Colors
  neutral50: '#fbfbfc',
  neutral100: '#f3f3f5',
  neutral200: '#e8e8ea',
  neutral300: '#dcdce0',
  neutral400: '#d1d1d6',
  neutral500: '#b2b2ba',
  neutral600: '#a0a0b0',
  neutral700: '#565660',
  neutral800: '#2b2b30',
  neutral900: '#161618',

  // Primary & Secondary
  primary500: '#2a7ae4',
  secondary500: '#eaf3fc',

  // Error Colors
  error50: '#ffdddb',
  error100: '#ffbbb7',
  error200: '#ff9a93',
  error300: '#ff786e',
  error400: '#ff564a',
  error500: '#ff3426',
  error600: '#f41000',
  error700: '#c30d00',
  error800: '#930900',
  error900: '#620600',

  // Success Colors
  success50: '#eefcd2',
  success100: '#ddf8a6',
  success200: '#ccf579',
  success300: '#bbf14d',
  success400: '#aaee20',
  success500: '#8fce10',
  success600: '#77ac0d',
  success700: '#5f890b',
  success800: '#486708',
  success900: '#304505',

  // Warning Colors
  warning50: '#fff9d5',
  warning100: '#fff4ac',
  warning200: '#ffee82',
  warning300: '#ffe858',
  warning400: '#ffe32f',
  warning500: '#ffdd05',
  warning600: '#eece00',
  warning700: '#d9bb00',
  warning800: '#c3a800',
  warning900: '#ad9600',

  // Info Colors
  info50: '#dff9fe',
  info100: '#bff2fd',
  info200: '#9eecfd',
  info300: '#7ee5fc',
  info400: '#5edefb',
  info500: '#3ed8fa',
  info600: '#0bcef9',
  info700: '#05a7cb',
  info800: '#047d98',
  info900: '#035465',

  // Effects & Layout
  boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.1)',
  boxShadowPressed: '0px 6px 12px 0px rgba(0, 0, 0, 0.25)',
  borderRadiusOut: 5,
  borderRadiusIn: 2.5,
} as const;
