import { useUserStore } from "../../store/user.store";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const removeUser = useUserStore((state) => state.removeUser);
    const navigate = useNavigate();

    const handleLogout = () => {
        removeUser();
        navigate("/signin");
    };

    return {handleLogout}
}