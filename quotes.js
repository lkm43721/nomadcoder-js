const quotes = [
    {
        quotes: "재능은 꽃 피우는 것, 센스는 갈고 닦는 것",
        author: "하이큐"
    },
    {
        quotes: "인생은 포기하는 순간 끝나는 것이야.",
        author: "도라에몽"
    },
    {
        quotes: "잃은 것만 세지 마! 없는 건 이제 없어! 너에게 남은 건 뭐냐?",
        author: "원피스"
    },
    {
        quotes: "자신을 믿지 않는 녀석 따위는 노력 할 가치도 없다",
        author: "나루토"
    },
    {
        quotes: "할 수 있냐 없냐는 중요하지 않아. 하고 싶으니까 하는 거야",
        author: "원피스"
    },
    {
        quotes: "이 세상은 잔혹하다. 그리고 너무나 아름답다",
        author: "진격의 거인"
    },
    {
        quotes: "인간이 5명이 모이면 반드시 1명은 쓰레기가 있다",
        author: "나루토"
    },
    {
        quotes: "포기하면 그 순간이 바로 시합 종료예요",
        author: "슬램덩크"
    },
    {
        quotes: "뭔가를 얻기 원한다면 그와 동등한 대가가 필요하다",
        author: "강철의 연금술사"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quotes
author.innerText = "-"+randomQuote.author