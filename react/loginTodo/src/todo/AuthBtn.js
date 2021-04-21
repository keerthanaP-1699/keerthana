/**
 * useHistory is used to redirect to another page with the path address
 */
import { useHistory } from "react-router-dom";

/**
 *  if key is true logout button appears else 
 * display the message u are not logged in
 */
export default function AuthButton() {
  let history = useHistory();
  return localStorage.getItem("loggedin") ? (
    <button
      className="logout"
      onClick={() => {
        localStorage.clear();
        history.push("/login");
      }}
    >
    logout
    </button>
  ) : (
    <p>You are not logged in.</p>
  );
}
