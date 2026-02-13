import Image from 'next/image';
import HeroImg from '@/public/images/hero.png';
import LiquidUnionCard from '../testimonial/LiquidUnionCard';
import HeroSearch from './HeroSearch';
import HeroSubtitle from './HeroSubtitle';
import HeroTitle from './HeroTitle';
import Hotspot from '../testimonial/Hotspot';

export default function HeroSection() {
  return (
    <section className="w-full relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <div className="flex flex-col items-center justify-center w-full pointer-events-auto lg:mt-[153px] md:mt-[70px] mt-2">
          <HeroTitle />
          <HeroSubtitle />
          <div className="lg:mt-[47px] mt-3">
            <HeroSearch />
          </div>
        </div>
      </div>
      <div className="relative w-full aspect-1440/1084">
        <Image
          src={HeroImg}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />

        <div
          className="absolute z-30 flex items-center flex-col top-[51.1%] left-[17.2%]"
        >
          <LiquidUnionCard />
          <Hotspot InnerClassname='w-[18px] h-[18px]' outerClassname='w-[56px] h-[56px]' />

        </div>
        <div
          className="absolute z-30 flex items-center flex-col top-[68.6%] left-[7.1%]"
        >
          <Hotspot InnerClassname='w-[10px] h-[10px]' outerClassname='w-[32px] h-[32px]' />

        </div>
        <div
          className="absolute z-30 flex items-center flex-col top-[71.7%] left-[55.5%]"
        >
          <Hotspot InnerClassname='w-[10px] h-[10px]' outerClassname='w-[32px] h-[32px]' />

        </div>
        <div
          className="absolute z-30 flex items-center flex-col top-[74.6%] right-[2.4%]"
        >
          <Hotspot InnerClassname='w-[12px] h-[12px]' outerClassname='w-[37px] h-[37px]' />

        </div>
      </div>
    </section>
  );
}