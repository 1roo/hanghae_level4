import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { IoIosHome } from "react-icons/io";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // cookie 객체를 useMemo를 사용하여 캐싱.
    const cookie = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        const token = cookie.get("accessToken");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [cookie]);

    const handleLogout = () => {
        cookie.remove("accessToken");
        cookie.remove("id");
        setIsLoggedIn(false);
        window.alert('로그아웃 완료');
        navigate("/login");
    };


    return (
        <>
            <div>
                <IoIosHome onClick={() => { navigate("/") }} />
                {isLoggedIn && (
                    <span onClick={() => { handleLogout(); }}>
                        로그아웃</span>
                )}
            </div>
        </>
    )
}

export default Header;