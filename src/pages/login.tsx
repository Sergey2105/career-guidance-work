import Center from "@/assets/shared/components/layout/center";
import Login from "@/assets/shared/components/pages/Login";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
    const router = useRouter();

    if (typeof window !== "undefined") {
        const token = localStorage.getItem("userToken");
        if (token !== null) {
            router.push("/");
        }
    }
    return (
        <>
            <Head>
                <title>Вход</title>
            </Head>

            <Center>
                <Login />
            </Center>
        </>
    );
};

export default LoginPage;
