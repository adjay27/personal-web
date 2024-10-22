import { ReactTyped } from "react-typed";

const Typewriter = () => {
  return (
    <div>

      <ReactTyped
        strings={["Hello", "Hola", "Bonjour", "Halo", "Ciao", "こんにちは", "你好"]}
        typeSpeed={300}
        Delay={3000}
        backSpeed={100}
        loop
        cursorChar="_"
        showCursor={true}
      />

    </div>
  );
};

export default Typewriter;
