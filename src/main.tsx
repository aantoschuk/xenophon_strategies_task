import { StrictMode } from "react";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import Home from "./home/home.tsx";
import { store } from "./redux/store.ts";

import "./variables.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Task for Xenophon Strategies where i should create Chat with GPT"
      />
      <meta name="keywords" content="react, gpt, ChatGPT, AI, OpenAI" />
      <meta name="author" content="Alexander Antoschuk" />
      <meta name="og:type" content="website" />
      {/* some canonical tags... */}
      <title>Chat with GPT</title>
    </Helmet>
    <Provider store={store}>
      <Home />
    </Provider>
  </StrictMode>
);
