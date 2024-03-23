import Layout from "@/assets/shared/components/layout/MainLayout";
import Center from "@/assets/shared/components/layout/Center";
import HomePage from "@/assets/shared/components/pages/Home";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>

            <Center>
                <HomePage />
            </Center>
        </>
    );
};

export default Home;
