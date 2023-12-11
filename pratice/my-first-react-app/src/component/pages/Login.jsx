import { useState } from "react";
import { initData } from "../func/mem_fn";
import "../../css/member.css";

export function Login(){

    const [userId, setUserId] = useState('');
    const [pwd, setPwd] = useState('');

    const [userIdError, setUserIdError] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const msgId = [
        "This is a required entry", //필수입력
        "ID does not exist", //아이디가 존재하지 않습니다
    ];

    const msgPwd = [
        // 비밀번호
        "This is a required entry", //필수입력
        "Password doesn't match", //비밀번호가 일치하지 않습니다
    ];

    const [idMsg, setIdMsg] = useState(msgId[0]);
    const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);

    const changeUserId = e => {
        if(e.target.value !== '') setUserIdError(false);
        else{
            setIdMsg(msgId[0]);
            setUserIdError(true);
        }
        setUserId(e.target.value);
    };

    const changePwd = e => {
        if(e.target.value !== '') setPwdError(false);
        else{
            setPwdMsg(pwdMsg[0]);
            setPwdError(true);
        }
        setPwd(e.target.value);
    };

    const totalValid = () => {
        if(!userId) setUserIdError(true);
        if(!pwd) setPwdError(true);

        if(userId && pwd) return true;
        else return false;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(totalValid()){
            initData();
            let memData = localStorage.getItem('mem-data');
            memData = JSON.parse(memData);
            let isNOT = true;

            memData.forEach((v) => {
                if(v['uid'] === userId){
                    console.log('아이디가 같아요!!');
                    setUserIdError(false);
                    isNOT = false;

                    if(v['pwd'] === pwd){
                        console.log('비번이 같아요 ');
                        setPwdError(false);
                    }else{
                        console.log('비번이 달라요');
                        setPwdMsg(pwdMsg[1]);
                        setPwdError(true);
                    }
                }
            });

            if(isNOT){
                console.log('아이디가 달라요');
                setIdMsg(msgId[1]);
                setUserIdError(true);
            }
        }else{
            console.log('실패')
        }
    };

    return(
        <div className="outbx">
            <section className="membx" style={{minHeight : '300px'}}>
                <h2>LOG IN</h2>
                <form action="process.php" method="post">
                    <ul>
                        <li>
                            <label>ID : </label>
                            <input type="text" maxLength="20" placeholder="Please enter your ID" value={userId} onChange={changeUserId} />
                            {
                                userIdError && (
                                    <div className="msg">
                                        <small style={{color : 'red', fontSize10px}}>{idMsg}</small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            <label>Password : </label>
                            <input type="passowrd" maxLength="20" placeholder="Please Enter your Password" value={pwd} onChange={changePwd} />
                            {
                                pwdError && (
                                    <div className="msg">
                                        <small style={{color : 'red', fontSize : '10px'}}>{pwdMsg}</small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            <button className="sbtn" onClick={onSubmit}>Submit</button>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    );  
}