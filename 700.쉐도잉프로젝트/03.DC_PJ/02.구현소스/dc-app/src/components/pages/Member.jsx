// DC PJ 회원가입 페이지 컴포넌트

// 회원가입 CSS 불러오기
import { Link } from "react-router-dom";
import "../../css/member.css";
import { useState } from "react";

export function Member() {
    // [ 회원가입 페이지 요구사항 ]
    // -> 각 입력항목별로 유효성 검사를 실행함
    // 특이사항 : 글자를 입력할 때마다 검사
    //           + submit 버튼 작동시 검사

    // [ 상태관리변수 ]
    // [1] 입력요소 상태변수 ///////////
    // 1. 아이디 변수
    const [userId, setUserId] = useState("");
    // 2. 비밀번호 변수
    const [pwd, setPwd] = useState("");
    // 3. 비밀번호 확인 변수
    const [chkPwd, setChkPwd] = useState("");
    // 4. 사용자 이름 변수
    const [userName, setUserName] = useState("");
    // 5. 이메일 변수
    const [email, setEmail] = useState("");

    // [2] 에러상태관리 변수
    // -> 에러상태값 초기값은 에러 아님 (false)
    // 1. 아이디 변수
    const [userIdError, setUserIdError] = useState(false);
    // 2. 비밀번호 변수
    const [pwdError, setPwdError] = useState(false);
    // 3. 비밀번호 확인 변수
    const [chkPwdError, setChkPwdError] = useState(false);
    // 4. 사용자 이름 변수
    const [userNameError, setUserNameError] = useState(false);
    // 5. 이메일 변수
    const [emailError, setEmailError] = useState(false);

    // [ 아이디 관련 메시지 프리셋 ] //////////
    const msgId = [
        "User ID must contain a minimum of 5 characters",
        "This ID is already in use!",
        "That's a great ID!",
    ];

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

    ///////////////////////////////////////////////////

    // [ 유효성 검사 함수 ] ////////////////////////////
    // 1. 아이디 유효성 검사
    const changeUserId = (e) => {
        // 1. 아이디 유효성 검사식(따옴표로 싸지 말것!)
        const valid = /^[A-Za-z0-9+]{5,}$/;

        // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
        // console.log(e.target.value);

        // 3. 에러 아님 상태 if문
        // 조건 : 유효성 검사 결과가 true인가? 에러 상태가 아니면 false
        // 검사방법 : 정규식.test() -> 정규식 검사 결과 리턴 메서드
        // 결과 : true이면 에러 상태값 false
        //       false이면 에러 상태값 true
        if (valid.test(e.target.value)) {
            // 1. 사용중 아이디인지 검사 (로컬쓰 셋팅후 추가)

            // 2. 결과반영하기
            setUserIdError(false);
        } // if ////////////////
        // 에러일때 /////////////////
        else {
            setUserIdError(true);
        } // else //////////////

        // 4. 실제 userId 상태변수 값이 업데이트 되어야만 화면에 출력
        setUserId(e.target.value);
    }; // changeUserId 함수 //////////

    // 2. 비밀번호 유효성 검사
    const changePwd = (e) => {
        // 1. 비밀번호 유효성 검사식(따옴표로 싸지 말것!)
        const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        // console.log(e.target.value);

        // 3. 에러에 따른 상태값 변경
        if (valid.test(e.target.value)) setPwdError(false);
        else setPwdError(true);

        // 4. 기존 입력값 반영하기
        setPwd(e.target.value);
    }; // changeUserId 함수 //////////

    // 3. 비밀번호 확인 유효성 검사
    const changeChkPwd = (e) => {
        // 1. 비밀번호 입력내용과 일치 여부 확인
        if (pwd === e.target.value) setChkPwdError(false);
        else setChkPwdError(true);

        // 2. 기존 입력값 반영하기;
        setChkPwd(e.target.value);
    }; // changeUserId 함수 //////////

    // 4. 사용자이름 확인 유효성 검사
    const changeUserName = (e) => {
        // 1. 빈값 체크
        if (e.target.value !== "") setUserNameError(false);
        else setUserNameError(true);

        // 2. 기존 입력값 반영하기;
        setUserName(e.target.value);
    }; // changeUserId 함수 //////////

    // 5. 이메일 유효성 검사
    const changeEmail = (e) => {
        // 1. 이메일 유효성검사식(따옴표로 싸지 말것)
        const valid = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (valid.test(e.target.value)) setEmailError(false);
        else setEmailError(true);

        // 2. 기존 입력값 반영하기;
        setEmail(e.target.value);
    }; // changeUserId 함수 //////////

    // [ 전체 유효성검사 체크 함수 ] ////////////
    const totalValid = () => {
        // 1. 모든 입력창 검사 (상태변수 검사) -> 입력전 상태는 false
        // -> 빈 값일 경우 에러처리함!
        if(!userId) setUserIdError(true);
        if(!pwd) setPwdError(true);
        if(!chkPwd) setChkPwdError(true);
        if(!userName) setUserNameError(true);
        if(!email) setEmailError(true);

    }; // totalValid 함수 /////////////

    // [ 서브밋 기능함수 ] /////////////////////
    const onSubmit = e => {
        // 1. submit 기본이동 막기
        e.preventDefault();
        // 2. 유효성 검사 전체 통과시 
        if(totalValid)
    }; // onSubmit 함수 ///////////////

    // 리턴코드 /////////////////
    return (
        <>
            <div className="outbx">
                <div className="membx">
                    <h2>Join Us</h2>
                    <form action="process.php" method="post">
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
                            <li>
                                {/* 3. 비밀번호 확인 */}
                                <label>Confirm Password : </label>
                                <input
                                    type="password"
                                    maxLength="20"
                                    placeholder="Please enter your Confirm Password"
                                    value={chkPwd}
                                    onChange={changeChkPwd}
                                />
                                {
                                    // 에러시 메시지 출력
                                    chkPwdError && (
                                        <div className="msg">
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                {msgEtc.confPwd}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                            <li>
                                {/* 4. 이름 */}
                                <label>User Name : </label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    placeholder="Please enter your Name"
                                    value={userName}
                                    onChange={changeUserName}
                                />
                                {
                                    // 에러시 메시지 출력
                                    userNameError && (
                                        <div className="msg">
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                {msgEtc.req}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                            <li>
                                {/* 5. 이메일 */}
                                <label>Email : </label>
                                <input type="text" maxLength="50" placeholder="Please enter your Email"
                                value={email} onChange={changeEmail}/>
                                {
                                    // 에러시 메시지 출력
                                    emailError && (
                                        <div className="msg">
                                            <small
                                                style={{
                                                    color: "red",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                {msgEtc.email}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                            <li style={{ overflow: "hidden" }}>
                                {/* 6. 버튼 */}
                                <button className="sbtn" onClick={onSubmit}>Submit</button>
                            </li>
                            <li>
                                {/* 7. 로그인 페이지 링크 */}
                                Are you already a Member?
                                <Link to="/login">Log In</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
} // Member 컴포넌트 /////////////
