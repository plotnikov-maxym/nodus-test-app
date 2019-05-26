import React from "react";
import {Provider} from "react-redux";
// Components
import TopBar from "./components/TopBar";
import Search from "./components/Search";
import FavouriteItems from "./components/FavouriteItems";
import Notification from "./components/Notification";
import Articles from "./components/Articles";
// Utils
import store from "./utils/store/store";
// Constants
import {locale} from "./constants/locales";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Notification />
        <TopBar heading={locale.WELCOME} />
        <Search />
        <FavouriteItems heading={locale.FAVOURITE_ITEMS} />
        <Articles />
      </div>
    </Provider>
  );
}

export default App;
