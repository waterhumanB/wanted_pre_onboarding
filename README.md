# wanted_pre_onboarding

### Toggle

첫번째 토글 버튼으로 클릭한 메뉴에 포커스를 잡힌다.
div안에 작은 박스가 두개의 다른 메뉴를 클릭 할 때 마다
애니메이션 처럼 움직이게 보인다.

useState를 사용해서 기본값은 false로 주고,
클릭 할 때 마다 각각 true와 false 값을 state에 저장을한다.

text 색과 box의 움직임은 true와 false 값에 따라 삼항연산자로 color와
margin-left 값을 조정하고 있다.

useState와 삼항연산자를 통해서 큰 무리없이 과제를 해결했고
스타일은 styled-component를 사용해서 적용했다.

### Tab

두번째 첫번째 토글 메뉴와 다르게 이번에는 3개의 메뉴가 있었다.
useState의 조금 심화? 라는 느낌을 받았고, 똑같이 useState와
삼항연산자를 사용 했다.

값이 두개인 boolean 값이 아닌 0,1,2 라는 값을 배정해서 해결했다.

각각 UI를 만들고, 순서대로 클릭 했을 때 state에 0, 1, 2 값을 저장했고,
그 값으로 삼항연산자를 붙여 글자 색과 하단 바를 위치를 조정해서
이 부분은 toggle과 같은 방법으로 구현을 했다.

useState의 약간 심화 버전으로 시간이 조금 걸렸지만 스스로 해결할 수 있었다.

### Slider

세번째 슬라이더.. 정말 어려웠다. 감이 잡히지 않아 바로 구글링을 통해서
input 태그에서 type이 range 값으로 설정을 할 수 있는 것을 찾았고
바로 적용 했다. 성공 적이였고, datalist 태그안에 option 태그의 값들을
input 태그와 연동 하는 기능도 알게 되었다.

우선 input에 onChange 이벤트를 달아 e.target.value값을 계속 받아와
하나의 useState를 만들고 state를 저장했고 그 값은 맨위 div박스 안에
% 값을 볼 수 있게 해주었다.

두번째로 option 태그안에 value 값을 지정할 수 있었고,
onClick 이벤트로 option을 클릭하면 해당 값으로 range 값이 변하도록
했다.

스타일을 어느정도 바꾸고 싶었는데, option의 눈금 모양을 바꾸는 방법을
찾다가 시간이 많이 흘렀다.. 우선 방법은 datalist 태그안에
display: flex와 justfyContent: space-between 값을 주니
스타일을 바꿀 수 있었고, range의 스타일은 보류 하기로 했다.

남은 두가지 과제도 어려워 보여서 마무리 하면 할 계획이다.

### Input

네번째 email값 판단과 password 보여주기 및 안보여주기 기능이다.
우선 input 값을 event.target.value로 받아와 useState를 사용해서
state에 저장을 했다.

그리고 includes를 사용해서 @와 . 이 포함 되어있을 떄와
split를 사용해서 @와 .을 기준으로 배열의 길이를 판단해서
email 값을 판단 했다.

두번쨰 password 값은 토글 버튼과 기능 구현은 똑같았다.
input 태그의 type을 text일 떄와 password 일때를
useState를 사용해서 eyeOn, eyeOff를 onClick 이벤트를 클릭 할 때마다
true,false 값이 변하고 true일때 type이 text, eyeOn img이고
false일때 type: password, img: eyeOff로 변경해서
기능 구현을 했다.

이메일 값을 판단하는 것이 조금 어려웠다.
정규식으로 판단하는 방법도 있어서 다음에는 정규식으로 사용해보려고 한다.

### Dropdown

마지막으로 드롭다운 메뉴는 우선 기본 배열을 만들고
filter과 includes를 사용해서 현재 배열과 내가 input 값에 입력한 값이
같은 게 있는지 판단을 했고, map을 사용해서 배열 반환해서 화면에 보여주었다.
과제를 보면 대소문자 구분없이 사용할 수 있엇고, toLowerCase()를 사용해서
소문자로 입력을 해도 값이 같으면 필터링 할 수 있었다.

그리고 각 배열 값에 onClick 이벤트를 달아서 useState를 사용해서
state의 값을 저장하는 동시에 Dropdown 메뉴가 안보이게 끔 만들어 주었다.

평소에 map은 어느정도 사용을 했었지만 filter와 includes는 Dropdown을 만들면서
좀 더 감을 익힌것 같다.
