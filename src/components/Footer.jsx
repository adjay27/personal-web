import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-[10vh]  bg-white dark:bg-dark">
      <div className="flex justify-center mx-auto gap-8">
        <div className="flex flex-row items-center gap-2">
          <AiFillGithub className="w-10 h-10 fill-white" />
          <p className="text-white">Github</p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <AiFillLinkedin className="w-10 h-10 fill-white" />
          <p className="text-white">Linkedin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
