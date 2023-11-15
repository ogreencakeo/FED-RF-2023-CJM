export function Banner(){

    const BAN_CNT = 6;
    const makeList = (gubun) => {
        let hcode = [];
        for(let i=0; i<BAN_CNT; i++){
            if(gubun){
                hcode[i] =
                <li className={"ban" + (i==0? '6' : i)} key={i}>
                    <span className="ir">배너{i==0? '6' : i}</span>
                </li>
            }else{
                <li className={i==0? 'on' : ''} key={i}>
                    <a href="#">
                        <span className="bld">블릿</span>
                    </a>
                </li>
            }
        }
    };
    return(
        <>
            <ul className="slide">{makeList(1)}</ul>
            <ul className="bindic">{makeList(0)}</ul>
            <ul className="cover"></ul>
        </>
    );
}