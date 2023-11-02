// 리스트 업데이트 JS - update_list.js
const updateList = (newPgNum) => {
    // newPgNum -  새롭게 전달되는 현재 페이지 번호
    pgNum = newPgNum; // 기존 페이지 번호를 업데이트 함

    // [6] 시작번호 업데이트
    listNum = (pgNum - 1) * pgBlock;

    let hcode = "";
    // 리스트 블록으로 리스트 소스 만들기
    for (let i = (pgNum - 1) * pgBlock; i < pgBlock * pgNum; i++) {
        // i가 전체 개수보다 같거나 크면 break (for문 나가기)
        if (i >= totalCnt) break;
        hcode += `
            <tr>
                <td>${addNum()}</td>
                <td>${bData[i].tit}</td>
                <td>${bData[i].writer}</td>
                <td>${bData[i].date}</td>
                <td>${bData[i].cnt}</td>
            </tr>
        `;
    }
    board.html(hcode);

    console.log(`pgBlock : ${pgBlock}, pgNum : ${pgNum}, totalCnt : ${totalCnt}, 
pagingBlock : ${pagingBlock}, addOver : ${addOver}`);

    /////// 페이지 이동 링크 페이징 만들기 ////////
    // 대상 : .paging
    // 링크 생성 원리 : 블록개수만큼 숫자로 만든다.
    // 사용 데이터 : pagingBlock - 기본 페이지 수
    //              addOver - 추가 페이지 여부
    const pNumBlock = $(".paging");
    let pNumCode = "";

    // 새로운 블록을 위한 변수
    let newPagingBlock;
    // 추가 리스트가 있을 경우 나머지가 0아니므로 다음 페이지 추가
    if (addOver != 0) newPagingBlock = pagingBlock + 1;

    // 페이지 링크 a요소 만들기 /////////
    for (let x = 0; x < newPagingBlock; x++) {
        // 현재 페이지만 b태그 나머지는 a태그 사용
        // 현재 페이지는 pgNum이므로 ( x+1 == pgNum )
        pNumCode += x + 1 == pgNum ? `<b>${x + 1}</b>` : `<a href="#">${x + 1}</a>`;
        // 마지막 뒤에 바가 안생김
        if (x < newPagingBlock - 1) pNumCode += " | ";
    } // for
    pNumBlock.html(pNumCode);

    // 새로 생성된 a 링크에 click 이벤트 함수로
    // 리스트 업데이트 함수 호출하기
    $(".paging a").click(function (e) {
        // 기본 이동 막기
        e.preventDefault();
        // 클릭된 a요소에 숫자 읽어오기
        let atxt = $(this).text();
        // console.log('숫자 :', atxt);
        // 리스트 업데이트 함수 호출
        updateList(atxt);
    });
}; // updateList 함수
