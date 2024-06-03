import Image from "next/image";

export default function BottomRightImg() {
  return (
    <div className="absolute mix-blend-color-dodge animate-pulse duration-75 z-10 -right-16 -bottom-2">
      <Image
        src={"/circles.jpeg.webp"}
        width={1000}
        height={1000}
        className="w-full h-full "
        alt="splash image on top"
      ></Image>
    </div>
  );
}
