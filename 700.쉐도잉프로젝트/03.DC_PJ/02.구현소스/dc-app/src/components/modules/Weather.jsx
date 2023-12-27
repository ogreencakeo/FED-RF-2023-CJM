import { Component } from "react";

// 여기서는 컴포넌트를 class로 만들어 보자!
// 컴포넌트 class는 기본적으로 Componet 클래스를 상속받는다.
class Weather extends Component{
    // 생성자함수 호출!
    // -> constructor()
    constructor(props){
        // 부모에게 전달변수를 전달한다.
        // 부모클래스는 super 키워드로!
        super(props)
        // 생성자함수 구역에 맴버변수 즉, 클래스 속성을
        // 만들면 이것이 상태변수가 된다!!
        // 클래스 내부 속성은 this 키워드를 사용함!
        // 받아온 날씨 정보를 셋업할 객체임!
        this.wInfo = {temp : '', desc : '', icon : '', loading : true};
        // 함수형 컴포넌트처럼 useState()를 쓰지 않음!
        // -> 값의 셋팅은 setWInfo 라고 씀 (함수형과 같지만 처음 선언시 없음)
    } // 생성자 함수 /////////////

    // 컴포넌트 생성후 날씨정보 조회하여 화면에 보이기
    // 함수형 컴포넌트에서는 랜더링후는 useEffect()이지만 
    // 클래스형은 componentDidMount() 메서드 사용함!
    componentDidMount(){
        // 1. 지정도시명
        const cityName = 'Seoul';
        // 2. 날씨 정보 조회 키코드 (로그인 사용자 키 복사)
        const apiKey = 'ba08801b982da401f3647f4759a9effa';
        // 3. 날씨 정보 조회 url : 날씨 정보 제이슨이 날아온다
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        // http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=ba08801b982da401f3647f4759a9effa

        // 소스 샘플
        // https://openweathermap.org/api/one-call-3

        // fetch() 함수를 이용한 데이터 조회하기
        fetch(url) // 파일 받기
        .then(res=>res.json()) // json() 제이슨 파일 형식 파싱
        .then(wdata=>{
            // 파일 파싱 후 내용 읽기
            console.log(wdata);
        })
    } // componentDidMount 메서드 ///////

    // 컴포넌트 결과 랜더링 메서드
    // render() 
    render(){
        return(
            <h1>날씨양~!</h1>
        )
    } // render 메서드 //////

} // Weather 클래스 ////////////

export default Weather;