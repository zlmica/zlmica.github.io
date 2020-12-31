/*
 * @Author: your name
 * @Date: 2020-12-23 22:24:28
 * @LastEditTime: 2020-12-27 17:28:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Traboc:\Users\Administrator\Desktop\官网\lab_fe\demo\assets\js\data\index.js
 */
let baseUrl = 'http://39.104.60.212:8088/index.php/api/article/'
// 获取顶部导航栏
$.ajax({
    url: baseUrl + 'categoryListTree',
    contentType: 'application/json',
    async: false,
    success(res) {
        let menuList = res.data
        menuList.forEach((menu, menuIndex) => {
            let href = menu.name == '首页' ? '/index.html' : `/category-list.html?menu_id=${menu.id}&title=${menu.name}`
            let str =
                `
                <li class="menu-item">
                    <a class="menu-item-link" href="${href}">${menu.name}</a>
            `
            if (menu.categoryList.length > 0) {
                str += `<ul class="submenu">`
                menu.categoryList.forEach((category, categoryIndex) => {
                    str +=
                        `
                        <li class="menu-item">
                            <a class="menu-item-link" href="/category-list.html?menu_id=${menu.id}&category_id=${category.id}">${category.name}</a>
                        </li>
                    `
                })
                str += `</ul>`
            }
            str += `</li>`
            $('#menu-list').append(str)
        });
    }
})