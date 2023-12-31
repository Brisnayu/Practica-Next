import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ products }: Props) => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Bienvenido a mi tienda de mascotas!</h1>

        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <h3>{product.description}</h3>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response: Product[] = await fetch(
    "https://my-json-server.typicode.com/brisnayu/shop-api/productos"
  ).then(res => res.json());

  return {
    props: {
      products: response,
    },
  };
};

export type Props = {
  products: Product[];
};

export default Home;
