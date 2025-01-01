import { items } from "./items";
import Link from "next/link";
import Image from "next/image";

export default function Grid() {
  return (
    <section className="pb-20">
      <div className="container p-4">
        <div className="mb-10">
          <h2 className="mb-2 text-center md:text-3xl font-semibold">
            Recommended Games
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {items.slice(0, 16).map((item, i) => (
            <div className="rounded-lg p-0.5 bg-gray-200" key={i}>
              <Link href={`/game/${item.id}`}>
                <Image
                  src={item.thumb}
                  width={`300`}
                  height={`150`}
                  alt={item.title}
                  className="rounded-t-lg"
                />
              </Link>
              <div className="rounded-b-lg bg-gray-200 p-2">
                <h3 className="text-center text-sm truncate max-w-[90%]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
