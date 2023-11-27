import Layout from "@/components/layout/Layout";
import EventPage from "@/components/screens/Events";
import { NextPage } from "next";

const events: NextPage = () => {
  return (
    <Layout title="Мероприятия">
      <EventPage />
    </Layout>
  );
};

export default events;
