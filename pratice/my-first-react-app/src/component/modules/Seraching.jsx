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

    const schList = (e) => {
        let keyword = $('#schin').val();

        const newList = catList
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
                            ret={xx}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
