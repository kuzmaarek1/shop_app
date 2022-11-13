import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "/components";

const Layout = ({ children }) => {
  return (
    <div className="p-2.5">
      <Head>
        <title>Shop App</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="m-auto w-full max-w-[1400px]">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
