import { useEffect } from "react";
import { useRouter } from "next/router";
import { joinQR } from "../store/slice/eventSlice";
import { useDispatch } from "../store/hooks";

const QrHandler = ({ id, meetings }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        const source = router.query.source;

        if (source !== "qr") {
            router.push("/"); // Перенаправление на главную страницу, если переход не через QR-код
            return;
        }

        if (token) {
            dispatch(joinQR({ id: "1" }))
                .then(() => {
                    router.push("/success"); // Успешное завершение
                })
                .catch((error) => {
                    console.error(error);
                    router.push("/error"); // Обработка ошибок
                });
        } else {
            localStorage.setItem("redirectAfterLogin", `/meeting/${id}/?source=qr`);
            router.push("/login"); // Перенаправление на страницу входа
        }
    }, []);

    return null; // Компонент не рендерит ничего
};

export default QrHandler;
