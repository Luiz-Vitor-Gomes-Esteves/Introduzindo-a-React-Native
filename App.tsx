import React from 'react';
import { ThemeProvider } from 'styled-components'; 
import { Dashboard } from './src/screens/Dashboard';
import { HighlightCard } from './src/components/HighlightCard';

import theme from './src/global/styles/Theme';

import { useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  } from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({ //verifica se carregou a fonte
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}/**Vai conseguir acessar esse tema */> 
      <Dashboard/>
    </ThemeProvider>
  )
};

