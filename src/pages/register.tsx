import Center from "@/assets/shared/components/layout/center";
import Login from "@/assets/shared/components/pages/Login";
import Register from "@/assets/shared/components/pages/Register";
import { NextPage } from "next";

const RegisterPage: NextPage = () => {
    return (
        <Center>
            <Register />
        </Center>
    );
};

export default RegisterPage;
