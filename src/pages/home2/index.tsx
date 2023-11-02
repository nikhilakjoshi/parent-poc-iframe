import clsx from "clsx";
import { Rubik } from "next/font/google";
const font = Rubik({
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <>
      <main className={clsx(font.className, "container mx-auto")}>
        <div className="px-4 py-2 text-xl font-semibold">Parent Frame</div>
        <div className="px-4 py-2">
          <iframe
            allow="web-share"
            src="https://parent-poc-iframe.vercel.app/self-frame"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-storage-access-by-user-activation"
            className="h-[45dvh] w-full border"
          ></iframe>
        </div>
      </main>
    </>
  );
}
