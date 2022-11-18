import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "/components";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Shop App</title>
      </Head>
      <div className="h-[98.5vh] w-[100vw] grid grid-rows-[0.1fr_auto_0.1fr]">
        <header>
          <Navbar />
        </header>
        <main className="w-full">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
