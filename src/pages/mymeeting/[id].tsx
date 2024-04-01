import Center from "@/assets/shared/components/layout/Center";
import CreateMeetingView from "@/assets/shared/components/pages/Meeting/CreateMeetingView";
import { useSelector } from "@/assets/shared/components/store/hooks";
import { selectEventProps } from "@/assets/shared/components/store/slice/eventSlice";
import { NextPage } from "next";
import Head from "next/head";

const MeetingViewPage: NextPage = () => {
    const event = useSelector(selectEventProps);

    return (
        <>
            <Head>
                <title>{event.title}</title>
            </Head>

            <Center>
                <CreateMeetingView />
            </Center>
        </>
    );
};
export default MeetingViewPage;
