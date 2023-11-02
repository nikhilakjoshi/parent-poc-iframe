import { useCallback, useEffect } from "react";
export default function SelfFrame() {
  const formPost = useCallback(async () => {
    const response = await fetch(
      "https://child-poc-iframe.vercel.app/api/getToken",
      {
        method: "GET",
      },
    );
    const headers = response.headers;
    headers.forEach((a, b) => {
      console.log(a, b);
    });
  }, []);
  useEffect(() => {
    formPost();
  }, []);
  return <div className="">Self frame</div>;
}
