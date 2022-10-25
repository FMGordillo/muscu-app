import Head from "next/head";
import type { FunctionComponent, ReactNode } from "react";
import { APP_NAME } from "../../utils/constants";

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  title = APP_NAME,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
