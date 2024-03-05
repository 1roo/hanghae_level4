import React from 'react'
import { useNavigate } from 'react-router-dom'
import useSignUp from '../hooks/useSignUp';

const SignUp = () => {

    const navigate = useNavigate();
    const { user, changeHandler, signUpHandler } = useSignUp();

    return (
        <>
            <h1>회원가입</h1>

            <form onSubmit={(e) => signUpHandler(e, user)}>
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

                <button>회원가입</button>
                <button
                    type="button"
                    onClick={() => {
                        navigate("/login");
                    }}>로그인하기</button>

            </form>
        </>
    )
}

export default SignUp