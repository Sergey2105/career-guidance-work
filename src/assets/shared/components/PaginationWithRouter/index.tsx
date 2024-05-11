import { useRouter } from "next/router";
import { useEffect } from "react";
import Pagination from "../Pagination";

const PaginationWithRouter = (props) => {
    const { onChange, currentButton, noNavigation } = props;
    const router = useRouter();

    useEffect(() => {
        if (!noNavigation) {
            router.replace(
                {
                    pathname: "/meeting",
                    query: { page: currentButton },
                },
                undefined,
                { shallow: true },
            );
        }
    }, [currentButton, noNavigation, router]);

    return <Pagination {...props} />;
};

export default PaginationWithRouter;
