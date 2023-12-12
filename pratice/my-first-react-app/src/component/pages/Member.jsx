import { useState } from "react";
import "../../css/member.css";
import { Link } from "react-router-dom";

import {initData} from '../func/mem_fn.js';

export function Member(){

    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');
    const [chkPwd, setChkPwd] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [chkPwdError, setChkPwdError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const msgId = [
        "User ID must contain a minimum of 5 characters",
        "This ID is already in use!",
        "That's a great ID!",
    ];

    const msgEtc = {
        // 비밀번호
        pwd: "5 to 15 digits in the form of special characters, characters, and numbers",
        // 비밀번호 확인
        confPwd: "Password verification does not match",
        // 필수입력
        req: "This is a required entry",
        // 이메일
        email: "Please enter a valid email format",
    };

    const [idMsg, setIdMsg] = useState(msgId[0]);

    // 아이디 유효성 검사
    const changeUserId = e => {
        const valid =  /^[A-Za-z0-9+]{5,}$/;
        if(valid.test(e.target.value)){
            initData();
            let memData = localStorage.getItem('mem-data');
            memData = JSON.parse(memData);

            let isOk = true;

            memData.forEach((v) => {
                if(v.uid === e.target.value){
                    setIdMsg(msgId[1]);
                    setUserIdError(true);
                    isOk = false;
                }
            });

            if(isOk){
                setIdMsg(msgId[0]);
                setUserIdError(false);
            }
        }else{
            setUserIdError(true);
        }

        setUserId(e.target.value);
    };

    const changePwd = (e) => {
        const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        if(valid.test(e.target.value)) setPwdError(false);
        else setPwdError(true);

        setPwd(e.target.value);
    }

    const changeChkPwd = (e) => {
        if(pwd === e.target.value) setChkPwdError(false);
        else setChkPwdError(true);

        setChkPwd(e.target.value);
    };

    const changeUserName = e => {
        if(e.target.value !== '') setUserNameError(false);
        else setUserNameError(true);
        setUserName(e.target.value);
    }

    const changeEmail = e => {
        const valid = 
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(valid.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const totalValid = () => {
        if(!userId) setUserIdError(true);
        if(!pwd) setPwdError(true);
        if(!chkPwd) setChkPwdError(true);
        if(!userName) setUserNameError(true);
        if(!email) setEmailError(true);

        if(userId&& pwd && chkPwd && userName && email && !userIdError && !pwdError && !chkPwdError && !userNameError && !emailError) return true;
        else return false;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(totalValid()){
            initData();
            let memData = localStorage.getItem('mem-data');
            memData = JSON.parse(memData);

            let newData = {
                idx : memData.length + 1,
                uid : userId,
                pwd : pwd,
                unm : userName,
                eml : email
            };

            memData.push(newData);

            localStorage.setItem('mem-data', JSON.stringify(memData));
            document.querySelector('.sbtn').innerText = '넌 이제 회원인거야~!';
        }else{
            alert('Change your input!');
        }
    }

    return(
        <>
            <div className="outbx">
                <div className="membx">
                    <h2>Join Us</h2>
                    <form action="process.php" method="post">
                        <ul>
                            <li>
                                <label> ID :</label>
                                <input type="text" maxLength="20" placeholder="Plese enter your ID" value={userId} onChange={changeUserId} />
                                {
                                    userIdError && (
                                        <div className="msg">
                                            <small style={{ color : 'red', fontSize : '10px'}}>
                                                {idMsg}
                                            </small>
                                        </div>
                                    )
                                }
                                {
                                    !userIdError && userId && (
                                        <div className="msg">
                                            <small style={{color : 'green', fontSize : '10px'}}>{msgId[2]}</small>
                                        </div>
                                    )
                                }
                            </li>
                            <li>
                                <label>Password : </label>
                                <input type="password" max="20" placeholder="Please enter your Password" value={pwd} onChange={changePwd}/>
                                {
                                    pwdError && (
                                        <div className="msg">
                                            <small style={{
                                                color : 'red', fontSize : '10px'
                                            }}>{msgEtc.pwd}</small>
                                        </div>
                                    )
                                }
                            </li>
                            <li>
                                <label>Confirm Password :</label>
                                <input type="password" maxLength="20" placeholder="Please enter your Confirm Password" value={chkPwd} onChange={changeChkPwd} />
                                {
                                    chkPwdError && (
                                        <div className="msg">
                                            <small style={{
                                                color : 'red', fontSize : '10px'
                                            }}>{msgEtc.confPwd}</small>
                                        </div>
                                    )
                                }
                            </li>
                            <li>
                                <label> User Name : </label>
                                <input type="text" maxLength="20" placeholder="Please enter your Name" value={userName} onChange={changeUserName} />
                                {
                                    userNameError && (
                                        <div className="msg">
                                            <small style={{color : 'red', fontSize : '10px'}}>{msgEtc.req}</small>
                                        </div>
                                    )
                                }
                            </li>
                            <li>
                                <label> Email : </label>
                                <input type="text" maxLength="20" placeholder="Please enter your Email" value={email} onChange={changeEmail} />
                                {
                                    emailError && (
                                        <div className="msg">
                                            <small style={{
                                                color : 'red', fontSize : '10px'
                                            }}>{msgEtc.email}</small>
                                        </div>
                                    )
                                }
                            </li>
                            <li style={{overflow : 'hidden'}}>
                                <button className="sbtn" onClick={onSubmit}>
                                    Submit
                                </button>
                            </li>
                            <li>
                                Are you already a Member?
                                <Link to='/login'>Log In</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
}