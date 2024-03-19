import Layout from "@/assets/shared/components/layout/MainLayout";
import Center from "@/assets/shared/components/layout/center";
import EventPage from "@/assets/shared/components/pages/Meeting";
import { NextPage } from "next";
import Head from "next/head";

const Meeting: NextPage = () => {
    return (
        <>
            <Head>
                <title>Мероприятия</title>
            </Head>

            <Center>
                <EventPage />
            </Center>
        </>
    );
};

export default Meeting;
