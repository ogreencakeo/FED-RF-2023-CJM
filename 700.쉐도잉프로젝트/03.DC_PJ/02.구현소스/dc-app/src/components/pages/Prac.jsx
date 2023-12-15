
import { useState } from 'react';
import baseData from '../data/board.json';

baseData.sort((a, b) => {
    return Number(a.idx) === Number(b.idx)? 0 : Number(a.idx) > Number(b.idx) ? -1 : 1;
})

let orgData;
if(localStorage.getItem('bdata')) orgData = JSON.parse(localStorage.getItem('bdata'));
else orgData = baseData;

export function Pra() {

    const pgBlock = 7;
    const totNum = orgData.length;

    const [pgNum, setPgNum] = useState(1);

    const bindList = () => {
        const tempData = [];
        let initNum = (pgNum - 1) * pgBlock;
        let limitNum = pgNum * pgBlock;

        for(let i=initNum; i<limitNum; i++){
            if( i>= totNum) break;
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
                    <tbody>{}</tbody>

                    {/* 하단 페이징 표시부분 */}
                    <tfoot>
                        <tr>
                            <td colSpan="5" className="paging">
                                {/* 페이징번호 위치  */}
                                {}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            }
            {
                <div className="dtblview readone">
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
                </div>
            }
        </>
    );
}
