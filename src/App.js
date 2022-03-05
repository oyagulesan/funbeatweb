import React from 'react';
import './App.css';
import { Provider as PictureProvider } from './context/PictureContext';
import HomeScreen from './screens/HomeScreen.js';
import TitleComponent from './components/TitleComponent.js';


const AppScreen = () => {
  return (
        <PictureProvider>
          <TitleComponent />
          <HomeScreen />
        </PictureProvider>
  )
};

export default AppScreen;
