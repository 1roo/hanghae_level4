import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Home = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const token = cookie.get("accessToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <div>
        <div>
          <h1>무엇을 할까요?</h1>
          <button
            title="할일 기록하기"
            onClick={() => { }}
          />
          <button
            title="TODO LIST"
            onClick={() => { }}
          />
        </div>
      </div>

    </>
  );
}

export default Home;