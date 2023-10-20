import myData from './data.js';

function MainComponent(){
    return(
        <React.Fragment>
            <h1 className='tit'>공유가 신고 다닌다는</h1>
            <section>
                <h2>공유는 오늘도 멋집니다.</h2>
                <img src="./images/vans/googyoo.jpg" alt="멋진 공유" />
            </section>
            <div className='gwrap'>
                <GoodsCode />
            </div>
        </React.Fragment>
    );
}

function GoodsCode(){
    return(
        myData.map(v=>
            <ol class = 'glist'>
                <li><img src={'./images/vans/vans_' + v.} /></li>
            </ol>
        )
    )
}