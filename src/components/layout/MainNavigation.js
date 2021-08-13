import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import { Link } from "react-router-dom";

// CSS Modules: create-react-app comes with functionality to import CSS files like this. The CSS code gets injected into the React application during the build step.
// The CSS style classes in MainNavigation.module.css will become properties on this classes object. The properties can then be added to the React components.
// The styles are scoped and unique to only this component.
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            {/* <Link> prevents the browser default behavior of sending a new request upon click, while still updating the URL in browser, therefore loading a new component */}
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
