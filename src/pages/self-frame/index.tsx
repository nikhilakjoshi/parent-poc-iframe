import { useCallback, useEffect } from "react";
export default function SelfFrame() {
  const formPost = useCallback(async () => {
    const response = await fetch(
      "https://child-poc-iframe.vercel.app/api/getToken",
      {
        method: "GET",
      },
    );
    const json = await response.json();
    console.log({ json });
  }, []);
  useEffect(() => {
    formPost();
  }, []);
  return <div className="">Self frame</div>;
}
