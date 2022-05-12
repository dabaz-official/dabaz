import React from "react";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
    <Image src="/assets/logo.svg" width={22} height={22} />
    <a href="https://www.instagram.com/dabaz_luvs_hot_girls/" target="_blank">Instagram</a>
    <a href="https://twitter.com/dab_az" target="_blank">Twitter</a>
    <a href="https://github.com/dabaz-official" target="_blank">Github</a>
    <a href="mailto:dieboldhan123@gmail.com">E-mail</a>
  </footer>
)

export default Footer