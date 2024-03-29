import Image from "next/image";
import Castle from "@/images/disneyCastle.png";
import CastleGIF from "@/images/disneyCastleGif.gif";


function CastleBanner() {
  return (
    <div className="overflow-hidden md:-mt-0 relative cursor-pointer">
        <div className="flex">
            <div className="flex-full min-w-0 relative">
                <Image 
                    alt="Disney Studio Castle"
                    width={1920}
                    height={810}
                    src={CastleGIF}
                    unoptimized
                    priority
                />
            </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/5 to-[#1A1C29]" />
        
    </div>
  )
}

export default CastleBanner;