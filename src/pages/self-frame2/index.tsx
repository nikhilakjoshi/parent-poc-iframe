import React from "react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

interface Props {
  data: string;
}

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      cookie: ctx.req.headers.cookie,
    },
  };
};

export default function SelfFrame2({
  cookie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1 className="m-4 p-4 text-xl font-bold">{cookie ?? "No cookie"}</h1>;
}
