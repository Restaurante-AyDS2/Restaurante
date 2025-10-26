import Image from "next/image";
import Buttom from '@/components/atoms/buttom/Index';
import HeroText from '@/components/molecules/herotext/Index'
import FeatureBar from '@/components/molecules/featurebar/Index'
import ButtonGroup from '@/components/molecules/buttongroup/Index'



export default function Home() {
  return (
    <div className="bg-terciary min-h-screen">
      <main className="">
        <HeroText />
        <FeatureBar />
        <ButtonGroup />
      </main>
    </div>
  );
}