import Link from "next/link";
import Image from "next/image";
export default function HeroGame() {
  return (
    <div className="container max-w-screen-lg mx-auto items-center justify-center mt-10 p-4">
      <iframe
        width={"1024px"}
        height={"720px"}
        src="https://iframegame.com/embed/corruptbox3-x-sprunki/index.html"
        title="Sprunki Corruptbox | corruptbox.im"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
