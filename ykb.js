/******************************

 脚本功能：醫學VIP
 脚本作者：Kynix Chen
 更新时间：2024-05-30

 *******************************

 [rewrite_local]
 ^https?:\/\/api\.yikaobang\.com\.cn\/index\.php\/user\/main\/vip.*$ url script-response-body https://raw.githubusercontent.com/KynixInHK/prime-pro-mitm/master/ykb.js
 ^https?:\/\/api\.yikaobang\.com\.cn\/index\.php\/User\/Main\/getUserInfo url script-response-body https://raw.githubusercontent.com/KynixInHK/prime-pro-mitm/master/ykb.js
 [mitm]
 hostname = api.yikaobang.com.cn

 *******************************/

// console.log("Hello, world.")
var url = $request.url
console.log(url)
var body = $response.body
var obj = JSON.parse(body)
if (url.includes("/vip")) {
    obj.data.is_vip = "1"
    obj.data.vip_deadline = "2099-12-31 到期"
    obj.data.vip.is_vip = 1
    obj.data.vip.simple_declaration = "2099-12-31 到期"
    obj.data.vip.vip_deadline = "2099-12-31 到期"
} else if (url.includes("/getUserInfo")){
    obj.data.is_vip = "1"
    obj.data.vip_deadline = "2099-12-31 到期"
}
console.log(obj)
body = JSON.stringify(obj)
$done({body})