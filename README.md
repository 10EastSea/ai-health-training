AI Health Trainer
============
https://10eastsea.github.io/ai-health-training/
<img src="/readme/2-0.PNG" title="메인 화면" alt="MainScreen"></img>

1 서비스 소개
----------
운동을 하고 싶지만 집밖으로 나가기 싫은 당신! \
COVID-19 으로 인해 헬스장을 마음대로 가지 못하는 당신! \
운동을 제대로 피팅받고 싶지만 그러기엔 귀찮은 당신! \
그런 당신을 위해, AI Health Trainer는 당신의 운동을 도와드립니다.👍 

2 사용법
------
### 2.1 드래그 & 드롭으로 루틴 정하기
오늘 하고자 하는 운동 루틴을 정해 각 운동을 드래그 & 드롭 하여 Today's Workout 에 옮깁니다. \
운동 루틴이 확정되면, LET'S GO!! 버튼을 눌러 운동을 시작합니다. \
<img src="/readme/2-1.PNG" title="드래그 & 드롭" alt="사용법1"></img>

### 2.2 운동 시작
운동 시작 화면에 팝업 dialog가 뜨면, 해당 운동의 목표 횟수를 입력합니다. \
그리고 Camera On 버튼을 눌러 웹캠을 키고, 카메라를 조정합니다.\
카메라 조정이 완료되면, Start 버튼을 눌러 운동을 시작합니다. \
<img src="/readme/2-2.PNG" title="횟수 입력" alt="사용법2"></img>
<img src="/readme/2-3.PNG" title="운동 시작" alt="사용법3"></img>

### 2.3 운동 진행
현재 운동을 완료하면 자동으로 다음 운동으로 이동합니다. \
<img src="/readme/2-4.PNG" title="운동 진행" alt="사용법3"></img>

### 2.3 운동 종료
모든 운동을 완료하면, 종료 메시지와 함께 메인 홈화면으로 돌아갑니다.
<img src="/readme/2-5.PNG" title="결과" alt="사용법3"></img>

3 사이트 설명
------------

- 모든 운동들은 그에 맞는 인공지능 모델이 운동자세를 분석해줍니다. 
- 모든 인공지능 모델은 준비(Ready)자세와 운동 자세의 가장 기본적인 구조로 이뤄져있으며, 수 백장의 운동 자세 사진 데이터 셋을 학습시킨 모델입니다. (Teachable Machine 이용)
- 드래그 & 드롭 기능 및 홈페이지는 모두 React를 이용하여 구현했습니다.
