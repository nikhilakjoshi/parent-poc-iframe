import { useCallback, useEffect } from "react";
export default function SelfFrame() {
  const formPost = useCallback(async () => {
    const response = await fetch(
      "https://child-poc-iframe.vercel.app/api/getToken",
      {
        method: "GET",
      },
    );
    console.log(JSON.stringify(response.headers));
  }, []);
  useEffect(() => {
    formPost();
  }, []);
  return <div className="">Self frame</div>;
}
