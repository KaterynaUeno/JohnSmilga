import React from "react";
import ReactDom from "react-dom";

// function Greeting(){
//   return <h4>this is katia and this is my first component</h4>;
// }

// ReactDom.render(<Greeting />, document.getElementById('root'));

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/71yBZOvXBVL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>The Man Who Died Twice</h1>;
ReactDom.render(<BookList />, document.getElementById("root"));
