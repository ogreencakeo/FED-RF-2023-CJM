import { mtInfo } from "../../../../004.React학습/react-ex/js/02.sub_com/mountain"

export const 누구냐 = React.createContext();

function MyHome(){
    return <MyRoom aa = '세계의 산 ' bb ='😊' />
}

function MyRoom({aa, bb}){
    return <MyEnd cc = {aa} ff = {bb} />
}

function MyEnd({cc, ff}){
    return(
        <div>
            {cc + ff}
        </div>
    )
}

function 큰집(){
    const myData = mtInfo;
    const [myVal, setMyVal] =React.useState('백두산');
    const changeMyVal = (val) => {
        setMyVal(val);
    }
    return(
        <누구냐.Provider value={{myVal, changeMyVal, myData}}>
            <할아버지 />
        </누구냐.Provider>
    )
}

function 할아버지(){
    return <이야기 />
}

function 이야기(){
    const 맘대로 = React.useContext(누구냐);
    const selData = 맘대로.myData.find(v=>{
        if(v.이름 == 맘대로.myVal) return true;
    });
    const btnData = 맘대로.myData.filter(v=>{
        if(v.이름 != 맘대로.myVal) return true;
    })
    return(
        <div>
            <h1>{맘대로.myVal}</h1>
            <img 
                src = {selData.이미지}
                alt = {selData.이름}
                style={{width : '100%'}}
            />
            <ul>
                <li>{selData.이름}</li>
            </ul>
            {
                btnData.map(v=>
                        <button onClick={()=> 맘대로.changeMyVal(v.이름)}></button>
                    )
            }
        </div>
    );
}