import Layout from "@/assets/shared/components/layout/MainLayout";
import Center from "@/assets/shared/components/layout/center";
import EventPage from "@/assets/shared/components/pages/Meeting";
import { NextPage } from "next";

const Meeting: NextPage = () => {
    return (
        <Center>
            <EventPage />
        </Center>
    );
};

export default Meeting;
