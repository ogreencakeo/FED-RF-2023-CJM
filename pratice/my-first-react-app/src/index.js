// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Layout } from "./dc/layout/Layout";
// import { Main } from "./dc/pages/Main";
// import { Character } from "./dc/pages/Character";
// import { Comics } from "./dc/pages/Comics";
// import { Movies } from "./dc/pages/Movies";
// import { Games } from "./dc/pages/Games";
// import { News } from "./dc/pages/News";
// import { Video } from "./dc/pages/Video";
// import { SwiperApp } from "./dc/plugin/SwiperApp";

// import './css/index.css';

// export default function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Main />} />
//                     <Route path="character" element={<Character />} />
//                     <Route path="comics" element={<Comics />} />
//                     <Route path="movies" element={<Movies />} />
//                     <Route path="games" element={<Games />} />
//                     <Route path="news" element={<News />} />
//                     <Route path="video" element={<Video />} />
//                     <Route path="board" element={<SwiperApp />} />

//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(<App />);

import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";
import ReactDOM from 'react-dom';

const FilterComponent = ({ data }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedConstraints, setSelectedConstraints] = useState([]);

    const handleItemClick = (item) => {
        setSelectedItems((prevItems) => {
            if (prevItems.includes(item)) {
                // 아이템이 이미 선택되어 있으면 제거
                return prevItems.filter((prevItem) => prevItem !== item);
            } else {
                // 아이템이 선택되어 있지 않으면 추가
                return [...prevItems, item];
            }
        });
    };

    const handleConstraintClick = (constraint) => {
        setSelectedConstraints((prevConstraints) => {
            if (prevConstraints.includes(constraint)) {
                // 제한 사항이 이미 선택되어 있으면 제거
                return prevConstraints.filter(
                    (prevConstraint) => prevConstraint !== constraint
                );
            } else {
                // 제한 사항이 선택되어 있지 않으면 추가
                return [...prevConstraints, constraint];
            }
        });
    };

    // 선택된 아이템 및 제한 사항에 따라 데이터 필터링
    const filteredData = data.filter((item) => {
        const matchItem = selectedItems.length === 0 || selectedItems.includes(item.category);
        const matchConstraints =
            selectedConstraints.length === 0 ||
            selectedConstraints.every((constraint) => item.constraints.includes(constraint));

        return matchItem && matchConstraints;
    });

    return (
        <div>
            <div>
                <h2>항목 선택</h2>
                <button onClick={() => handleItemClick('어트랙션')}>어트랙션</button>
                <button onClick={() => handleItemClick('굿즈')}>굿즈</button>
                <button onClick={() => handleItemClick('레스토랑')}>레스토랑</button>
            </div>

            <div>
                <h2>제한 사항 선택</h2>
                <button onClick={() => handleConstraintClick('안내견 동반 가능')}>안내견 동반 가능</button>
                <button onClick={() => handleConstraintClick('가발 착용 가능')}>가발 착용 가능</button>
                <button onClick={() => handleConstraintClick('휠체어 가능')}>휠체어 가능</button>
            </div>

            <div>
                <h2>필터링 결과</h2>
                <ul>
                    {filteredData.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// 예제 데이터
const exampleData = [
    { name: '어트랙션', category: '어트랙션', constraints: ['안내견 동반 가능', '가발 착용 가능'] },
    { name: '굿즈', category: '굿즈', constraints: ['안내견 동반 가능'] },
    { name: '레스토랑', category: '레스토랑', constraints: ['휠체어 가능'] },
];


ReactDOM.render(<FilterComponent data={exampleData} />, document.getElementById('root'));