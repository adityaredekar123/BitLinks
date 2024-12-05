import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortner
          </p>
          <p className="px-56 text-center text-1xl">
            Simple and Straightforward URL Shortner
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg p-3 py1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg p-3 py1 font-bold text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true} />
        </div>

      </section>
    </main>
  );
}
