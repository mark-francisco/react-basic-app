import { createContext, useState } from "react";

// createContext() creates a JS object that contains a built-in React component (<FavoritesContext.Provider>). This is used for managing state that affects multiple components/parts of the application.
// The argument for this fn is an object that contains the initial values for the state.
const FavoritesContext = createContext({
  // define the keys and initial values
  favorites: [],
  totalFavorites: 0,
});

// create React component that provides the context to all of the other components that need it, as well as updates the state values of the context
function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  // this context object will hold the latest, updated state values
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  // the built-in React component expects a prop called "value," where we pass in the current context values as an object.
  // all props that are listening for this context (aka are wrapped by this Provider component) will have their context values updated and re-rendered.
  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>;
}
