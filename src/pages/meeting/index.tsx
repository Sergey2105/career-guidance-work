import Layout from "@/assets/shared/components/layout/MainLayout";
import Center from "@/assets/shared/components/layout/Center";
import Meeting from "@/assets/shared/components/pages/Meeting";
import { NextPage } from "next";
import Head from "next/head";

const MeetingPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Мероприятия</title>
            </Head>

            <Center>
                <Meeting />
            </Center>
        </>
    );
};

export default MeetingPage;
