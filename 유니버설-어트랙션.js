/* 
    caution1 : 안내견 동반 가능
    caution2 : 가발착용 가능
    caution3 : 임산부 가능
    caution4 : 휠체어 가능
    caution5 : 차일드 스위치 사용 가능
    caution6 : 싱글 라이더 사용 가능
    caution7 : 자막 표시 안경 이용 가능(일본어)

*/

const attraction_wrap = {
    "attraction_idx1":{
        idx : "1",
        name : "42nd 스트리트 스튜디오 ~그리팅 갤러리~",
        image : "attraction1",
        explanation : "뉴욕 한켠에 위치한 ‘42nd 스트리트 스튜디오’는 화제의 아티스트들이 앞다투어 전시회를 연다는 유명한 갤러리. 그중 인기 최고의 아티스트, 미니언과 스누피가 여러분을 아틀리에로 초대해 작품을 공개! 새로운 영감을 찾아 헤매던 중이라 어쩌면 당신에게 도와달라고 할지도?! 작품이 완성되면 함께 기념사진을 찍어 보자!",
        caution1 : "1",
        caution2 : "1",
        caution3 : "1",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx2":{
        idx : "2",
        name : "그로버 콘스트럭션 컴퍼니" ,
        image : "attraction2",
        explanation : "길쭉한 모양의 블록과 톱니바퀴 모양의 블록. 여러 가지 모양의 커다란 블록이 한가득! 무엇을 만들까요? 마음대로 자유롭게 만들고 즐겨요!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx3":{
        idx : "3",
        name : "날아라 스누피" ,
        image : "attraction3",
        explanation : "스누피와 함께 하늘을 날자! 직접 조종해서 피너츠 친구들의 주변을 돌며 날아올랐다가 저공으로 비행해 보자. 하늘 높이 날아서 구름 위에 있는 것처럼 둥실둥실 떠있는 기분을 맛보세요.",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx4":{
        idx : "4",
        name : "더 플라잉 다이너소어" ,
        image : "attraction4",
        explanation : "뉴욕 한켠에 위치한 ‘42nd 스트리트 스튜디오’는 화제의 아티스트들이 앞다투어 전시회를 연다는 유명한 갤러리. 그중 인기 최고의 아티스트, 미니언과 스누피가 여러분을 아틀리에로 초대해 작품을 공개! 새로운 영감을 찾아 헤매던 중이라 어쩌면 당신에게 도와달라고 할지도?! 작품이 완성되면 함께 기념사진을 찍어 보자!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx5":{
        idx : "5",
        name : "마리오 카트: 쿠파의 도전장™" ,
        image : "attraction5",
        explanation :  `그 유명한 마리오 카트의 세계와 놀라움 가득한 갖가지 코스가 바로 눈앞에 등장한다! 등껍질을 던져 적을 격퇴하면서 마리오 그리고 피치공주와 함께 돌진하라! 파크만의 최신 기술로 실현되는 세계 최초*의 마리오 카트 체험에 두근두근 흥분이 멈추지 않는다!<br/>
        * 마리오 카트 및 마리오의 게임 속 세계를 테마로 한 테마파크의 오리지널 어트랙션, 게임을 취급하는 시설을 대상으로 한 자사 조사.`,
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx6":{
        idx : "6",
        name : "만나기",
        image : "attraction6",
        explanation : `그 유명한 마리오 카트의 세계와 놀라움 가득한 갖가지 코스가 바로 눈앞에 등장한다! 등껍질을 던져 적을 격퇴하면서 마리오 그리고 피치공주와 함께 돌진하라! 파크만의 최신 기술로 실현되는 세계 최초*의 마리오 카트 체험에 두근두근 흥분이 멈추지 않는다!<br/>
        * 마리오 카트 및 마리오의 게임 속 세계를 테마로 한 테마파크의 오리지널 어트랙션, 게임을 취급하는 시설을 대상으로 한 자사 조사.`,
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx7":{
        idx : "7",
        name : "몹피의 럭키 댄스 파티",
        image : "attraction7",
        explanation : "댄스파티에 오신 것을 환영합니다. 하트와 별이 가득한 홀에서 DJ와 함께 음악에 맞춰 즐겁게 춤춰요! 몹피를 만날 수 있다면 행운이겠죠!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx8":{
        idx : "8",
        name : "몹피의 벌룬 여행",
        image : "attraction8",
        explanation : "몹피가 여러분을 즐거운 풍선 여행으로 초대했어요. 푸른 하늘로 날아올라 원더랜드의 깜찍한 세계를 즐겨보아요. 핸들을 돌리면 곤돌라도 빙글빙글, 모두 다 함께 신나게 놀자!",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx9":{
        idx : "9",
        name : "미니언 그리팅",
        image : "attraction9",
        explanation : "‘미니언 파크’ 가장 안쪽의 유달리 눈에 띄는 그루의 저택. 그곳의 지하 연구실에 사는 미니언들이 가끔씩 저택 앞에 등장해요! 함께 사진을 찍고 교류하면서 서로 친해질 찬스입니다!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx10":{
        idx : "10",
        name : "미니언 랠리",
        image : "attraction10",
        explanation : "성공하면 미니언들이 선물을 드려요. 생각지도 못했던 곳에 신기한 미니언이 숨어 있을지도?! 미니언 파크에 오면 스페이스 킬러 등의 게임 코너에서 책자를 손에 넣자!(유료)",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx11":{
        idx : "11",
        name : "미니언 메이헴",
        image : "attraction11",
        explanation : "거대 돔 스크린 위에 펼쳐지는 현장감 넘치는 영상과 함께 미니언들이 일으키는 뒤죽박죽 대소동 속으로 리얼하게 휩쓸려 들어가는 흥분 최고조의 라이드 어트랙션을 즐기자! 무대는 괴도 그루의 저택 겸 연구실. 그루가 발명한 특별한 차량을 타면 ‘미니언이 되기’ 위한 기상천외한 트레이닝 스타트! 수많은 미니언 & 그루의 세 딸과 함께 연구실 안을 어지럽게 뛰어다니기도 하고, 마음껏 신나게 날기도 하고, 그러다 땅끝까지 곤두박질! 인줄 알았더니 미니언과 그루 & 세 자매의 깊은 유대감에 생각지도 못하게 심쿵 하기도. 너무나 자유롭지만 정의감만큼은 투철한 미니언. 그 깜찍함을 만끽할 수 있는 뒤죽박죽 대소동의 한복판으로 뛰어들자!",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx12":{
        idx : "12",
        name : "미니언즈 피버 디스코 그리팅",
        image : "attraction12",
        explanation : "뒤죽박죽 그리팅에서 귀여운 디스코 의상을 입은 미니언즈와 함께 사진을 찍자!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx13":{
        idx : "13",
        name : "바나나 카바나",
        image : "attraction13",
        explanation : "가장 좋아하는 바나나를 던져 주고, 미니언에게 선물을 받자!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx14":{
        idx : "14",
        name : "버블 비트 블록",
        image : "attraction14",
        explanation : "HIPHOP 비트를 타고 펼쳐지는 버블을 사용한 신감각 하이 스킬 퍼포먼스!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx15":{
        idx : "15",
        name : "버트와 애니의 원더 더 시",
        image : "attraction15",
        explanation : "미끄럼틀이 버트와 어니가 있는 볼 풀을 향해 뻗어 있네요. 용기 내서 미끄럼틀을 타고 내려가면 그곳은 파란색과 흰색 공이 가득한 바다! 해초가 하늘거리는 바닷속으로 잠수하거나 점프하면서 마음껏 헤엄치며 놀아요!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx16":{
        idx : "16",
        name : "버트와 어니의 프로숍 게임 플레이스",
        image : "attraction16",
        explanation : "어트랙션과 쇼를 즐기는 사이사이에 가볍게 놀 수 있는 게임에 도전해 보자! 깜찍한 경품을 받을 수 있는 찬스!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx17":{
        idx : "17",
        name : "빅 버드 비드 탑 서커스",
        image : "attraction17",
        explanation : "빅서커스 단장이 된 빅 버드. 빅 버드의 지시에 따라 동물들이 어슬렁어슬렁 주변을 돌고 있네요. 이 많은 동물을 타고 함께 빙글빙글.",
        caution1 : "1",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx18":{
        idx : "18",
        name : "빅 버드 빅 네스트",
        image : "attraction18",
        explanation : "센트럴 파크에 나타난 빅 버드의 둥지는 신나는 놀이공원이랍니다. 균형을 잡은 채 밧줄을 건너고 그물 위를 오르락내리락하면서 힘차게 몸을 움직여요! 씩씩하게 몸을 움직이자!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx19":{
        idx : "19",
        name : "세서미 빅 드라이브",
        image : "attraction19",
        explanation : "마치 뉴욕 센트럴 파크를 달리고 있는 듯한 박력 있는 드라이브를 즐길 수 있는 라이드 어트랙션.",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx20":{
        idx : "20",
        name : "세서미 스트리트 4-D 무비 매직™",
        image : "attraction20",
        explanation : "오리지널 3-D 영화에 놀랍도록 새로운 차원의 효과가 더해진 4-D 엔터테인먼트. 세서미 스트리트™의 친구들, 엘모, 쿠키 몬스터, 빅 버드, 버트, 어니와 함께 바다로 잠수하고 하늘을 날아보아요. 상상 속의 세상을 온몸으로 느낄 수 있습니다.",
        caution1 : "1",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "1",
    },
    "attraction_idx21":{
        idx : "21",
        name : "슈렉 4-D 어드벤처",
        image : "attraction21",
        explanation : "드림웍스의 아카데미상 수상작 ‘슈렉’에서 탄생한 파크만의 오리지널 스토리. 슈렉, 동키와 함께 스릴 만점의 새로운 모험을 떠나자! 그곳은 3-D 영화에 새로운 차원의 특수 효과를 더한 4-D의 세계.",
        caution1 : "1",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "1",
    },
    "attraction_idx22":{
        idx : "22",
        name : "스누피 사운드 스테이지 어드벤처™",
        image : "attraction22",
        explanation : "아이들이 자유롭게 놀 수 있는 즐길 거리가 가득한 실내형 플레이랜드입니다.",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx23":{
        idx : "23",
        name : "스페이스 킬러",
        image : "attraction23",
        explanation : "미니언들이, 세 자매가 제일 좋아하는 게임을 미니언 파크에도 오픈! 게임에 도전해서 경품을 받아 가자!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx24":{
        idx : "24",
        name : "스페이스 판타지 더 라이드",
        image : "attraction24",
        explanation : "끝없는 우주 공간 여기저기 흩어져 있는 아름다운 별들 사이를 종횡무진 질주하는 우주선을 타고, 해방감을 만끽하며 우주를 탐험해보아요.",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx25":{
        idx : "25",
        name : "씽 온 투어",
        image : "attraction25",
        explanation : "모든 동물 여러분! 드디어 세계적인 뮤지컬 쇼 ‘씽 온 투어’가 이곳 일루미네이션 시어터에서 막을 올립니다! 그 유명한 “씽(SING)”에 등장한 멋진 싱어의 “실제 캐릭터”들이 모두에게 친숙한 레전드 팝을 파워풀하고 소울 충만한 목소리로 눈앞에서 열창! 보고 있노라면 당신의 열기도 틀림없이 최고조로! 동물 사상 최고로 핫한 뮤지컬 쇼 어트랙션에서 모두 함께 씽&샤우팅!!",
        caution1 : "1",
        caution2 : "1",
        caution3 : "1",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx26":{
        idx : "26",
        name : "애머티 보드워크 게임",
        image : "attraction26",
        explanation : "애미티 빌리지의 라군 부근에 위치한 이곳에서는 카니발 게임에 도전할 수 있어요! 어트랙션과 쇼를 즐기는 사이사이나 식후의 포만감을 느낄 때 즈음, 몸을 가볍게 움직여서 게임에 한번 도전해 보세요! 깜찍한 경품을 받을 수 있는 찬스!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx27":{
        idx : "27",
        name : "애비의 매지컬 트리",
        image : "attraction27",
        explanation : "커다란 나무 안을 들여다보자 정말 신나는 정글짐이 펼쳐졌어요! 꼭대기까지 열심히 올라가면 어떤 경치가 보일까요?",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx28":{
        idx : "28",
        name : "애비의 매지컬 파티",
        image : "attraction28",
        explanation : "애비가 마법을 건 홀에는 커다란 별 블록과 공이 가득해요. 블록 위에 올라가거나 공을 던지면서 크고 작은 친구들도 다 함께 사이좋게 놀아요!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx29":{
        idx : "29",
        name : "어니의 러버 덕 레이스",
        image : "attraction29",
        explanation : "마음에 드는 오리를 고르면 언덕 위에서 결승점을 향해 물에 띄워요. 도중에 걸리지 않고 끝까지 잘 도착할 수 있을까요?",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx30":{
        idx : "30",
        name : "어메이징 어드벤처 오브 스파이더맨 더 라이드 4K3D",
        image : "attraction30",
        explanation : "사상 처음으로 7년 연속 세계 No.1 라이드 어트랙션상을 수상한 세계 최고 어트랙션이 세계 최고 기술 ‘4K3D’와 융합하여 전혀 다른 라이드로 변신! 현실과 구별이 가지 않을 정도의 믿을 수 없는 박력과 100가지가 넘는 특수 효과가 가져다주는 차원이 다른 탑승감! 지금까지 경험한 적 없는 차원이 다른 흥분과 만난다!",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx31":{
        idx : "31",
        name : "엘모의 고 고 스케이트보드",
        image : "attraction31",
        explanation : "엘모와 함께 스케이트보드를 타고 경사면을 상쾌하게 달려보자!거대한 스케이트보드의 예측할 수 없는 다이내믹한 움직임에 아이들은 콩닥콩닥, 어른들도 어느샌가 환호성을 질러요!",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx32":{
        idx : "32",
        name : "엘모의 리틀 드라이브",
        image : "attraction32",
        explanation : "만 3세 어린이도 운전을 만끽할 수 있는 라이드 어트랙션. 귀여운 엘모 디자인의 자동차로 주행코스를 달려보아요.",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx33":{
        idx : "33",
        name : "엘모의 버블 버블",
        image : "attraction33",
        explanation : "엘모의 꿈나라에 오신 것을 환영합니다. 엘모의 애완동물인 금붕어 도로시를 타고 떠나는 수상 여행 출발! 엘모가 만드는 비눗방울을 감상하며 여유롭게 항해하세요. 꿈속 세상 같은 실내 라이드 어트랙션입니다.",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx34":{
        idx : "34",
        name : "올리밴더스의 가게™",
        image : "attraction34",
        explanation : "마법지팡이 상자가 천장까지 수북하게 쌓여 있는 먼지 낀 작은 가게 안에서 지팡이 파수꾼과 함께 ‘지팡이가 마법사를 선택하는’ 상황을 체험할 수 있습니다.",
        caution1 : "1",
        caution2 : "1",
        caution3 : "1",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx35":{
        idx : "35",
        name : "완드 스터디",
        image : "attraction35",
        explanation : "지금껏 본 적 없는 엄청난 마법이 당신의 눈앞에서 실제로 일어납니다! 훌륭한 마법사가 되기 위해서 호그와트™ 마법 학교 네 곳의 기숙사 학생들은 마법 연습 중입니다. 성공과 실패를 거듭하면서 열심히 연습하는 학생들과 함께, 눈앞에서 실제로 일어나는 마법의 매력에 빠져 보세요. 용기 있는 마법사 여러분, 마법을 거는 학생들에게 도움을 주세요!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx36":{
        idx : "36",
        name : "요시 어드벤처™",
        image : "attraction36",
        explanation : "요시의 등에 타고 키노피오대장을 쫓아서 보물찾기 모험을 떠나자! 대장이 깜빡하고 놓고 간 지도를 참고하여 사방에 숨어 있는 3개의 달걀을 찾아내자. 키다리산에서 버섯 왕국을 내려다보기도 하고 깜찍한 아이들과 만나는 등 즐거움이 한가득!",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx37":{
        idx : "37",
        name : "워터 가든",
        image : "attraction37",
        explanation : "물이 리드미컬하게 솟아오르기도 하고 흘러내리기도 해요.",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx38":{
        idx : "38",
        name : "워터 월드",
        image : "attraction38",
        explanation : "체험자 수 누계 1억 명(※) 돌파. 영화 속의 숨 막히는 스턴트 액션을 그대로 재현하여 절대적인 인기를 얻고 있는 어트랙션 쇼가 진화한다. 새로워진 서라운드 음향 시스템에 의해 폭발이나 총격에 말려든 듯한 압도적인 현장감에 둘러싸인다! 긴박감 넘치는 수상 배틀의 한복판으로 지금, 내던져진다!",
        caution1 : "1",
        caution2 : "1",
        caution3 : "1",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx39":{
        idx : "39",
        name : "유니버설 몬스터 라이브 록큰롤 쇼",
        image : "attraction39",
        explanation : "펑키하고 크레이지한 몬스터, 비틀쥬스™와 드라큘라, 늑대 인간, 프랑켄슈타인™, 그리고 프랑켄슈타인의 신부™까지 한밤중의 묘지에 모두 집결. 예전에 사람들을 공포의 늪에 빠뜨린 그들이 이번에는 할리우드에서 익힌 춤과 노래로 주변을 흥분의 도가니로 몰고 갑니다. 유명한 록넘버를 배경으로 펼쳐지는 리얼 라이브 엔터테인먼트를 절대로 놓치지 마세요.",
        caution1 : "1",
        caution2 : "1",
        caution3 : "1",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx40":{
        idx : "40",
        name : "유니버설 스펙터클 나이트 퍼레이드~베스트 오브 할리우드~",
        image : "attraction40",
        explanation : "퍼레이드 카 × 맵핑의 놀라운 현장감이 퍼레이드의 상식을 깬다! 압도적인 마법 장치로 매료시키는 ‘해리 포터’의 세계, 전 세계에서 처음 시도되는 “변형하는 퍼레이드 카”로 짜릿한 흥분을 선사하는 ‘트랜스포머’, 그리고 포효하며 날뛰는 공룡의 세계에 내던져지는 ‘쥬라기 월드’, 거리를 뒤죽박죽 디스코 공간으로 바꾸어버리는 ‘미니언즈’ 등, 끊임없이 밀려오는 궁극의 현장감 넘치는 공간이 현실을 침식하고 당신을 이야기의 한복판으로 이끈다! 기간 한정의 특별 에어리어까지 등장해서 더욱 파워 업!",
        caution1 : "1",
        caution2 : "1",
        caution3 : "1",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx41":{
        idx : "41",
        name : "유니버설 원더랜드 필 더 리듬",
        image : "attraction41",
        explanation : "유니버설 원더랜드의 친구들과 함께 인기 절정의 춤을 추자 귀여운 유니버설 원더랜드의 친구들과 함께 즐겁게 춤추며 놀자! 할로윈 한정 코스튬과 음악에 두근두근, 아이들의 얼굴에 웃음꽃이 만발하는 행복한 마중에 흥분 최고조!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx42":{
        idx : "42",
        name : "죠스",
        image : "attraction42",
        explanation : "평화로운 항구 마을의 즐거운 보트 투어가 순식간에 돌변하게 됩니다. 갑자기 나타난 거대 식인상어로 인해 생사를 가르는 공포의 투어로 변해 버립니다. 영화 ‘죠스’의 바다를 무대로 한 공포 투어.",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx43":{
        idx : "43",
        name : "쥬라기 공원 다이너소어 미트&그리트",
        image : "attraction43",
        explanation : "아열대 정글에서 박력 넘치는 거대한 공룡과 아기 공룡을 만날 수 있는 놀라운 체험!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx44":{
        idx : "44",
        name : "쥬라기 공원 더 라이드",
        image : "attraction44",
        explanation : "태고의 공룡과 만나는 탐험에 예상 밖의 트러블 발생. 포효하며 날뛰는 T-렉스에 절체절명, 도망치기 위해 25.9m 밑으로 곤두박질!",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx45":{
        idx : "45",
        name : "지팡이 마법",
        image : "attraction45",
        explanation : "마법사들이 사는 곳, 호그스미드 마을™에서는 당신도 실제로 마법을 걸 수 있어요. 그 유명한 창문과 석조 벽, 그리고 뒷골목에서도 특별한 마법을 걸 수 있어요! 주문을 외우며 지팡이를 휘둘러 보세요. 그러면 갑자기 주변에 눈이 흩날리거나 커다란 솥에서 물이 뿜어져 나와요! 처음에는 실패해도 몇 번이고 연습하다 보면 꼭 잘하게 될 거예요.",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx46":{
        idx : "46",
        name : "쿠키 몬스터 슬라이드",
        image : "attraction46",
        explanation : "쿠키 몬스터가 커다란 미끄럼틀로 변했어요! 거대한 초코칩 쿠키를 먹으려고 내민 혀에 올라타서 단숨에 내려가 볼까요!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx47":{
        idx : "47",
        name : "트리위저드 스피릿 랠리",
        image : "attraction47",
        explanation : "트리위저드 시합을 위해 호그와트™ 마법 학교에 방문한 덤스트랭과 보바통 마법 학교의 퍼포먼스. 파워풀한 액션과 우아한 연기에 빠져드실 것입니다.",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx48":{
        idx : "48",
        name : "파워 업 밴드™ 키 챌린지",
        image : "attraction48",
        explanation : "골든버섯을 쿠파주니어에게 도둑맞았다! 곳곳에 있는 적들을 쓰러뜨리고 3개의 열쇠를 획득하라! 열쇠를 다 획득한 후에 기다리고 있는 것은 쿠파주니어와의 대흥분 보스 배틀. 자 그럼 쿠파주니어를 무찌르고 무사히 골든버섯을 되찾을 수 있을까!?",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx49":{
        idx : "49",
        name : "파워 오브 팝: 트렌딩",
        image : "attraction49",
        explanation : "인기 절정 싱잉 쇼가 오리지널 송&댄스와 함께 극적으로 파워 UP!", 
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx50":{
        idx : "50",
        name : "페스티발 인 더 파크",
        image : "attraction50",
        explanation : "파크 중앙의 라군 부근에 위치한 이곳에서는 카니발 게임에 도전할 수 있어요! 어트랙션과 쇼를 즐기는 사이사이나 식후의 포만감을 느낄 때 즈음, 몸을 가볍게 움직여서 게임에 한번 도전해 보세요! 깜찍한 경품을 받을 수 있는 찬스!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx51":{
        idx : "51",
        name : "프로그 콰이어",
        image : "attraction51",
        explanation : "호그와트™ 마법 학교 학생들의 멋진 화음을 들어보세요. 그리핀도르™, 슬리데린™, 후플푸프™, 래번클로™의 각 기숙사에서 선발한 4명의 합창단이 마법세계의 명곡을 선보입니다. 재능 넘치는 개구리들의 반주에도 주목해 주세요.",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx52":{
        idx : "52",
        name : "프리즈 레이 슬라이더",
        image : "attraction52",
        explanation : "미니언 파크의 열기 때문에 파크 안 수영장 물이 끓고 있다고?! 당황한 미니언들이 거대한 얼음 총을 꺼내와서 냉동광선 발사! 갑자기 등장한 아이스링크에 미니언들의 장난기가 폭발. 제빙차를 타고 이쪽으로 미끌 저쪽으로 미끌. 예측 불가능한 뒤죽박죽 신나는 얼음 위 레이스 스타트!",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx53":{
        idx : "53",
        name : "플라이트 오브 더 히포그리프™",
        image : "attraction53",
        explanation : "마법세계의 생물인 히포그리프와 하늘을 질주하는 이 라이드는 온 가족이 함께 즐길 수 있는 어트랙션입니다. 해그리드™에게 히포그리프에 대한 올바른 접근 방법을 배운 후 히포그리프로 비행 훈련을 시작합시다. 독수리의 머리와 말의 몸을 가진 히포그리프는 대단히 긍지 높은 마법 생물이므로 다가가기 전에 먼저 인사하는 것을 잊지 마세요. 해그리드의 오두막과 호박밭 하늘을 날아다니는 이 어트랙션에서는 멋진 경관도 즐길 수 있습니다.",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx54":{
        idx : "54",
        name : "플레잉 위드 원숭이 조지™",
        image : "attraction54",
        explanation : "언제 어디서나, 무엇이든 알고 싶은 것투성이! 그런 호기심 많은 귀여운 모습으로 전 세계적인 인기를 얻고 있는 ‘원숭이 조지™’가 어트랙션으로! 무대는 애니메이션 제작 스튜디오. 맙소사! 그림 안에 있어야 할 조지가 현실 세계로 뛰쳐나왔다! 처음 만나는 세계에 두근두근 흥미진진, 스튜디오 안을 해맑게 뛰어다니는 조지와 친구가 되어 호기심이 이끄는 대로 마음껏 즐기자!",
        caution1 : "1",
        caution2 : "1",
        caution3 : "1",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx55":{
        idx : "55",
        name : "피에스타 라티나",
        image : "attraction55",
        explanation : "라틴 리듬을 타고 당신도 함께 춤을 추게 된다! 놀라움이 가득한 스트리트 댄스에 흥분 최고조!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "0",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx56":{
        idx : "56",
        name : "할리우드 드림 더 라이드",
        image : "attraction56",
        explanation : "이 롤러코스터는 유니버설 스튜디오 재팬의 독창성과 세계 굴지의 롤러코스터 제작회사의 최첨단 기술이 집약되어 마치 하늘을 나는 것 같은 상쾌함을 느낄 수 있는 놀이기구입니다. 좋아하는 배경음악(BGM)을 들으며 눈이 번쩍 뜨일 만한 스릴감을 온몸으로 느껴보세요.",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx57":{
        idx : "57",
        name : "할리우드 드림 더 라이드~백드롭~",
        image : "attraction57",
        explanation : "43m 높이에서 상상할 수 없는 각도로 머리부터 떨어지는 느낌으로 낙하! 어디로 갈지 알 수 없는 예측 불가능한 최고의 스릴과 자극! 괴성과 함께 역방향 롤러코스터(백드롭) 출발!",
        caution1 : "0",
        caution2 : "0",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx58":{
        idx : "58",
        image : "attraction58",
        name : "해리 포터 앤드 더 포비든 저니™",
        explanation : `과거 5년 연속 세계 NO.1※ 라이드 어트랙션 수상에 빛나는 압도적 체감 라이드가 더욱 진화한다! 해리포터™의 세계를 온몸으로 질주하는 현장감 넘치는 리얼리티로 더 이상 3D 안경은 필요 없다. 더욱 파워업한 마법 효과로 드래곤이 내뿜는 화염과 디멘터의 냉기가 온몸을 직격한다! 360도로 펼쳐지는 마법 세계를 더욱 리얼하게, 더욱 가깝게, 온몸을 내맡긴 채 해리 포터와 함께 질주하며 새로운 모험으로 새로운 차원의 스릴을 체감하자!<br />
        ※ 예고 없이 마감될 수 있습니다. 자세한 내용은 직원에게 문의해 주십시오.`,
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "1",
        caution7 : "0",
    },
    "attraction_idx59":{
        idx : "59",
        image : "attraction59",
        name : "헬로키티 리본 컬렉션",
        explanation : "헬로키티가 모두를 위해 스튜디오를 공개했습니다. 최신 패션 아이템과 하이힐 모양의 미끄럼틀에서 즐거운 시간을 보내고, 키티와 함께 기념사진도 찍어보세요.",
        caution1 : "1",
        caution2 : "1",
        caution3 : "1",
        caution4 : "1",
        caution5 : "0",
        caution6 : "0",
        caution7 : "0",
    },
    "attraction_idx60":{
        idx : "60",
        image : "attraction60",
        name : "헬로키티 컵케이크 드림",
        explanation : "헬로키티의 케이크 파티에 초대합니다. 색색별로 진열된 컵케이크 가운데 여러분은 어떤 것을 고르실 것인가요? 음악에 맞춰 빙글빙글 컵이 돌아갑니다. 핸들을 돌리면 더 재미있어질지도 모릅니다.",
        caution1 : "0",
        caution2 : "1",
        caution3 : "0",
        caution4 : "1",
        caution5 : "1",
        caution6 : "0",
        caution7 : "0",
    },
}

// 찾고 싶은 항목
const option1 = {
    "서비스 전체" : [
        "attraction_idx3", "attraction_idx8", "attraction_idx31", "attraction33", "attraction_idx1", "attraction_idx4", "attraction_idx6", "attraction_idx30", "attraction_idx36", "attraction_idx42", "attraction_idx43", "attraction_idx58", "attraction_idx59"
    ],
    "예약 탑승" : [
        "attraction_idx3", "attraction_idx8", "attraction_idx31", "attraction33"
    ],
    "포토 서비스" : [
        "attraction_idx1", "attraction_idx4", "attraction_idx6", "attraction_idx30", "attraction_idx36", "attraction_idx42", "attraction_idx43", "attraction_idx58", "attraction_idx59" 
    ]
}

// 에어리어
const area = {
    "에어리어" : [

    ],
    "슈퍼 닌텐도 월드™" : [
        "attraction_idx5", "attraction_idx6", "attraction_idx36", "attraction_idx48"
    ],
    "위저딩 월드 오브 해리 포터™" : [
        "attraction_idx34", "attraction_idx35", "attraction_idx45", "attraction_idx47", "attraction_idx51", "attraction_idx53", "attraction_idx58"
    ],
    "미니언 파크" : [
        "attraction_idx9", "attraction_idx10", "attraction_idx11", "attraction_idx13", "attraction_idx23", "attraction_idx52"
    ],
    "유니버설 원더랜드" : [
        "attraction_idx2", "attraction_idx3", "attraction_idx7", "attraction_idx8", "attraction_idx15", "attraction_idx16" , "attraction_idx17", "attraction_idx18", "attraction_idx19", "attraction_idx22", "attraction_idx27", "attraction_idx28", "attraction_idx29", "attraction_idx31", "attraction_idx32", "attraction_idx33", "attraction_idx37", "attraction_idx41", "attraction_idx46", "attraction_idx59", "attraction_idx60"
    ],
    "할리우드" : [
        "attraction_idx12", "attraction_idx20", "attraction_idx21", "attraction_idx24", "attraction_idx25", "attraction_idx39", "attraction_idx40", "attraction_idx49", "attraction_idx54", "attraction_idx56",  "attraction_idx57"
    ],
    "뉴욕" : [
        "attraction_idx1", "attraction_idx14", "attraction_idx30", "attraction_idx50", "attraction_idx55" 
    ],
    "쥬라기 공원" : [
        "attraction_idx4", "attraction_idx43", "attraction_idx44"
    ],
    "애머티 빌리지" : [
        "attraction_idx26", "attraction_idx42"
    ],
    "워터 월드" : [
        "attraction_idx38"
    ]
}

// 어트랙션 특징
const characteristic = {
    "전부" : [

    ],
    "3D & 4D" : [
        "attraction_idx20", "attraction_idx21", "attraction_idx30"
    ],
    "어린이에게 추천" : [
        "attraction_idx1", "attraction_idx2", "attraction_idx3", "attraction_idx6", "attraction_idx7", "attraction_idx8", "attraction_idx9", "attraction_idx11", "attraction_idx12",
        "attraction_idx15", "attraction_idx17", "attraction_idx18", "attraction_idx19", "attraction_idx20", "attraction_idx21", "attraction_idx22", "attraction_idx25", "attraction_idx27",
        "attraction_idx28", "attraction_idx29", "attraction_idx31", "attraction_idx32", "attraction_idx33", "attraction_idx34", "attraction_idx36", "attraction_idx37", "attraction_idx40",
        "attraction_idx41", "attraction_idx46", "attraction_idx52", "attraction_idx54", "attraction_idx59", "attraction_idx60"
    ],
    "어린이와 함께 즐기기" : [
        "attraction_idx1", "attraction_idx3", "attraction_idx6", "attraction_idx8", "attraction_idx9", "attraction_idx12", "attraction_idx17", "attraction_idx19", "attraction_idx21",
        "attraction_idx33", "attraction_idx34", "attraction_idx36", "attraction_idx40", "attraction_idx41", "attraction_idx42", "attraction_idx54", "attraction_idx59", "attraction_idx60" 
    ],
    "물에 젖을 수 있음" : [
        "attraction_idx29", "attraction_idx33", "attraction_idx37", "attraction_idx38", "attraction_idx42", "attraction_idx44", "attraction_idx52"
    ],
    "절규/스릴 만점" : [
        "attraction_idx4", "attraction_idx5", "attraction_idx11", "attraction_idx24", "attraction_idx30", "attraction_idx31", "attraction_idx38", "attraction_idx42",  "attraction_idx44",
        "attraction_idx53", "attraction_idx56", "attraction_idx57", "attraction_idx58"
    ]
};

// 신장 제한
const height_restrictions = {
    "제한 없음" : [

    ],
    "신장 제한 122cm 이상" : [

    ],
    "신장 제한 122cm 이상 및 195cm 이하" : [

    ],
    "신장 제한 132cm 이상" : [

    ],
    "신장 제한 132cm 이상 및 198cm 이하" : [

    ],
    "신장 제한 없음" : [

    ]
};

// 어트랙션 타입
const attraction_type = {
    "라이드 어트랙션" : [

    ],
    "쇼 어트랙션" : [

    ],
    "스테이지 쇼 &  스트리트 쇼" : [

    ],
    "플레이랜드·기타" : [

    ],
    "게임" : [

    ]

} ;

// 서포트
const support = {
    "전부" : [

    ],
    "안내견 동반 가능" : [

    ],
    "가발 착용 가능" : [

    ], 
    "싱글 라이더 사용 가능" : [

    ],
    "차일드 스위치 사용 가능" : [

    ],
    "임산부 가능" : [

    ],
    "휠체어 가능" : [

    ],
    "자막 표시 안경 이용 가능(일본어)" : [

    ]
};