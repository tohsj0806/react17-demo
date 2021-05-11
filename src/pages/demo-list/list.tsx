import React, { useState } from "react";
import { useList, useMounted } from "../../utils";

export const DemoList = () => {
  interface Person {
    name: string;
    age: number;
  }
  const persons: Person[] = [{ name: "tim", age: 4 }];
  const { list, clear, add, removeIndex } = useList<Person>(persons);

  const addItem = () => {
    add({ name: "alan", age: 5 });
  };

  const removeItem = () => {
    removeIndex(0);
  };

  useMounted(() => {});

  return (
    <div>
      <div>
        <button onClick={addItem}>add</button>
        <button onClick={removeItem}>remove</button>
        <button onClick={clear}>clear</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>年纪</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
