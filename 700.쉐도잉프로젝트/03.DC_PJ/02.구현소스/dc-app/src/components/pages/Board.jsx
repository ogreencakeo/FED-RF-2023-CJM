// OPINION 의견 게시판 컴포넌트

// 게시판용 CSS
import { Fragment, useState } from "react";
import "../../css/board.css";

// 기본 데이터 제이슨 불러오기
import baseData from "../data/board.json";

// 기본 데이터 역순정렬
baseData.sort((a, b) => {
    return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
});

// 초기데이터 셋업하기(원본데이터 담기)
let orgData;
// 로컬스가 있으면 그것 넣기
if (localStorage.getItem("bData")) orgData = JSON.parse(localStorage.getItem("bdata"));
// 로컬스 없으면 제이슨 데이터 넣기
// else orgData = baseData;
else orgData = [];

// console.log(org);

// ********************** Board 컴포넌트 ********************** //
export function Board() {
    // [ 컴포넌트 전체 공통변수 ] //////////
    // 1. 페이지 단위수 : 한 페이지 당 레코드 수
    const pgBlock = 7;
    // 2. 전체 레코드수 : 배열데이터 총개수
    const totNum = orgData.length;
    console.log("페이지 단위수 (pgBlock) :", pgBlock, ", 전체 레코드 수 (totNum) :", totNum);

    // [ 상태관리 변수 셋팅 ] ////////////
    // 1. 현재 페이지 번호 : 가장 중요한 리스트 바인딩의 핵심
    const [pgNum, setPgNum] = useState(1);
    // 2. 데이터 변경변수 : 리스트에 표시되는 실제 데이터셋
    const [currData, setCurrData] = useState(null);
    // 3. 게시판 모드관리 변수
    const [bdMode, setBdMode] = useState("L");
    // 모드구분값 : CRUD (Create/Read/Update/Delete)
    // C - 글쓰기 / R - 글읽기 / U - 글수정 / D - 글삭제(U에 포함!)
    // 상태추가 : L - 글목록
    // 전체 5가지 상태값 : CURD + L

    /***********************************************************
        함수명 : bindList
        기능 : 페이지별 리스트를 생성하여 바인딩함
    ***********************************************************/
    const bindList = () => {
        console.log("다시 바인딩! pgNum", pgNum);

        // 데이터 선별하기
        const tempData = [];

        // 시작값 : (페이지번호 - 1) * 블록단위수
        let initNum = pgBlock * (pgNum - 1);
        // 한계값 : 블록단위수 * 페이지번호
        let limitNum = pgBlock * pgNum;

        // 블록단위가 7일 경우 첫 페이지는 0~7, 7~14, ...
        console.log("시작값 :", initNum, ", 한계값 :", limitNum);

        // 데이터 선별용 for문 : 원본데이터(orgData)로부터 생성
        for (let i = initNum; i < limitNum; i++) {
            // 마지막 페이지 한계수 체크
            if (i >= totNum) break;
            // 코드 푸시
            tempData.push(orgData[i]);
        }

        console.log("결과 셋 tempData:", tempData);

        // 데이터가 없는 경우 출력 /////////
        if (orgData.length === 0) {
            return (
                <tr>
                    <td colSpan="5">There is no data.</td>
                </tr>
            );
        } // if /////////////

        // if문에 들어가지 않으면 여기를 리턴함!
        return tempData.map((v, i) => (
            <tr key={i}>
                {/* 1. 일련번호 */}
                <td>{i + 1 + initNum}</td>
                {/* 2. 글제목 */}
                <td>
                    <a href="#" datatype={v.idx}>
                        {v.tit}
                    </a>
                </td>
                {/* 3. 글쓴이 */}
                <td>{v.writer}</td>
                {/* 4. 쓴 날짜 */}
                <td>{v.date}</td>
                {/* 5. 조회수 */}
                <td>{v.cnt}</td>
            </tr>
        ));
    }; // bindList 함수 ////////////////////

    /***********************************************************
        함수명 : pagingLink
        기능 : 리스트 페이징 링크를 생성한다.
    ***********************************************************/
    const pagingLink = () => {
        // 페이징 블록 만들기 ///////////
        // 1. 블록개수 계산하기
        const blockCnt = Math.floor(totNum / pgBlock);
        // 전체 레코드 수 / 페이지단위 (나머지가 있으면 + 1)
        // 전체 레코드 수 : pgBlock변수에 할당됨!
        // 2. 블록 나머지수
        const blockPad = totNum % pgBlock;

        // 최종 한계수 -> 여분레코드 존재에 따라 1 더하기
        const limit = blockCnt + (blockPad === 0 ? 0 : 1);

        console.log("블록개수 blockCnt :", blockCnt, ", 블록 나머지 blockPad : ", blockPad, "한계수 limit :", limit);

        // 리액트에서는 jsx문법 코드를 배열에 넣고 출력하면 바로 코드로 변환된다
        let pgCode = [];
        // 리턴코드
        // 만약 빈태그 묶음에 key를 심어야할 경우
        // 불가하므로 Fragment 조각 가상태그를 사용한다!
        for (let i = 0; i < limit; i++) {
            pgCode[i] = (
                <Fragment key={i}>
                    {pgNum - 1 === i ? (
                        <b>{i + 1}</b>
                    ) : (
                        <a href="#" onClick={chgList}>
                            {i + 1}
                        </a>
                    )}
                    {i < limit - 1 ? " | " : ""}
                </Fragment>
            );
        }
        return pgCode;
    }; // pagingLink 함수 /////////////

    /***********************************************************
        함수명 : chgList
        기능 : 페이지 링크 크릭시 리스트변경
    ***********************************************************/
    const chgList = (e) => {
        let currNum = e.target.innerText;
        console.log("번호 currNum :", currNum);
        // 현재 페이지번호 업데이트 ->  리스트 업데이트 됨!
        setPgNum(currNum);
        // 바인드 리스트 호출 불필요! 왜? pgNum을 bindList()에서 사용하기 때문에
        // 리랜더링이 자동으로 일어남! // bindList();
    }; // chgList 함수 ///////////

    // 리턴코드 //////////////
    return (
        <>
            {
                // 1. 게시판 리스트 : 게시판 모드 'L'일때 출력
                bdMode === "L" && (
                    <table className="dtbl" id="board">
                        <caption>OPINION</caption>
                        {/* 상단 컬럼명 표시영역 */}
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Title</th>
                                <th>Writer</th>
                                <th>Date</th>
                                <th>Hits</th>
                            </tr>
                        </thead>
                        {/* 중앙 레코드 표시부분 */}
                        <tbody>{bindList()}</tbody>
                        {/* 하단 페이징 표시부분 */}
                        <tfoot>
                            <tr>
                                <td colSpan="5" className="paging">
                                    {/* 페이징번호 위치  */}
                                    {pagingLink()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                )
            }
            {
                // 2. 글쓰기 테이블 : 게시판 모드 'C'일때 출력
                bdMode === "C" && (
                    <table className="dtblview writeone">
                        <caption>OPINION : Write</caption>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" className="name" size="20" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="text" className="email" size="40" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input type="text" className="subject" size="60" />
                                </td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td>
                                    <textarea className="content" cols="60" rows="10"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
            {
                // 3. 읽기 테이블 : 게시판 모드 'R'일때 출력
                bdMode === "R" && (
                    <table className="dtblview readone">
                        <caption>OPINION : Read</caption>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" className="name" size="20" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input type="text" className="subject" size="60" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td>
                                    <textarea className="content" cols="60" rows="10" readOnly></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
            {
                // 4. 수정(삭제) 테이블 : 게시판 모드 'U'일때 출력
                bdMode === "U" && (
                    <table className="dtblview updateone">
                        <caption>OPINION : Modify</caption>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" className="name" size="20" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input type="text" className="subject" size="60" />
                                </td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td>
                                    <textarea className="content" cols="60" rows="10"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
            <br />
            {/* 5. 버튼 그룹박스 */}
            <table className="dtbl btngrp">
                <tbody>
                    <tr>
                        <td>
                            {
                                // 리스트 모드(L)
                                bdMode === "L" && (
                                    <button>
                                        <a href="#">Write</a>
                                    </button>
                                )
                            }
                            {
                                // 글쓰기 모드(C)
                                bdMode === "C" && (
                                    <>
                                        <button>
                                            <a href="#">Submit</a>
                                        </button>
                                        <button>
                                            <a href="#">List</a>
                                        </button>
                                    </>
                                )
                            }
                            {
                                // 읽기 모드(R)
                                bdMode === "R" && (
                                    <button>
                                        <a href="#">List</a>
                                    </button>
                                )
                            }
                            {
                                // 수정 모드(U)
                                bdMode === "U" && (
                                    <>
                                        <button>
                                            <a href="#">Submit</a>
                                        </button>
                                        <button>
                                            <a href="#">Delete</a>
                                        </button>
                                        <button>
                                            <a href="#">List</a>
                                        </button>
                                    </>
                                )
                            }

                            <button>
                                <a href="#">Modify</a>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
} // Board 컴포넌트
