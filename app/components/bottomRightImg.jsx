import Image from "next/image";

export default function BottomRightImg() {
  return (
    <div className="fixed mix-blend-color-dodge animate-pulse opacity-2 duration-75 -z-10 bottom-0 right-0">
      <Image
        src={"/circles.jpeg.webp"}
        width={1000}
        height={1000}
        className="w-full h-full "
        alt="splash image on bottom"
      ></Image>
    </div>
  );
}
