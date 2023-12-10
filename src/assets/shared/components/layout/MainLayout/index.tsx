import Header from "../header";
import Footer from "../footer";

const MainLayout = (props: { children: any }) => {
    const { children } = props;
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};
export default MainLayout;
