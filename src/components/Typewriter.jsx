import { ReactTyped } from "react-typed";

const Typewriter = () => {
  return (
    <div>
      <h1>
        <ReactTyped
          strings={["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "سلام", "Здравствуйте", "你好"]}
          typeSpeed={300}
          Delay ={3000}
          backSpeed={100}
          loop
          cursorChar="_"
          showCursor={true}
        />
      </h1>
    </div>
  );
};

export default Typewriter;
