const express = require('express'); //npm下载并引入express模块 npm -express -D

const app = express();
const port = 80;
app.use(express.static('./docs/.vuepress/dist')) // ./dist 为vue打包后dist文件夹的路径
app.listen(port,function(err){  //80 想要监听项目的端口号
	if(err){
		console.log(err)
	}else {
		console.log('前端项目启动成功，端口为：', port )
	}
})
