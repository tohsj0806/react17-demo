export const TableList = ({ list }: listProp) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item: dataItem) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.personName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface listProp {
  list: dataItem[];
}

interface dataItem {
  id: string;
  name: string;
  personName: string;
}
