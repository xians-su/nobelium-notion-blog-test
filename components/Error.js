import Head from "next/head";

const Error = ({ errCode, title }) => {
  return (
    <>
      <Head>
        <title>
          {errCode}: {title}
        </title>
      </Head>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="inline-block border-black border-r-[1px] dark:text-gray-200 dark:border-gray-200 text-2xl pr-6 py-2">
          {errCode}
        </h1>
        <div className="inline-block text-left ml-6">
          <h3 className="text-sm dark:text-gray-200">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default Error;
