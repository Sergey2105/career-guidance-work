import Layout from "@/assets/shared/components/layout/MainLayout";
import Center from "@/assets/shared/components/layout/center";
import EventPage from "@/assets/shared/components/pages/Events";
import { NextPage } from "next";

const events: NextPage = () => {
    return (
        <Center title="Мероприятия">
            <EventPage />
        </Center>
    );
};

export default events;
