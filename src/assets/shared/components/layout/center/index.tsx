import React from "react";
import MainLayout from "../MainLayout";

const Center = (props) => {
    const { children } = props;
    return (
        <>
            <MainLayout>{children}</MainLayout>
        </>
    );
};
export default Center;
