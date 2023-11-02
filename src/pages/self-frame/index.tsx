import { useCallback, useEffect } from "react";
export default function SelfFrame() {
  const formPost = useCallback(async () => {
    const response = await fetch(
      "https://child-poc-iframe.vercel.app/api/getToken",
      {
        method: "POST",
      },
    );
    console.log(JSON.stringify(response));
  }, []);
  useEffect(() => {
    formPost();
  }, []);
  return <div className="">Self frame</div>;
}
