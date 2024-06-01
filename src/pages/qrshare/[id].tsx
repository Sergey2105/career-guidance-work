import { useRouter } from "next/router";
import Center from "@/assets/shared/components/layout/Center";
import Profile from "@/assets/shared/components/pages/Profile";
import { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import QrShare from "@/assets/shared/components/QrShare";

const QrSharePage: NextPage = () => {
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
                <title>Профиль</title>
            </Head>

            <Center>
                <QrShare />
            </Center>
        </>
    );
};

export default QrSharePage;
