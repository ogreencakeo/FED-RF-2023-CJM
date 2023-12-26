import { initData } from "../func/mem_fn";
import $ from 'jquery';
import baseData from "../data/board.json";
import { Fragment, useContext, useEffect, useRef, useState } from "react";

baseData.sort((a, b) => {
    return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
});

let orgData;
if (localStorage.getItem('bdata')) orgData = JSON.parse(localStorage.getItem('bdata'));
else orgData = baseData;

export function Board() {
    if (!localStorage.getItem('bdata')) {
        localStorage.setItem('bdata', JSON.stringify(orgData));
    }
    initData();
    const myCon = useContext(dcCon);
    const pgBlock = 7;
    const totNum = orgData.length;

    const [pgNum, setPgNum] = useState(1);
    const [bdMode, setBdMode] = useState('L');
    const [btnSts, setBtnSts] = useState(false);
    useEffect(() => {
        if (myCon.logSts === null) setBtnSts(false);
        if (myCon.logSts === null && bdMode === 'C') setBdMode('L');
    }, [myCon.logSts]);

    const bidList = () => {
        const tempData = [];
        orgData.sort((a, b) => {
            return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
        });

        let initNum = pgBlock * (pgNum - 1);
        let limitNum = pgBlock * pgNum;

        for (let i = initNum; i < limitNum; i++) {
            if (i > totNum) break;
            tempData.push(orgData[i]);
        }

        if (orgData.length === 0) {
            return (
                <tr>
                    <td colSpan="5">There is no data.</td>
                </tr>
            )
        }

        return tempData.map((v, i) => (
            <tr key={i}>
                <td>{i + 1 + initNum}</td>
                <td>
                    <a href="#" data-idx={v.idx} onClick={chgMode}>
                        {v.tit}
                    </a>
                </td>
                <td>{v.unm}</td>
                <td>{v.date}</td>
                <td>{v.cnt}</td>
            </tr>
        ));
    };

    const pagingLink = () => {
        const blockCnt = Math.floor(totNum / pgBlock);
        const blockPad = totNum % pgBlock;
        const limit = blockCnt + (blockPad == 0 ? 0 : 1);

        let pgCode = [];
        for (let i = 0; i < limit; i++) {
            pgCode[i] = (
                <Fragment>
                    {
                        pgNum - 1 === i ? (
                            <b>{i + 1}</b>
                        ) : (
                            <a href="#" onClick={chgList}>{i + 1}</a>
                        )
                    }
                    {i < limit - 1 ? ' | ' : ''}
                </Fragment>
            )
        }
        return pgCode;
    }

    const chgList = (e) => {
        let currNum = e.target.innerText;
        setPgNum(currNum);
    };

    const cData = useRef(null);
    const logData = useRef(null);

    const chgMode = (e) => {
        e.preventDefault();
        let btxt = $(e.target).text();
        let modeTxt;
        switch (btxt) {
            case 'List':
                modeTxt = 'L';
                break;
            case 'Write' :
                modeTxt = 'C';
                break;
            case 'Modify' : 
                modeTxt = 'U';
                break;
            case 'Submit' :
                modeTxt = 'S';
                break;
            default :
                modeTxt = 'R';
        }

        if(modeTxt === 'R'){
            let cidx = $(e.target).attr('data-idx');
            cData.current = orgData.find((v) => {
                if(Number(v.idx) === Number(cidx)) return true;
            });

            // compUser(cData.current.uid);

            setBdMode('R');
            // plusCnt();
        }else if(modeTxt === 'L'){
            setBdMode('L');
        }else if(modeTxt === 'C'){
            logData.current = JSON.parse(myCon.logSts);
            setBdMode('C');
        }else if(modeTxt === 'S' && bdMode === 'C'){
            const subEle = $('.writeone .subject');
            const contEle = $('.writeone .content');

            if(subEle.val().trim() === '' || contEle.val().trim() === ''){
                window.alert('제목과 내용은 필수입력입니다');
            }else{
                const addZero = (x) => (x<10 ? '0'+x : x);
                let today = new Date();
                let yy = today.getFullYear();
                let mm = today.getMonth() + 1;
                let dd = today.getDate();
                let orgTemp = orgData;
                
            }
        }
    };
    return (
        <>
            {
                bdMode === 'L' && (
                    <>
                        {/* 전체 탕리틀 */}
                        <h1 className="tit">OPINION</h1>
                        <div class="sbx">
                            {/* 검색옵션박스 */}
                            <div class="selbx">
                                <select name="cta" id="cta" class="cta">
                                    <option value="tit">Title</option>
                                    <option value="cont">Contents</option>
                                    <option value="unm">Writer</option>
                                </select>
                                <select name="sel" id="sel" class="sel">
                                    <option value="0">JungYeol</option>
                                    <option value="1">Ascending</option>
                                    <option value="2">Descending</option>
                                </select>
                                <input id="stxt" type="text" maxlength="50" />
                                <button class="sbtn">Serach</button>
                            </div>
                            <div class="showNum cont"></div>
                        </div>
                        <table className="dtbl" id="board">
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
                    </>
                )
            }

            {
                <table className="dtbl btngrp">
                    <tbody>
                        <tr>
                            <td>
                                {
                                    bdMode === 'L' && myCon.logSts !== null && (
                                        <button onClick={chgMode}>
                                            <a href="#">Write</a>
                                        </button>
                                    )
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
        </>
    )
}