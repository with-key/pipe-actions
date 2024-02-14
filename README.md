#  github actions

- name: workflow 이름, 액션창에서 명시되기때문에 생략하지 않은 것이 좋음
- on: 어떤 이벤트로 액션을 실행시킬 것인가를 결정하는 것 (e.g. `push`, `pull_request`..)
- jobs: 실행시킬 것(job)들의 집합. 여러개의 job을 실행시킬 수 있고, 하위에 job 이름을 명시한다. job들은 병렬적(동시에) 실행된다.
- runs-on: 어던 환경에서 실행시킬 것인가를 결정 (e.g. `ubuntu-latest`..)
- steps

# event
## pull_request
- pr은 처음에 만들어질때, 그리고 새로운 커밋(푸시)이 있을 때 트리거되어 실행된다.
- pr이 오픈될때만 실행시키고 싶으면 세밀하게 설정이 필요하다. (`pull_request: types: [opened]`), 이걸 액티비티 타입이라고 한다. 모든 on:에 액티비티 타입이 있는건 아니다.
  
## issue

## push

## schedule

## workflow-dispatch
- 수동으로 트리거할 수 있는 이벤트
- 인풋 값을 넣을 수 있다. (string, number, boolean, choice)


# keyword
## if
