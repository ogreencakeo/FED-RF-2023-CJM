import { useEffect, useRef, useState } from "react";
// 제이쿼리
import $ from "jquery";
// 검색모듈용 CSS 불러오기
import "../../css/searching.css";

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SchCatList } from "./SchCatList.jsx";

// 데이터
import {catListData} from '../data/swiper_cat';

catListData.sort((a, b) => {
    return a.cname==b.cname? 0 : a.cname>b.cname? 1:-1;
});

export function Seraching(props) {

    const [kword, setKword] = useState(props.kword);
    const [cntNum, setCntNum] = useState(0);
    const [selData, setSelData] = useState([catListData, 2]);

    const [cnt, setCnt] = useState(catListData.length);

    const chgKword = (txt) => setKword(txt);

    const allow = useRef(1);

    const xx = useRef(null);
    useEffect(()=>{
        xx.current.style.outline = '5px dotted orange';
    });

    const initFn = () => {
        if(props.kword != kword){
            chgKword(props.kword);
            $('#schin').val(props.kword);
        }
    };

    if(allow.current) initFn();

    const chgCnt = (num) => {
        setCntNum(num);
    }

    const schList = (e) => {
        let keyword = $('#schin').val();
        const newList = catListData.filter((v) => {
            if(v.cname.toLowerCase().indexOf(keyword) != -1) return true;
        });

        setSelData([newList, 2]);
        setCnt(newList.length);
    }

    const chkSerach = (e) => {
        const cid = e.target.id;
        const chked = e.target.checked;
        let temp = selData[0];

        let lastList = [];

        let num = $('.chkhdn:checked').length;

        if(chked){
            const nowList = catListData.filter((v) => {
                if(v.alignment == cid) return true;
            });
            if(num > 1){
                lastList = [...temp, ...nowList];
            }else{
                lastList = nowList;
            }
        }
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
                <div className="listbx">
                    <h2 className="restit">BROWSE CHARACTERS({cnt})</h2>
                    <aside className="sortbx">
                        <select name="sel" id="sel" className="sel" onChange={sortList}>
                            <option value="0">A-Z</option>
                            <option value="1">Z-A</option>
                        </select>
                    </aside>
                    <SchCatList dt={selData[0]} total={cnt} />
                </div>
            </section>
        </>
    );
}
