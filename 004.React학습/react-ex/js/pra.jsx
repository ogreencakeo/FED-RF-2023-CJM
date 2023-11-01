import { 누구냐 } from "./02.sub_com/cont_provider";
import { mtInfo } from "./02.sub_com/mountain";
import 이야기 from "./02.sub_com/sub_com";

function 큰집(){
    const myData = mtInfo;
    const [myVal, setMyVal] = React.useState('백두산');
    const chgMyVal = (val) => {
        setMyVal(val);
    }
    return(
        <누구냐.Provider val={{myData, myVal, chgMyVal}}>
            <할아버지 />
        </누구냐.Provider>
    );
}

function 할아버지(){
    return <아버지 />
}

function 아버지(){
    return <이야기 />
}

export const 누구냐 = React.createContext();

ReactDOM.render(
    <큰집 />,
    document.querySelector('#root')
)

function 이야기(){
    const 맘대로 = React.useContext(누구냐);
    const selData = 맘대로.myData.find(v=>{
        if(v.이름 == 맘대로.myVal) return true;
    })
    const btnData = 맘대로.myData.find(v=>{
        if(v.이름 != 맘대로.myVal) return true;
    })
    return(
        <div>
            <h1>{맘대로.myVal}</h1>
            <img src={selData.이미지} alt={selData.이름} />
            <div>
                <ul>
                    <li>{selData.이름}</li>
                </ul>
            </div>
            {
                btnData.map(v=>{
                    <button onClick={()=>맘대로.chgMyVal(v.이름)}>
                        {v.이름}
                    </button>
                })
            }
        </div>
    )
}