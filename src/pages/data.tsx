import Loader from "@/assets/shared/components/Loader";
import Layout from "@/assets/shared/components/layout/MainLayout";
import Center from "@/assets/shared/components/layout/Center";
import Data from "@/assets/shared/components/pages/Data";
import HomePage from "@/assets/shared/components/pages/Home";
import { selectUserFull } from "@/assets/shared/components/store/slice/authSlice";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
    const router = useRouter();

    if (typeof window !== "undefined") {
        const token = localStorage.getItem("userToken");
        if (token === null) {
            router.push("/login");
        }
    }
    return (
        <>
            <Head>
                <title>Изменение персональных данных</title>
            </Head>

            <Center>
                <Data />
            </Center>
        </>
    );
};

export default Home;
