import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import qr from "../public/assets/image-qr-code.png";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#D5E1EF]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white p-4 max-w-[320px] max-h-[500px] h-full w-full rounded-lg flex flex-col gap-4">
        <img
          src={qr.src}
          className="mb-2 w-full max-h-[288px] h-full bg-[#2C7DFA]"
        />
        <h1 className="font-bold text-[22px]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[15px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Home;
