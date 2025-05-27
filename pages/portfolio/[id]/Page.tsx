import React from "react";
import { Navbar } from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <h1>ID: {params.id}</h1>
      <Footer />
    </>
  );
}
