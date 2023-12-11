// 로그인 페이지 컴포넌트 - Login.jsx

// 디자인은 회원가입과 동일!
import { useState } from "react";
import "../../css/member.css";

// 제이쿼리
import $ from "jquery";

export function Login() {

    // [ 상태관리변수 ]
    // [1] 입력요소 상태변수 ///////////
    // 1. 아이디 변수
    const [userId, setUserId] = useState("");
    // 2. 비밀번호 변수
    const [pwd, setPwd] = useState("");
    
    // [2] 에러상태관리 변수
    // -> 에러상태값 초기값은 에러 아님 (false)
    // 1. 아이디 변수
    const [userIdError, setUserIdError] = useState(false);
    // 2. 비밀번호 변수
    const [pwdError, setPwdError] = useState(false);

    // [ 아이디 관련 메시지 프리셋 ] //////////
    const msgId = [
        "User ID must contain a minimum of 5 characters",
        "This ID is already in use!",
        "That's a great ID!",];
    // [ 기타 메시지 프리셋 ]
    const msgEtc = {
        // 비밀번호
        pwd: "5 to 15 digits in the form of special characters, characters, and numbers",
        // 비밀번호 확인
        confPwd: "Password verification does not match",
        // 필수입력
        req: "This is a required entry",
        // 이메일
        email: "Please enter a valid email format",
    }; // msgEtc ////////////////

    // [3] 에러 메시지 상태변수
    const [idMsg, setIdMsg] = useState(msgId[0]);

    // 리턴코드 //////////////////////////////////////////
    return (
        <>
            <div className="outbox">
                {/* 모듈코드 */}
                <section className="membx">
                    <h2>LOG IN</h2>
                    <form method="post" action="process.php">
                        <ul>
                            <li>
                                {/* 1. 아이디 */}
                                <label>ID : </label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    placeholder="Please enter your ID"
                                    value={userId}
                                    onChange={changeUserId}
                                />
                                {
                                    // 에러일 경우 메시지 출력
                                    // 조건문 && 요소
                                    userIdError && (
                                        <div className="msg">
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                {idMsg}
                                            </small>
                                        </div>
                                    )
                                }
                                {
                                    // 통과시 메시지 출력
                                    // 조건문 && 요소
                                    // 조건 추가 : userId가 입력전일때 안보임처리
                                    // userId가 입력전엔 false로 리턴됨!
                                    !userIdError && userId && (
                                        <div className="msg">
                                            <small
                                                style={{
                                                    color: "green",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                {msgId[2]}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                            <li>
                                {/* 2. 비밀번호 */}
                                <label>Password : </label>
                                <input
                                    type="password"
                                    maxLength="20"
                                    placeholder="Please enter your Password"
                                    value={pwd}
                                    onChange={changePwd}
                                />
                                {
                                    // 에러시 메시지 출력
                                    pwdError && (
                                        <div className="msg">
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                {msgEtc.pwd}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                        </ul>
                    </form>
                </section>
            </div>
        </>
    );
}
