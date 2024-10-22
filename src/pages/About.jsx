const About = () => {
  return (
    <>
      <div className=" flex-row max-md:flex-col gap-8 flex mx-auto p-4 items-center justify-center bg-light dark:bg-dark">
        <div className="hidden dark:block w-[360px] h-[340px] overflow-hidden dark:text-white ">
          ⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
          ⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
          ⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
          ⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
          ⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
          ⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
          ⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
          ⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
          ⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
          ⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
          ⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
          ⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
          ⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
          ⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
        </div>
        <div className="dark:hidden  w-[360px] h-[340px] overflow-hidden dark:text-white">
          ⠸⠀⣧⠀⠀⠀⢀⢀⠠⠠⡠⡠⡢⣊⢢⠀⢀⡽⠃⠀⠈⠳⣖⢔⢄⠢⣆⡀⠀⠈
          ⢹⠀⠹⣎⠢⢊⠢⡺⣦⠀⡪⡪⡪⡪⡢⠚⡭⣺⠀⠀⠀⢀⠌⠳⣕⢕⠞⡮⡢⠸
          ⢹⠀⠀⠙⣆⠌⠌⠪⡺⣷⡨⡪⡪⡪⡪⡪⡷⡹⣠⣴⣶⣾⣶⣶⣾⣷⣃⡯⡪⡂
          ⢨⡏⠉⠉⠙⠢⡢⡪⡪⣺⢹⡪⡪⡪⡪⡪⠋⣰⠟⢉⣤⢶⢶⢤⡉⠙⢿⣯⠪⡪
          ⢢⢻⡄⡠⠀⠀⠈⠪⠪⠺⠀⠫⠪⠊⠊⠀⠀⡟⠀⡟⠑⢷⠳⣗⣺⣆⠈⢿⡎⡪
          ⢢⢊⣠⣷⡿⠿⠿⢿⣶⡀⠀⠀⠀⠀⠀⠀⠀⠃⠀⡷⢴⣋⡀⢠⠞⢸⠀⢸⢿⡪
          ⢢⣾⠟⠁⣠⢶⢶⢶⣄⠙⠄⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠀⠙⠚⠀⢸⢀⠏⡨⡻
          ⣾⡏⠀⢰⠋⠳⣷⠳⣞⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠓⠶⠶⠾⠻⡩⡪⡪⡪
          ⢿⡄⠀⢸⡦⣾⣋⡀⢠⠞⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠊⠊⠀
          ⢄⠻⠄⠀⠳⣧⡀⠈⠚⠀⣸⠀⠀⠀⠀⠀⠀⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠈⡻⣄⠀⠠⣀⣙⣲⣶⠞⠁⠀⠀⠀⠀⠀⠀⡇⠀⠙⣦⠀⠀⠀⠀⠀⠀⠀⠀⣠
          ⢪⢮⠮⠷⠄⡨⡠⡡⡢⠄⠀⠀⠀⠀⠀⠀⠀⣇⠀⣀⣼⠀⠀⠀⠀⠀⠀⢀⣾⠟
          ⢢⢊⢷⡠⡪⡪⡪⡪⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⣀⣴⠿⠷⣦
          ⢢⢊⢪⢿⣮⣌⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡶⢟⢍⢔⢕⢕⢜
        </div>

        <div className="p-8">
          <p className="title text-[32px] font-bold text-gray-500 dark:text-white">
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
      </div>
    </>
  );
};

export default About;
