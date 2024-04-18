'use client'
import Image from "next/image";
import Nav from "@/components/nav";
// import Footer from "@/components/footer";
import Hero from "@/components/hero"
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";


export default function Home() {
  
  return (
    <main className="">
      <Hero />
      <Footer />
    </main>
  );
}
