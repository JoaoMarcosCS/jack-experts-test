import { ReactNode, useEffect } from "react";
import { useUserStore } from "../store/user.store"
import { useNavigate } from "react-router-dom";

interface AuthGuardProps {
    children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {

    const accessToken = useUserStore((state) => state.user?.accessToken);
    const navigate = useNavigate();

    useEffect(() => {

        if (!accessToken || accessToken == undefined) {
            navigate("/signin");
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}