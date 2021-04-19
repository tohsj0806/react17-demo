## prettier

## json-server
- 1 cnpm i json-server -g
- 2 创建数据
echo >db.json  
- 3 启动json服务
`json-server --watch db.json`
or
I am using MacOS 11.2.3 and was stuck, try using this command
`npx json-server --watch db.json `solved the problem.
