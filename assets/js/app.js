// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html";

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import { Socket } from "phoenix";
import LiveSocket from "phoenix_live_view";

let Hooks = {};
Hooks.Messages = {
  updated() {
    const ionApp = document.getElementById("ion-app");
    console.log(ionApp);
    ionApp.classList = "ion-page hydrated md";

    console.log("hook executed");

    document.getElementsByTagName("ion-button")[0].classList =
      "hydrated md button button-solid ion-activatable ion-focusable";

    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = `https://cdn.jsdelivr.net/npm/@ionic/core/loader/index.es2017.mjs?cachebuster='${new Date().getTime()}`;
    script.innerText = `import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@ionic/core/loader/index.es2017.mjs'
      defineCustomElements();`;
    // var script = document.createElement("script");
    // script.src = `https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js?cachebuster='${new Date().getTime()}`;
    // var script1 = document.createElement("script");
    // script1.src = `https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js?cachebuster='${new Date().getTime()}`;
    // script1.type = "module";
    head.appendChild(script);

    // head.appendChild(script1);
    console.log("scripts added");
  },
};

let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks });
liveSocket.connect();
