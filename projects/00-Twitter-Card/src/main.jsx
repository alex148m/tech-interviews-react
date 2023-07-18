import React from "react";
import ReactDOM from "react-dom/client";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <section className="App">
    <TwitterFollowCard userName={"alex148m"} initialIsFollowing>
      Alex Martinez Floranes
    </TwitterFollowCard>

    <TwitterFollowCard userName={"david"} initialIsFollowing={false}>
      David Romano Roseñada
    </TwitterFollowCard>
  </section>
);
