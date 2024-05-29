import Image from "next/image";

export default function TopLeftImg() {
  return (
    <Image
      src={"/splash.png"}
      width={1000}
      height={1000}
      className="fixed -z-10 top-0 left-0 w-auto h-auto"
      alt="splash image on top"
      priority
    ></Image>
  );
}
