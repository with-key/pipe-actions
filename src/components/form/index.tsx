import React, { useState } from "react";

import { Todo } from "@/hooks/useTodos";
import FieldProvider from "@/context/field";
import FormProvider from "@/context/form";
import * as Input from "@/context/Input";

type Props = {
  todo: Todo;
};

/**
 *
 * [Data might be undefined] - 서버에서 가져온 값을 form에 넣어줄 때,
 * 조건부로 hook을 호출할 수 없으며, 데이터가 첫 번째 렌더 사이클에 정의되지 않았기 때문에,
 * 동일한 컴포넌트에서는 이 작업을 수행할 수 없습니다. 그래서 반드시 form 컴포넌트를 분리해야한다.
 * 그리고 form 컴포넌트의 부모에서 todo를 prop으로 내려줄 때, (todo !== undefined) 이어야 한다.
 * https://tkdodo.eu/blog/react-query-and-forms
 * https://parang.gatsbyjs.io/react/2022-react-15/
 */

const Form = ({ todo }: Props) => {
  return (
    <FormProvider
      initialState={{
        id: todo.id.toString() ?? "",
        title: todo.title ?? "",
        userId: todo.userId.toString() ?? "",
        completed: todo.completed ? "Y" : "N",
      }}
    >
      <FieldProvider name="title">
        <Input.Title />
      </FieldProvider>

      <FieldProvider name="id">
        <Input.Id />
      </FieldProvider>

      <button>버튼</button>
    </FormProvider>
  );
};

export default Form;
