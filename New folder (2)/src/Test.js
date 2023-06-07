import axios from "axios";

axios.get("http://localhost:8080/hello2").then((res) => {
  console.log(res.data);
});
