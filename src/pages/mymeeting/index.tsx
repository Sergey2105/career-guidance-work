import Center from "@/assets/shared/components/layout/Center";
import { NextPage } from "next";
import Head from "next/head";
import CreateMeeting from "@/assets/shared/components/pages/Meeting/CreateMeeting";
import { useRouter } from "next/router";

const MeetingPage: NextPage = () => {
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
                <title>Мои мероприятия</title>
            </Head>

            <Center>
                <CreateMeeting />
            </Center>
        </>
    );
};

export default MeetingPage;
