import Center from "@/assets/shared/components/layout/center";
import { useRouter } from "next/router";
import Register from "@/assets/shared/components/pages/Register";
import { NextPage } from "next";
import Head from "next/head";

const RegisterPage: NextPage = () => {
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
                <title>Регистрация</title>
            </Head>

            <Center>
                <Register />
            </Center>
        </>
    );
};

export default RegisterPage;
