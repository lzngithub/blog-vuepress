module.exports = [
  // { text: "首页", link: "/" },
  {
    text: "底层基础",
    link: "/base/", //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: "前端基础",
        items: [
          { text: "JavaScript", link: "/pages/d6bb9a/" }, // 注意link结尾有斜杠和没有斜杠的区别
          { text: "HTML/CSS", link: "/pages/f64cb8/" }, // 注意link结尾有斜杠和没有斜杠的区别
          { text: "TypeScript", link: "/pages/696c4d/" }, // 注意link结尾有斜杠和没有斜杠的区别
          { text: "Nodejs", link: "/pages/9f15c1/" }, // 注意link结尾有斜杠和没有斜杠的区别
        ],
      },
      {
        text: "扩展基础",
        items: [
          { text: "数据结构", link: "/pages/d6e0b4/" }, // 注意link结尾有斜杠和没有斜杠的区别
          { text: "算法", link: "/pages/61e5bc/" }, // 注意link结尾有斜杠和没有斜杠的区别
          { text: "Linux", link: "/pages/8309a5b876fc95e3/" }, // 注意link结尾有斜杠和没有斜杠的区别
        ],
      },
    ],
  },
  {
    text: "工程工具",
    link: "/engineering/",
    items: [
      { text: "模块化", link: "/pages/5f5b7da/" },
      { text: "React", link: "/pages/519566/" },
      { text: "Vue", link: "/pages/1bdbd4/" },
      { text: "webpack", link: "/pages/a0f382/" },
      { text: "Git", link: "/pages/e4c1aa/" },
    ],
  },
  {
    text: "能力落地",
    link: "/other/",
    items: [{ text: "业务场景", link: "/pages/e4c1aaa/" }],
  },
  {
    text: "读书派",
    link: "/bookssent/",
    items: [
      { text: "随心记", items: [{ text: "✲ 小酒馆", link: "/Bistro/" }] }, //link: '/pages/wordsof/'}
      {
        text: "读书笔记",
        items: [{ text: "《小王子》", link: "/note/prince/" }],
      },
    ],
  },
  {
    text: "收藏",
    link: "/pages/beb6c0bd8a66cea6/",
    items: [
      { text: "网站", link: "/pages/beb6c0bd8a66cea6/" },
      { text: "资源", link: "/pages/eee83a9211a70f9d/" },
      { text: "Vue资源", link: "/pages/12df8ace52d493f6/" },
    ],
  },
  {
    text: "索引",
    link: "/archives/",
    items: [
      { text: "分类", link: "/categories/" },
      { text: "标签", link: "/tags/" },
      { text: "归档", link: "/archives/" },
    ],
  },
  { text: "关于", link: "/about/" },
];
