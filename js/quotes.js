const quotes = [
  {
    quote: "나는 내 자신에게 한계를 두지 않는다. 그렇기에 내 팔은 성장했다.",
    author: "아놀드 슈워제네거",
  },
  {
    quote: "무슨 일이 있어도 2개 더 해",
    author: "아놀드 슈워제네거",
  },
  {
    quote: "간단하다. 흔들리면 지방이다.",
    author: "아놀드 슈워제네거",
  },
  {
    quote:
      "모두가 보디빌더 같은 몸을 원하지만 아무도 이 좆같이 무거운 무게를 들려고 하지 않아",
    author: "로니 콜먼",
  },
  {
    quote: "오버트레이닝 해라. 너의 한계를 안다는것은 굉장히 중요하다",
    author: "카이 그린",
  },
  {
    quote: "좋은 중량이야. 작은 여자에게는",
    author: "도리안 예이츠",
  },
  {
    quote: "정확하게 반복하고 허세없이 운동하라. 무게의 노예가 되지마라.",
    author: "제이 커틀러",
  },
  {
    quote:
      "몸을 만들고 싶으면 말로 떠들지 말고, 30분이라도 체육관을 가서 몸으로 떠들어라.",
    author: "제이슨 스타뎀",
  },
  {
    quote:
      "스쿼트를 하지 않는다면 당신을 결코 자신의 무한한 잠재력에 도달할 수 없다.",
    author: "폴 앤더슨",
  },
  {
    quote: "비법? 그딴건 없어",

    author: "제이 커틀러",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
