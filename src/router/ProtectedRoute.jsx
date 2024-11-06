import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/ContextProvier";
import LoadingPage from "../pages/LoadingPage";

function ProtectedRoute({ children }) {
	const { data, isLoading, isError, error } = useAuthContext();
	const location = useLocation();

	if (isLoading) {
		return <LoadingPage />;
	}

	if (!data) {
		return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
	}

	return children;
}

export default ProtectedRoute;

/**
 In this code:

  ```jsx
  <Navigate to={"/login"} state={{ from: location }} replace={true} />;
  ```

  you're using the `Navigate` component from **React Router**, which is responsible for programmatically navigating the user to a different route. Let's break down the individual parts of the code:

  ### 1. **`to={"/login"}`**
  This specifies the target URL to navigate to. In this case, it's the `/login` path. So, when this component is rendered, it will immediately redirect the user to the login page.

  ### 2. **`state={{ from: location }}`**
  The `state` property is used to pass additional information along with the navigation. In this case, you're passing an object with a `from` property that holds the value of `location`.

  - **Purpose of `state`:** When you navigate to the `/login` page, this state will be available on the destination route (in this case, the `/login` route). This can be used, for example, to remember the page the user came from before they were redirected. This is useful for scenarios where you want to redirect users back to the original page after they perform some action (like logging in). 

    For instance, the `location` object might hold the current path, so if the user is redirected to the login page, you could use this state later on to send them back to the page they originally intended to visit once they log in.

  ### 3. **`replace={true}`**
  The `replace` prop, when set to `true`, means that the navigation will **replace** the current entry in the history stack, rather than adding a new entry. In other words:

  - Without `replace={true}`, when the user is redirected to `/login`, a new entry is added to the browser's history stack. If the user clicks "Back," they would go to the page they were on before being redirected.
  - With `replace={true}`, the current history entry is **replaced** with the `/login` path. So, when the user clicks "Back," they will not go back to the page they were on before the redirect—they will go further back in the history stack (i.e., to the page before that).

  ### Why use `replace` and `state` together?
  - **`state`** allows you to carry forward information (like the original location) that you might need later.
  - **`replace`** ensures that the current entry in the browser's history is replaced, preventing the user from going back to the page they were redirected from, which is typical when you're redirecting them for authentication purposes (e.g., to a login page).

 // ! ### Example scenario:
  Imagine a user is trying to access a protected page (e.g., `/profile`), but they're not logged in. The app will redirect them to `/login`. 

  - You might want to use `state={{ from: location }}` to store the original URL (`/profile`) in `location`.
  - After they log in, you can redirect them back to `/profile` using the state that was passed during the initial redirect.
  - Using `replace={true}` ensures that the redirect to `/login` does not leave an entry in the browser's history stack, so if the user presses the back button, they won't end up back at `/profile` (the page they were redirected from).
 */
