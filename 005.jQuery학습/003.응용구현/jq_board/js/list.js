// 리스트 페이지 JS - list.js

// 게시판 데이터 불러오기
import bData from './data.json' assert {type:'json'};
// console.log('bData :', bData);

// 데이터를 화면 리스트 코드로 변환하여 적용한다.
// 대상 : #board tbody 
const board = $('#board tbody');

// 데이터를 태드로 구성함
// 태그 구조 : <tr><td></td>.....</tr>
/*
    <tr>
        <th>번호</th>
        <th>글 제목</th>
        <th>글 쓴이</th>
        <th>등록일자</th>
        <th>조회수</th>
    </tr>
*/