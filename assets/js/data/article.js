/*
 * @Author: your name
 * @Date: 2020-12-23 22:27:11
 * @LastEditTime: 2020-12-27 14:07:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Traboc:\Users\Administrator\Desktop\官网\lab_fe\demo\assets\js\data\article.js
 */
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
let article_id = getUrlParam('article_id')
$.ajax({
    url: baseUrl + 'articleDetail',
    contentType: 'application/json',
    data: {article_id: article_id},
    async: false,
    success(res) {
        let articleDetail = res.data.article_content
        let title = res.data.title
        $('#article-detail').append(articleDetail)
        $('#title').text(title)
    }
})