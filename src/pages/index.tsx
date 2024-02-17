import Layout from "@/assets/shared/components/layout/MainLayout";
import Center from "@/assets/shared/components/layout/center";
import HomePage from "@/assets/shared/components/pages/Home";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <Center>
            <HomePage />
        </Center>
    );
};

export default Home;
