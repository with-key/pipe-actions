#  github actions

- name: workflow 이름, 액션창에서 명시되기때문에 생략하지 않은 것이 좋음
- on: 어떤 이벤트로 액션을 실행시킬 것인가를 결정하는 것 (e.g. `push`, `pull-request`..)
- jobs: 실행시킬 것(job)들의 집합. 여러개의 job을 실행시킬 수 있고, 하위에 job 이름을 명시한다. job들은 병렬적(동시에) 실행된다.
- runs-on: 어던 환경에서 실행시킬 것인가를 결정 (e.g. `ubuntu-latest`..)
- steps