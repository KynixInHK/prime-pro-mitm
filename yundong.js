/******************************

 脚本功能：運動VIP
 脚本作者：Kynix Chen
 更新时间：2024-05-30

 *******************************

 [rewrite_local]

 ^https:\/\/api\.gotokeep\.com\/kprime\/v1\/auth url script-response-body https://raw.githubusercontent.com/KynixInHK/prime-pro-mitm/main/ycdz/keep.js

 [mitm]

 hostname = api.gotokeep.com

 *******************************/

var body = $response.body
var obj = JSON.parse(body)
obj.data.status = 1
body = JSON.stringify(obj)
$done(body)