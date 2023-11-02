export default function Home() {
  return (
    <>
      <div className="px-4 py-2"></div>
      <iframe
        src="http://localhost:3001/home"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        className="h-[50vh] w-[50dvw] border"
      ></iframe>
    </>
  );
}
