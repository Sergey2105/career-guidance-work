import Center from "@/assets/shared/components/layout/Center";
import Information from "@/assets/shared/components/pages/Information";
import { NextPage } from "next";
import Head from "next/head";

const info: NextPage = () => {
    return (
        <>
            <Head>
                <title>Информация</title>
            </Head>
            <Center>
                <Information />
            </Center>
        </>
    );
};

export default info;
