import React from "react";
const quotes = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  },
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  },
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character: "Principal Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
  }
];

//This is a Functional component named Quotes that is passed into App.js
//If a component does not require state, it should always be a stateless functional component
//Should only ever define a component as a class if it absolutely requires state
//Map should use Key keyword that contains unique values of each Object Key to identify their value and use it for other logic purposes
const Quotes = () => (
  <div>
    {quotes.map(item => (
      <img key={item.character} src={item.image} />
      //<p>{item.id + " > " + item.character}</p>
    ))}
  </div>
);

export default Quotes;
