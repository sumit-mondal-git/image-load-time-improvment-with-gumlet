import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const loadGumletScript = () => {
    return new Promise(function (resolve, reject) {
      // Checks if the script is already loaded on the page
      if (document.querySelector("script#gumlet-sdk-script")) {
        resolve();
      } else {
        window.GUMLET_CONFIG = {
          hosts: [
            {
              current: "https://developer.clirnet.com/gumlet",
              gumlet: "clirnet.gumlet.io",
            },
          ],
          lazy_load: true,
        };
        // Loads the script and appends it on the page
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/gumlet.js@2.1/dist/gumlet.min.js";
        script.id = "gumlet-sdk-script";
        script.sync = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      }
    });
  };

  useEffect(() => {
    loadGumletScript();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img
          data-src="https://clirnet.gumlet.io/test_image.jpg"
          className="App-logo"
          alt="logo"
        />
        <p>Gumlet Sdk Implimentation</p>
      </header>
    </div>
  );
}

export default App;
