import React, { FC, PropsWithChildren } from "react";
import MainLayout from "../MainLayout";
import Meta from "../../seo/Meta";
import { IMeta } from "../../seo/meta.interface";

const Center: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
    return (
        <>
            <Meta title={title} description={description}>
                <MainLayout>{children}</MainLayout>
            </Meta>
        </>
    );
};
export default Center;
