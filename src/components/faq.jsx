import React from "react";
import "./faq.css";
import Collapse from "./utils/collapse";

export default function Faq() {
  return (
    <>
      <div className="container-faq">
        <h2>FAQ</h2>
        <div className="collapse">
        <Collapse title="How much is the mint?" content=" Free! You only pay for gas." />
        <Collapse title="What chain?" content=" Ethereum" />
        <Collapse
          title="Is there a discord?"
          content=" Discord goes live the same day as the mint. Discord will be gated, Requirements will be announced closer to mint date."
        />
        <Collapse title="What is the supply?" content=" 6,666 Demon NFTs" />
        <Collapse
          title="Why buy?"
          content=" There’s a leveling system among the NFTs. There are different classes of demons and you will need the lower class to register with discord then rank higher and higher to earn airdrops including Angel NFTs and more. It’s fun and rewarding! Details to come."
        />
        </div>
      </div>
    </>
  );
}
