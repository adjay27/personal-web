const Projects = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 p-8 gap-8 max-w-4xl">
        <div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow font-mono ">Abangku</h2>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">Online fashion store project where customers can shop for trendy clothes and accessories, while admins can manage orders, products, and inventory. </p>
            <div className="flex gap-2 mt-2">
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Javascript
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                React
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                Vite
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                ExpressJS
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow font-mono  ">
              <a href="https://github.com/adjay27/e-commerce--api" target="_blank" rel="noreferrer noopener" className="hover:underline"> E-commerce API</a>
            </h2>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">Simple API for managing products, orders, and users in a basic E-Commerce system.</p>
            <div className="flex gap-2 mt-2">
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Javascript
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                NodeJS
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                Prisma
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                ExpressJS
              </span>
            </div>
          </div>

        </div>
        <div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow font-mono ">????</h2>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, magnam?            </p>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-yellow font-mono ">E-module PLC</h2>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">An Android-based mobile learning application designed to assist students in acquiring PLC knowledge on the go using their smartphones. </p>
            <div className="flex gap-2 mt-2">
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Android Studio
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                Java
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
