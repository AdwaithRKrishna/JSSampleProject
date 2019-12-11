import axios from "axios";

export default function userLogin() {
  console.log("Hello world");
  debugger;
  axios.post("/login", {
    firstName: "Fred",
    lastName: "Flintstone"
  });
}
