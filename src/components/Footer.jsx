import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-[10vh]  bg-white dark:bg-dark">
      <div className="flex justify-center mx-auto gap-8">
        <a href="https://github.com/adjay27" target="_blank" rel="noreferrer">
          <div className="flex flex-row items-center gap-2">
            <AiFillGithub className="w-8 h-8 fill-gray-500" />
            <p className="text-gray-500">Github</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/adjay27/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-row items-center gap-2">
            <AiFillLinkedin className="w-8 h-8 fill-gray-500" />
            <p className="text-gray-500">Linkedin</p>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
