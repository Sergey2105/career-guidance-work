import Center from "@/assets/shared/components/layout/Center";
import { NextPage } from "next";
import Head from "next/head";
import CreateMeeting from "@/assets/shared/components/pages/CreateMeeting";

const MeetingPage: NextPage = () => {
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
