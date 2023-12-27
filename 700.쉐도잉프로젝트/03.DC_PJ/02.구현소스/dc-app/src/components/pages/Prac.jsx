import { useState } from "react";

export function Board() {
    const [bdMode, setBdMode] = useState("L");
    
    return (
        <>
            {bdMode === "L" && (
                <>
                    {/* 전체 타이틀 */}
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
            )}
            {
                bdMode === 'C' && (
                    <table className="dtblview writeone">
                        <caption>OPINION : Write</caption>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input
                                        type="text"
                                        className="name"
                                        size="20"
                                        readOnly
                                        value={logData.current.unm}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input
                                        type="text"
                                        className="email"
                                        size="40"
                                        readOnly
                                        value={logData.current.eml}
                                    />
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
                bdMode === 'R' && (
                    <table className="dtblview readone">
                        <caption>OPINION : Read</caption>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" className="name" size="20" readOnly value={cData.current.unm} />
                                </td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input
                                        type="text"
                                        className="subject"
                                        size="60"
                                        readOnly
                                        value={cData.current.tit}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td>
                                    <textarea
                                        className="content"
                                        cols="60"
                                        rows="10"
                                        readOnly
                                        value={cData.current.cont}
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
            {
                bdMode === 'U' && (
                    <table className="dtblview updateone">
                        <caption>OPINION : Modify</caption>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" className="name" size="20" readOnly value={cData.current.unm} />
                                    {/* value는 수정불가! */}
                                </td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input type="text" className="subject" size="60" defaultValue={cData.current.tit} />
                                    {/* defaultValue로 써야 수정가능! */}
                                </td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td>
                                    <textarea
                                        className="content"
                                        cols="60"
                                        rows="10"
                                        defaultValue={cData.current.cont}
                                    ></textarea>
                                    {/* defaultValue로 써야 수정가능! */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
            <br />
            <table className="dtbl btngrp">
                <tbody>
                    <tr>
                        <td>
                            {
                                bdMode === 'L' && (
                                    <button onClick={chgMode}>
                                        <a href="#">Wite</a>
                                    </button>
                                )
                            }
                            {
                                bdMode === 'C' && (
                                    <>
                                        <button onClick={chgMode}>
                                            <a href="#">Submit</a>
                                        </button>
                                        <button onClick={chgMode}>
                                            <a href="#">List</a>
                                        </button>
                                    </>
                                )
                            }
                            {
                                bdMode === 'R' && (
                                    <>
                                        <button onClick={chgMode}>
                                            <a href="#"> List</a>
                                        </button>
                                        {
                                            btnSts && (
                                                <button onClick={chgMode}>
                                                    <a href="#">Modify</a>
                                                </button>
                                            )
                                        }
                                    </>
                                )
                            }
                            {
                                bdMode === 'U' && (
                                    <>
                                        <button onClick={chgMode}>
                                            <a href="#">Submit</a>
                                        </button>
                                        <button onClick={chgMode}>
                                            <a href="#">Delete</a>
                                        </button>
                                        <button onClick={chgMode}>
                                            <a href="#">List</a>
                                        </button>
                                    </>
                                )
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
