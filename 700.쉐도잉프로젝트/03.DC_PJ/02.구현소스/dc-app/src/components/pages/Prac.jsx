import { useState } from "react";
import { SchCatList } from "../modules/SchCatList";
import { catListData } from "../data/swiper_cat";

export function Seraching(props){
    const [kwrod, setKword] = useState(null);
    const [selData, setSelData] = useState(([], 2));
    const [cnt, setCnt] = useState(0);

    const chgKword = (txt) => setKword(txt);

    const initFn = () => {
        if(props.kwrod!=kwrod){
            chgKword(props.kwrod);
            schList();
        }
    }

    initFn();

    function schList(e){
        let keyword = $('#schinGnb').val();
        const newList = catListData.filter((v) => {
            if(v.cname.indexOf(keyword)!=-1) return true;
        });
        setSelData([newList,2]);
        setCnt(newList.length);
    }


    return(
        <>
            <div className="listbx">
                <div className="restit">BROWSE CHARACTERS({cnt})</div>
                <aside className="sortbx">
                    <select name="sel" id="sel" className="sel" onChange={sortList}>
                        <option value="0">A-Z</option>
                        <option value="1">Z-A</option>
                    </select>
                </aside>
                <SchCatList />
            </div>
        </>
    )
}