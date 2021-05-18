import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ authors, children }) {
  return (
    <>
      <NavBar authors={authors} />
      {children}
      <Footer />
    </>
  );
}
