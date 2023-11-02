import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
export default function SelfFrame() {
  const router = useRouter();
  const formPost = useCallback(async () => {
    const response = await fetch(
      "https://child-poc-iframe.vercel.app/api/getToken",
      {
        method: "GET",
      },
    );
    const json = (await response.json()) as {
      message?: string;
      location?: string;
    };
    if (json.location) {
      router.replace(json.location);
    }
  }, []);
  useEffect(() => {
    formPost();
  }, []);
  return <div className="">Self frame</div>;
}
