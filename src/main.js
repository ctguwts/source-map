import { foo } from "./utils/foo";
import { bar } from "./utils/bar";

import axios from "axios";
import react from "react";

//main.js作为入口
const message = "Hello main";
console.log(message);
foo();
bar();

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
btn1.textContent = "category";
btn2.textContent = "about";

document.body.append(btn1);
document.body.append(btn2);

btn1.onclick = () => {
  import(
    /* webpackChunkName:"category" */
    /* webpackPrefetch: true */
    "./router/category"
  );
};

btn2.onclick = () => {
  import(
    /* webpackChunkName:"about" */
    /* webpackPreload: true */
    "./router/about"
  );
};

axios.get("127.0.0.1");
