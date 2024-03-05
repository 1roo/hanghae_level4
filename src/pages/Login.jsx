import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {

  const navigate = useNavigate();
  const { user, loginHandler, changeHandler } = useLogin();

  return (
    <>
      <h1>로그인</h1>

      <form onSubmit={(e) => loginHandler(e, user)}>
        <label>아이디</label>
        <input type="text"
          name='id'
          value={user.id}
          onChange={changeHandler} />

        <label>비밀번호</label>
        <input type="password"
          name='password'
          value={user.password}
          onChange={changeHandler} />

        <button type="submit">로그인</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signUp");
          }}>회원가입</button>

      </form>

    </>
  )
};

export default Login;
