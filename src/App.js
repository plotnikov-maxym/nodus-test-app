import React from 'react';
// Components
import TopBar from './components/TopBar';
import Search from './components/Search';
import FavouriteItems from './components/FavouriteItems';
// Constants
import {ITEMS} from './constants/forms';
import {locale} from './constants/locales';
import './App.css';

function App() {
  return (
      <div>
        <TopBar heading={locale.WELCOME}/>
        <Search/>
        <FavouriteItems heading={locale.FAVOURITE_ITEMS} items={ITEMS}/>
      </div>
  );
}

export default App;
