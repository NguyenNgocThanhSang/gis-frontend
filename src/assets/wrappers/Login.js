import styled from "styled-components";

const Wrapper = styled.section`
    body {
        background: url();
    }

    .wrapper {
        width: 420px;
        background: #2cb1bc;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        padding: 30px 40px;
    }

    .wrapper h1 {
        font-size: 36px;
        text-align: center;
        font-family: monospace;
        font-weight: bold;
    }

    .wrapper .input-box {
        position: relative;
        width: 100%;
        height: 50px;
        /* background: yellowgreen; */
        margin: 30px 0;
    }

    .input-box input {
        width: 100%;
        height: 100%;
        background: transparent;
        outline: none;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder {
        color: #fff;
    }

    .input-box .icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
    }

    .wrapper .remember-forgot {
        display: flex;
        justify-content: space-around;
        font-size: 14.5px;
        margin: -15px 0 15px;
    }

    .remember-forgot label input {
        accent-color: #fff;
        text-decoration: none;
    }

    .remember-forgot .forgot {
        color: #fff;
    }

    .remember-forgot .forgot:hover {
        text-decoration: underline;
    }

    .wrapper button {
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 700;
    }
    
    .wrapper .register-link {
        font-size: 14.5px;
        text-align: center;
        margin: 20px 0 15px;
    }

    .register-link div .register {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }

    .register-link div .register:hover {
        text-decoration: underline;
    }
`;
export default Wrapper;
