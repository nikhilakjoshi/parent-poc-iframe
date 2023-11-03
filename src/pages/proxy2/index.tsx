import type { GetServerSidePropsContext } from "next";

export const getServerSideProps = ({ res }: GetServerSidePropsContext) => {
  res.setHeader(
    "Set-Cookie",
    `token=${new Date()
      .getTime()
      .toString(
        36,
      )}; Domain=.parent-poc-iframe.vercel.app; path=/self-frame2; Secure; HttpOnly; SameSite=None;`,
  );
  return {
    redirect: {
      destination: "/self-frame2",
      permanent: true,
    },
  };
};
export default function Proxy2() {
  return <div className="">Hello Proxy</div>;
}
