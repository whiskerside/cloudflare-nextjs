import Link from "next/link";
import Image from "next/image";
const game = {
  id: "59982",
  title: "Shape Transform Shifting Rush",
  description:
    "Ready to begin the shape-shifting parkour challenge? Keep racing through a world full of speed and creativity in Shape Transform: Shifting Rush! In this dynamic running game, you will control a character that can change shape.",
  instructions: "Mouse click or tap to play ",
  url: "https://html5.gamemonetize.com/66xr4mtstd58pvnyubwewdadcn5lms7n/",
  category: "Racing",
  tags: "running, Stickman, transport",
  thumb:
    "https://img.gamemonetize.com/66xr4mtstd58pvnyubwewdadcn5lms7n/512x384.jpg",
  width: "720",
  height: "1280",
};
export default function HeroGame() {
  return (
    <div className="container mt-10 p-4">
      <iframe src={game.url} width={`100%`} height={`600px`} />
    </div>
  );
}
