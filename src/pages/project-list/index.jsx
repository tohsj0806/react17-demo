import { SearchBox } from "./search-box";
import { TableList } from "./table-list";
import React, { useState, useEffect } from "react";
import * as qs from 'qs'
import { paramObj } from "../../utils";



const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(paramObj(param))}`).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [param]);

  return (
    <div>
      <SearchBox param={param} setParam={setParam}></SearchBox>
      <TableList list={list}></TableList>
    </div>
  );
};
