const tableData = [
  {
    title: '非深拷贝',
    desc: '点击右侧“编辑”按钮，随便修改值，然后取消',
    result: '值被修改了'
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
    title: '深拷贝',
    desc: '点击右侧“编辑”按钮，随便修改值，然后取消',
    result: '值没有被修改'
  }
];

async function getData(params) {
  console.log('params', params);
  const res = {
    code: 0,
    total: 4,
    data: tableData,
  };
  return res;
}

export { tableData, getData };
