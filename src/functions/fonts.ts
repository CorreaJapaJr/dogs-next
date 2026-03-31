import { Spectral, JetBrains_Mono } from 'next/font/google';

export const type_second = Spectral({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--type-second-spectral',
  display: 'swap',
});

export const type_mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--type-mono',
  display: 'swap',
});
