import { useRouter } from "next/router";
import Center from "@/assets/shared/components/layout/Center";
import Reset from "@/assets/shared/components/pages/Reset";
import { NextPage } from "next";
import Head from "next/head";

const ResetPage: NextPage = () => {
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
                <title>Сброс пароля</title>
            </Head>

            <Center>
                <Reset />
            </Center>
        </>
    );
};

export default ResetPage;
