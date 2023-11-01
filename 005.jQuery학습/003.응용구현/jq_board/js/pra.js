import bData from "./data.json" assert { type: "json" };
bData.sort((a, b) => Number(a.idx) == Number(b.idx)? 0 : Number(a.idx) > Number(b.idx)? -1:1);

const board = $('#board tbody');
let listNum = 0;
const addNum = () => ++listNum;

const pgBlock = 9;
let pgNum = 1;
const totalCnt = bData.length;
let pagingBlock = Math.floor(totalCnt / pgBlock);
let addOver = totalCnt % pgBlock;

const updateList = ()