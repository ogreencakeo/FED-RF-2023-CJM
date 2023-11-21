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
import ReactDOM from 'react-dom';
import attraction_wrap from './AttractionFilter';

const App = () => {
    const attractionData = Object.values(attraction_wrap);

    return (
        <div>
            <h1>Attraction Filter App</h1>
            <AttractionFilter attractionData={attractionData} />
        </div>
    );
};

const AttractionFilter = ({ attractionData }) => {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedCautions, setSelectedCautions] = useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategory((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((prevCategory) => prevCategory !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    };

    const handleCautionClick = (caution) => {
        setSelectedCautions((prevCautions) => {
            if (prevCautions.includes(caution)) {
                return prevCautions.filter((prevCaution) => prevCaution !== caution);
            } else {
                return [...prevCautions, caution];
            }
        });
    };

    const filteredAttractions = attractionData.filter((attraction) => {
        const matchCategory =
            selectedCategory.length === 0 || selectedCategory.includes(attraction.name);
        const matchCautions =
            selectedCautions.length === 0 ||
            selectedCautions.every((caution) => attraction[caution] === "1");

        return matchCategory && matchCautions;
    });

    return (
        <div>
            <div>
                <h2>항목 선택</h2>
                {Object.keys(attraction_wrap).map((attractionId) => (
                    <button
                        key={attractionId}
                        onClick={() => handleCategoryClick(attraction_wrap[attractionId].name)}
                    >
                        {attraction_wrap[attractionId].name}
                    </button>
                ))}
            </div>

            <div>
                <h2>제한 사항 선택</h2>
                {Object.keys(attraction_wrap[attractionData[0]]).map((cautionKey) => (
                    cautionKey.startsWith("caution") && (
                        <button
                            key={cautionKey}
                            onClick={() => handleCautionClick(cautionKey)}
                        >
                            {cautionKey}
                        </button>
                    )
                ))}
            </div>

            <div>
                <h2>필터링 결과</h2>
                <ul>
                    {filteredAttractions.map((attraction) => (
                        <li key={attraction.idx}>
                            {attraction.name} - {attraction.explanation}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

