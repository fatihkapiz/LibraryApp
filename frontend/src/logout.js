import { useNavigate } from "react-router-dom";

export default function logout() {
    const navigate = useNavigate();
    localStorage.clear();
    navigate("/");
}