const express = require('express')
let spawn = require('child_process').spawn
const cors=require('cors')

const app = express()
const port = 8081

app.use(cors())//解决跨域

const rumCommand = (cmd, args, callback) => {
    const child = spawn(cmd, args)
    let response = ''
    child.stdout.on('data', buffer => response += buffer.toString())
    child.stdout.on('end', () => callback(response))
}

//定义接口路由
app.post('/pushCode',function(req,res){
    // 执行自动部署脚本
    // rumCommand('sh', ['./auto_build.sh'], txt => {
    //     console.log(txt)
    // })
    res.send('接收code push成功提示!')
})
const server=app.listen(port,function () {
    console.log('服务启动成功')
})
