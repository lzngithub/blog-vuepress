module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/fontend/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '前端文章', items: [
        {text: 'HTML/CSS', link: '/pages/f64cb8/'}, // 注意link结尾有斜杠和没有斜杠的区别
        {text: 'JavaScript', link: '/pages/d6bb9a/'}, // 注意link结尾有斜杠和没有斜杠的区别
        {text: 'React', link: '/pages/519566/'},
      ]},
    ]
  },
  {
    text: '后端', 
    link: '/backend/',
    items: [
      {text: 'linux', link: '/pages/8309a5b876fc95e3/'},
      {text: 'mogodb', link: '/pages/0a83b083bdf257cb/'},
      {text: 'node', link: '/pages/9f15c1a281d8bede/'},
    ]
  },
  {
    text: '其他',
    link: '/other/',
    items: [
      {text: 'git', link: '/pages/e4c1aa/'},
      {text: '面试', link: '/pages/dd6873/'},
    ]
  },
  {
    text: '读书派', 
    link: '/bookssent/',
    items: [
      {text: '随心记', items: [
        {text: '✲ 小酒馆', link: '/Bistro/'}
      ]}, //link: '/pages/wordsof/'}
      {text: '读书笔记', items: [
        {text: '《小王子》', link: '/note/prince/'},
      ]}
    ]
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  },
  {text: '关于', link: '/about/'},
]