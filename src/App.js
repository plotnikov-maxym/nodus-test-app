import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import persistStore from "./utils/store/store";
// Components
import TopBar from "./components/TopBar";
import Search from "./components/Search";
import FavouriteItems from "./components/FavouriteItems";
import Notification from "./components/Notification";
import Articles from "./components/Articles";
// Constants
import {locale} from "./constants/locales";
import "./App.css";

const {store, persistor} = persistStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Notification />
        <TopBar heading={locale.WELCOME} />
        <Search />
        <FavouriteItems heading={locale.FAVOURITE_ITEMS} />
        <Articles />
      </PersistGate>
    </Provider>
  );
}

export default App;
