import { useState } from "react";
// 제이쿼리
import $ from "jquery";
// 검색모듈용 CSS 불러오기
import "../../css/searching.css";

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SchCatList } from "./SchCatList";

// 데이터
import {catListData} from '../data/swiper_cat';

export function Seraching(props) {
    const [kword, setKword] = useState(props.kword);
    const [cntNum, setCntNum] = useState(0);
    const [selData, setSelData] = useState

    const schList = (e) => {
        let keyword = $('#schin').val();

        const newList = catListData.filter((v) => {
            if(v.cname.toLowerCase().indexOf(keyword) != -1) return true;
        })

    }

    return (
        <>
            <section className="schbx">
                <div className="schopt">
                    <div className="searching">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="schbtn"
                            title="Open search"
                            onClick={schList}
                            ref={xx}
                        />
                        <input id="schin" type="text" placeholder="Filter by Keyword"
                        onKeyUp={enterKey} defaultValue={kword} />
                    </div>
                    <div className="chkbx">
                        <ul>
                            <li>
                                <h2>
                                    ALIGNMENT
                                    <span className="spbtn">＋</span>
                                </h2>
                                <ol>
                                    <li>
                                        Heroes
                                        <input type="checkbox" id="hero" className="chkhdn" onChange={chkSerach} />
                                        <label htmlFor="hero" className="chklb"></label>
                                    </li>
                                    <li>
                                        It's Complicated
                                        <input type="checkbox" id="comp" className="chkhdn" onChange={chkSerach} />
                                        <label htmlFor="comp" className="chklb"></label>
                                    </li>
                                    <li>
                                        Villains
                                        <input type="checkbox" id="villain" className="chkhdn" onChange={chkSerach} />
                                        <label htmlFor="villain" className="chklb"></label>
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
