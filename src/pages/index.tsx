import Form from "@/components/form";
import { Todo, useTodos } from "@/hooks/useTodos";
import React, { useCallback, useState } from "react";

const Home = () => {
  const [id, setId] = useState(1);
  const [todos] = useTodos();

  if (!todos) return null;

  const selectTodo = (id: number) => {
    const [todo] = todos.filter((el) => el.id === id);
    return todo;
  };

  /**
   * form의 key! - 불필요한 state 미러링 방지 [props 변경에 따라 상태가 리셋되어야 하는 경우]
   * form 내부에서서는 prop으로 내린 todo를 받아 state에서 미러링 하고 있다.
   * 다만, state의 초기값은 최초 렌더링 사이클에만 정의되기 때문에 todo가 undefined 이후에
   * 값이 생성 (서버에서 값을 가져옴) 되더라도 undefined로 남아있다.
   * 그것을 useEffect 통해서 상태를 갱신할 수 있지만 그 방식은 좋지 않다. (안티패턴)
   * 렌더링 사이클을 한번 더 돌려주면 되는데, 그때 컴포넌트의 key가 그 트리거가 된다. id가 변경되면
   * form이 다시 렌더링 되고, 그 때 prop으로 내려준 todo가 변경되기 때문에 state가 갱신된다.
   *
   * https://velog.io/@jay/do-not-put-everything-in-usestate
   */
  return (
    <>
      <div>
        {todos?.map((el) => (
          <div key={el.id} onClick={() => setId(el.id)}>
            {el.title}
          </div>
        ))}
      </div>
      <Form todo={selectTodo(id)} key={id}></Form>
    </>
  );
};

export default Home;
