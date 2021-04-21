import { useHistory } from "react-router-dom";
/**
 * a token is generated randomly and send it to the localStorage when we login 
 * history.push will redirect the page to the path given
 */
export default function submit() {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  localStorage.setItem("loggedin", token);
  let history = useHistory();
  history.push("/todo");
}
