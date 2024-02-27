'use client'
import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl leading-tight md:leading-normal">Seamless <span className="font-bold">Export,</span></h1>
      <h1 className="text-4xl md:text-6xl leading-tight md:leading-normal">Powerful <span className="text-yellow font-bold">Insights.</span></h1>
      <p className="text-light-gray py-5">A useful tool to get reviews and share them anywhere.</p>
      <form action="" className="flex flex-col md:flex-row items-center">
        <input type="email" placeholder="johndoe@gmail.com" className="text-dark-gray outline-none rounded-lg border-dark-gray border py-2 min-w-[300px] px-2 mr-2"/>
        <Button onClick={() => {console.log('this is a button')}}>Sign up</Button>
      </form>
    </main>
  );
}
