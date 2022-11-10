
지나치게 재귀적인 구조를 만드는건 좋지 않음


styled-component 설정은 나중에
일단 틀 먼저 잡기
props 를 통해 전달되는 인자를 통해서만 수정이 의미가 있을 때 하는 것

앞으로 더 꽁부해서 얼마나 더 잘 할 수 있을지



프론트 & 백앤드의 구조에서 프록시 서버는 반드시 필요함
프록시 서버로 nginx 사용이 필수

왜 나는 프론트와 백 사이의 구체적인 경계를 아직도 모르는거지


기본적으로 jwt auth 을 사용하기 때문에 access-token 이 cookie 에 존재함
서로 다른 origin 요청이 동일한 cookie 에 access 해야 하는 단점이 있음

CSR : Client Side Rendering
기본적인 React Dom 을 프론트 서버로부터 받은 후 클라이언트 측에서 필요한 정보를 백앤드에 요청하여 조합하는 구성

SSR : Server Side Rendering
가나다라마바사


첫 프로젝트이고 기한 문제도 있어서 그냥 완벽한 CSR 로 가자
다만 request 에 따라 리디렉션을 하도록 구성
HTML의 크기가 크지 않기 때문에 이대로 해도 아무런 상관이 없음
저널 사이트 만들때나 Next.js 이런걸로 잘 잡아주도록 하고




라이브러리 범벅으로 만들어


매번 달라지는 정의때문에 정신이 없네

만들어야 하는 페이지를 다 적어보자



introduce page
- introduces how mileage accumulates

main page
- shows accumulated asset
- with two papers

personal info page
- shows standard, account, recommendee's information
- Use axios carefully

register page :
- redirected from expl. page. 
- there are many pages : 이용 약관, 정보 등록, 등록 완료



CustomPaper 의 경우 
styled-components 와 함께 상황을 잘 봐야 함

일단 일반 paper 을 사용하되 
width, height 만 

지금은 API 연동이 더 중요


단순히 기술력을 쌓는걸 넘어서 열정을 보여줄 수 있는 포트폴리오를 작성..?
프론트 : 리액트에 대해 적당히 이해를 하고 적당한 수준의 웹페이지를 만들 수 있는 수준
백앤드 : 여러 프로젝트를 클라우드 상에서 돌려본 경험이 있는 수준

BACKEND API LAYER 을 작성할때 마주했던 문제가 다시 생김
App.tsx 에서 모든 페이지를 공개할지, 하위 부분에 넘길지
나중에 하다보면 윤곽이 잡힐지도 몰라


그냥 API 는 테스트도 어렵고 하니까 정해진 객체를 가지고 표시하는데 집중하기


APP Bar 에 들어가는 것 : 
이름 logo 프로필

avatar 구체적으로 살펴보기

원래 5초씩 걸리는게 맞는지 확인해야 함


단순하게 네모 박스 영역을 만들때는 box 를 사용하되
divideor

모든 페이지는 stack 위에 item 들이 쌓이는 방식으로 작성됨

모든 컴포넌트 단위들을 themeProvider 을 통해서 관리하기
card design 으로 빠르게 작업해보자

MileageSection


아 배울게 산더미
Context API 또 해야해


api 용어들 정리하자

전역보다는 props 로 값을 넘겨주는 방식에 익숙해져야 함
전역 함수에 의존하지 않아야 함

갈수록 비슷한 이름을 사용하는 변수가 많아지기 때문에 명명 규칙이 되게 중요한듯


Register 할 때 키를 뗄때마다 


이거 만든다고 고민 진짜 많이 했었구나
애지중지하는 작품

gl