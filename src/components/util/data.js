const tableData = [
  {
    title: '搜索功能',
    desc: '输入查询条件，点击右侧“查询”按钮，封装查询参数',
    result: '看浏览器console打印结果'
  }, {
    title: '深拷贝',
    desc: '点击右侧“编辑”按钮，随便修改值，然后取消',
    result: '值没有被修改'
  },
  {
    title: '非深拷贝',
    desc: '点击右侧“编辑”按钮，随便修改值，然后取消',
    result: '值被修改了'
  }, {
    title: '凑数1',
    desc: '凑数1',
    result: '凑数1'
  }, {
    title: '凑数2',
    desc: '凑数2',
    result: '凑数2'
  }, {
    title: '凑数3',
    desc: '凑数3',
    result: '凑数3'
  }, {
    title: '凑数4',
    desc: '凑数4',
    result: '凑数4'
  }, {
    title: '凑数5',
    desc: '凑数5',
    result: '凑数5'
  }
];

async function getData(params) {
  const { page, pageSize } = params;
  const total = tableData.length;
  let list = [];
  if (pageSize > total) {
    list = tableData;
  } else {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    for (let i = start; i < (end > total ? total : end); i += 1) {
      list.push(tableData[i]);
    }
  }
  const res = {
    code: 200,
    total,
    data: list,
  };
  return res;
}

export { tableData, getData };
