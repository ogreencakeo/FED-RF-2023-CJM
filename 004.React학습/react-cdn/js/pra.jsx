function Car(props){
    return(
        <React.Fragment>
            <h1>당신의 차는 무슨차죠?</h1>
            <h2>나의 차는 {props.brand}입니다.</h2>
        </React.Fragment>
    );
}

function Brand(props){
    return(
        <React.Fragment>
            <Car brand = '기아레이' />
        </React.Fragment>
    );
}

function Detail(props){
    return(
        <React.Fragment>
            <h2>
                모델명은 {props.brand.model}이고
                차색은 {props.brand.color}입니다.
            </h2>
            <img src="images/ray.png" alt="기아그레이"  style={props.brand.opt}/>
        </React.Fragment>
    )
}

function AskMore(props){
    const carInfo = [
        {
            model : '2023년형',
            color : '라잇블루',
            opt : {filter : 'hue-rotate(odeg)'}
        },
        {
            model : '2024년형',
            color : '그린',
            opt : {filter : 'hue-rotate(180deg)'}
        },
        {
            model : '2023년형',
            color : '퍼플',
            opt : {filter : 'hue-rotate(102deg)'}
        },
    ];
    return(
        <React.Fragment>
            <h1>더 자세히 말씀해주세요?!</h1>
            <Detail brand = {carInfo[props.num]} />
        </React.Fragment>
    );
}

ReactDOM.render(
    <div>
        <Brand />
        <AskMore num = '0' />
        <AskMore num = '1' />
        <AskMore num = '2' />
    </div>,
    document.querySelector('#root1')
);