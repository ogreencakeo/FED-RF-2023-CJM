import { Fragment, useState } from "react";
import baseData from "../data/board.json";
baseData.sort((a, b) =>{
    return Number(a.idx) === Number(b.idx) ? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
});

let orgData;
if(localStorage.getItem('bdata')) orgData = JSON.parse(localStorage.getItem('bdata'));
else orgData = baseData;

export function Pra() {

    const pgBlock = 7;
    const totNum = orgData.length;

    const [pgNum, setPgNum] = useState(1);

    const bindList = () => {
        const tempData = [];
        let initNum = (pgNum-1) * pgBlock;
        let limitNum = pgBlock * pgNum;
        for(let i=initNum; i<limitNum; i++){
            if(i>=totNum) break;
            tempData.push(orgData[i]);
        }

        if(orgData.length === 0){
            return(
                <tr>
                    <td colSpan='5'>There is no data.</td>
                </tr>
            )
        }

        return tempData.map((v, i) => (
            <tr key={i}>
                <td>{i+1+initNum}</td>
                <td>
                    <a href="#" data-idx={v.idx} onClick={chgMode}>{v.tit}</a>
                </td>
                <td>{v.umn}</td>
                <td>{v.date}</td>
                <td>{v.cnt}</td>
            </tr>
        ))
    };

    const pagingLink = () => {
        const blockCnt = Math.floor(totNum/pgBlock);
        const blockPad = totNum % pgBlock;
        const limit = blockCnt + (blockPad == 0? 0 :1);
        let pgCode = [];
        for(let i=0; i<limit; i++){
            pgCode[i] = (
                <Fragment key={i}>
                    {pgNum}
                </Fragment>
            )
        }
    }

    return (
        <>
            {
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
            }
        </>
    );
}
