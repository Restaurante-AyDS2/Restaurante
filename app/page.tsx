import Image from "next/image";
import Buttom from '@/components/atoms/buttom/Index';
import HeroText from '@/components/molecules/herotext/Index'
import FeatureBar from '@/components/molecules/featurebar/Index'



export default function Home() {
  return (
    <div className="bg-terciary min-h-screen">
      <main className="">
        <HeroText />
        <FeatureBar />
      </main>
    </div>
  );
}



//despues del main
//        <div className="flex justify-center items-start h-screen">
//          <div className="pt-[25vh]">
//            <img src="/logo.png" alt="Logo" className="w-20 h-auto" />
//          </div>
//        </div>
//        <Buttom />