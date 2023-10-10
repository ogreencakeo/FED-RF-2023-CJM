import Avengers from "./avengers";

function IronMan(){
    return(
        <React.Fragment>
            <h1>안녕 나는 아이언맨이야</h1>
            <MakeImg iname = 'ab1.jpg'/>
        </React.Fragment>
    )
}

function MakeImg(props){
    return(
        <img src = {'./images/' + props.iname} />
    )
}

ReactDOM.render(<IronMan />, document.querySelector('#root1'));

function Favorite(props){
    return(
        <h2>
            내가 좋아하는 색깔 : {props.color}
            내가 좋아하는 음식 : {props.food}
            내가 좋아하는 취미 : {props.hobby}
        </h2>
    )
}

ReactDOM.render(<Favorite color='파란색' food = '알리오올리오' hobby = '잠자기' />, document.querySelector('#root2'));

function Who(){
    return(
        <div>
            <h1>김뚝팔씨가 누구야?</h1>
            <Ans />
        </div>
    )
}

function Ans(){
    return <h2>김씨가 똑하고 팔이 뿌려졌어</h2>
}

ReactDOM.render(<Who />, document.querySelector('#root3'));

ReactDOM.render(<Avengers />, document.querySelector('#root5'));