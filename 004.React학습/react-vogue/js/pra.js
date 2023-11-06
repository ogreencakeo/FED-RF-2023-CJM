import FooterArea from "./components/footer_area";
import MainCategory from "./components/main_area";
import TopArea from "./components/top_area";

export default function setJSTop(){
    const topArea = $('#top-area');
    const tbtn = $('.tbtn');

    $(window).scroll(()=>{
        let scTop = $(window).scrollTop();
        if(scTop > 100) topArea.addClass('on');
        else topArea.removeClass('on');

        if(scTop > 300) tbtn.addClass('on');
        else tbtn.removeClass('on');

        tbtn.click((e)=>{
            setPos(0);
        });
    })

    $('hbtn').click(() => $('#mobx').slideToggle(300));
    $('.sbtn').click(()=>$('.mos').slideToggle(300));
}

export function makeLink(){
    $('a').click(e=>e.preventDefault());

    const logo = $('.logo a');
    logo.click(()=> location.href = 'index.html');

    $('.sns a:last, .mosns a:list').before(`
        <a href="#" class="fi fi-laptop">
            <span class="ir">로그인</span>
        </a>
        <a href="#" class="fi fi-user-secret">
            <span class="ir">회원가입</span>
        </a>
        <a href="#" class="fi fi-camera">
            <span class="ir">갤러리</span>
        </a>
    `);

    $('.sns a, .mosns a').each((idx, ele)=> {
        $(ele).attr('title', $(ele).text().trim());
    })

    .click(function(){
        let atxt = $(this).text().trim();
        let url = '';
        switch(atst){
            case '인스타그램' : 
                url = '';
                break;
            case '로그인' : 
                url : 'login';
                break;
        }

        if(atxt == '로그인' || atxt == '회원기입' || atxt == '갤러리') location.href = url + '.html';
        else window.open(url);
    });

    $('.mosns a').eq(3).after('<br />');
}

function MainComponent(){

    const params = new URLSearchParams(location.href);
    const catName = decodeURIComponent(params.get('cat'));
    const [nowCat, setNowCat] = React.useState(catName);
    const chgCat = (val) => {
        setNowCat(val);
    }
    return(
        <React.Fragment>
            <TopArea chgItem = {chgCat} />
            <MainCategory category = {nowCat} />
            <FooterArea />
        </React.Fragment>
    )
}

ReactDOM.render(<MainComponent />, document.querySelector('#root'))

import catData from "../data/category_data.js";

export default function MainCategory(props){

    const selData = catData[props.category];
    return(
        <div id="main-area">
            <main class="main-area-ibx">
                <SubTitle tit={selData['제목']} menu={selData['메뉴']} />
                <ItemList cname={selData['경로']} tit ={selData['타이틀']}/>
            </main>
        </div>
    )
}

function SubTitle(props){
    const makeList = (data) => {
        data.map((v) => (
            <li>
                <a href="#">{v}</a>
            </li>
        ))
    }
    return(
        <header className="cat-top-area">
            {/* 2-1-1. 서브타이틀 */}
            <h2 className="cat-tit">{props.tit}</h2>
            {props.menu != '없음' &&(
                <nav className="lnb">
                    <ul>{makeList(props.menu)}</ul>
                </nav>
            )}
        </header>
    );
}


function ItemList(props){

    const makeCode = (data) => {
        if(Array.isArray(data)){
            return(
                <h2>
                    <small>{data[0]}</small><br/>
                    {data[1]}
                </h2>
            )
        
        }else{
                return <h2>{data}</h2>
            }
        }
    }

    return(
        <div className={"cat-cont-area " + props.cname}>
            <section className="pt2">
                <div className="cbx bgi bg1-1">{makeCode(props.tit[0])}</div>
            </section>
        </div>
    )
}