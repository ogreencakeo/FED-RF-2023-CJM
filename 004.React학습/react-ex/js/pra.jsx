// 산정보 데이터 불러오기
import { mtInfo } from "./02.sub_com/mountain";

console.log(mtInfo);

/* 
    props로 데이터를 전달하여 제목 출력하기
    props down으로 데이터를 하위 컴포넌트에 전달
*/

// 메인 컴포넌트
function MyHome(){
    return <MyRoom aa="세계의 산" bb="!"/>
}

// 일반적으로 props down할때 props 변수 하나를 써서
// 하위 (점찍어서) 속성으로 접근했으나 중괄호 구역 즉, 리액트 코드구역을 쓰면
// 변수명을 개수만큼 직접 사용가능
function MyRoom({aa, bb}){
    return <MyBag cc={aa} dd={bb}/>
}
function MyBag({cc, dd}){
    return < MyEnd ii={cc} hh={dd}/>
}

function MyEnd({ii, hh}){
    return <div style={{
        padding : '20px',
        borderRadius : '10px',
        width : '60%',
        margin : '20px auto',
        textAlign : 'center',
        fontSize : '40px',
        color : '#fff',
        backgroundImage : 'linear-gradient(to bottom, skyblue, navy)'
    }}>🤪{ii+hh}</div>
}

export const 누구냐 = React.createContext();
// 컨텍스트 불러오기

// 2. 컨텍스트 프로바이더를 사용하여 산 정보 셋팅하기
function 큰집(){
    return(
        <누구냐.Provider value={}>
            <할아버지 />
        </누구냐.Provider>
    );
}

function 할아버지(){
    return <아버지 />
}

function 아버지(){
    return <아들 />
}

function 아들(){
    return <손녀 />
}

function 손녀(){
    return <이야기/>
}

function 이야기(){
    
}