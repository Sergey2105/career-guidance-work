import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import notFound from "/public/img/404.png";
import Center from "@/assets/shared/components/layout/center";

const NotFound: NextPage = () => {
    return (
        <Center title="NotFound">
            <Image src={notFound} alt="NotFound" />
        </Center>
    );
};
export default NotFound;
