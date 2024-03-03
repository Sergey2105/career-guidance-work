import Layout from "@/assets/shared/components/layout/MainLayout";
import Center from "@/assets/shared/components/layout/center";
import EventPage from "@/assets/shared/components/pages/Meeting";
import MeetingView from "@/assets/shared/components/pages/Meeting/MeetingView";
import { NextPage } from "next";

const MeetingViewPage: NextPage = () => {
    return (
        <Center>
            <MeetingView />
        </Center>
    );
};

export default MeetingViewPage;
