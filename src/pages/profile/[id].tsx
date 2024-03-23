import { useRouter } from "next/router";
import Center from "@/assets/shared/components/layout/Center";
import Profile from "@/assets/shared/components/pages/Profile";
import { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";

const ProfilePage: NextPage = () => {
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
                <Profile />
            </Center>
        </>
    );
};

export default ProfilePage;
