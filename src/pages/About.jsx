const About = () => {
  return (
    <>
      <div className="w-full h-[80vh] flex items-center justify-center bg-white dark:bg-dark">
        <div className="container w-[800px] px-8">
          <p className="title text-[65px] font-medium text-gray-500 dark:text-white">
            About
          </p>
          <h1>Knowledge:</h1>
          <p>Here are some of the technologies I have been working with:</p>
          <h1>Languages:</h1>
          <p>HTML, CSS, Javascript, Java</p>
          <h1>Frameworks:</h1>
          <p>React, React Native, Tailwind, Material UI</p>
          <h1>Backend:</h1>
          <p>ExpressJS, NodeJS</p>
          <h1>Databases and ORM:</h1>
          <p>MySQL, prisma</p>
          <h1>Tools:</h1>
          <p>VS Code, Git, Github, Android Studio</p>
          <h1>Test:</h1>
          <p>Cypress, Jest</p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default About;
