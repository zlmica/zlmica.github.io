/*
 * @Author: your name
 * @Date: 2020-12-23 22:28:16
 * @LastEditTime: 2020-12-28 21:18:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Traboc:\Users\Administrator\Desktop\官网\lab_fe\demo\assets\js\data\category-list.js
 */
var baseUrl = "http://39.104.60.212:8088/index.php/api/article/";

//获取url中的参数
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return decodeURIComponent(r[2]);
  return null; //返回参数值
}
// 获取分类列表
// $.ajax({
//     url: baseUrl + 'categoryList',
//     contentType: 'application/json',
//     data: {
//         pid: getUrlParam('menu_id')
//     },
//     async: false,
//     success(res) {
//         let categoryList = res.data
//         categoryList.forEach((category, categoryIndex) => {
//             $('#category-list').append(
//                 `
//                     <li class='category-menu${category.id}' data-filter=".category${category.id}">${category.name}</li>
//                 `
//             )
//         });
//     }
// })

// 获取文章列表
$.ajax({
  url: baseUrl + "allCategoryInfo",
  contentType: "application/json",
  data: {
    category_id: getUrlParam("category_id"),
  },
  async: false,
  success(res) {
    let { categoryInfo, articleList, childrenList } = res.data;
    $(".page-header-title").text(categoryInfo.name);
    let type = getUrlParam("type");
    switch (type) {
      case "1":
        $("#list1").show();
        childrenList &&
          childrenList.forEach((category, categoryIndex) => {
            $("#category-list1").append(
              `
                            <li class='category-menu category-menu${category.id}' data-filter=".category${category.id}">${category.name}</li>
                        `
            );
          });
        articleList.forEach((article, articleIndex) => {
          $("#article-list1").append(
            `
            
                            <div class="col-lg-4 col-md-6 category${article.category_id}">
                            <div class="brance-item" style="padding: 0; ">
                                <div style="margin-bottom: 10px;">
                                    <a href="./article.html?article_id=${article.article_id}"><img
                                            style="width: 100%;"
                                            src="http://39.104.60.212:8088/${article.cover_image}" alt="gallery" />
                                    </a>
                                </div>
                                <div class="desc">
                                    <h6 class="text-overflow">
                                    ${article.title}
                                    </h6>
                                    <h6>
                                        <small class="text-overflow2">${article.intro}</small>
                                    </h6>
                                </div>
                                </div>
                            </div>
                        `
          );
        });
        break;
      case "2":
        $("#list2").show();
        childrenList &&
          childrenList.forEach((category, categoryIndex) => {
            $("#category-list2").append(
              `
                            <li class='category-menu category-menu${category.id}' data-filter=".category${category.id}" onclick="">${category.name}</li>
                        `
            );
          });
        articleList.forEach((article, articleIndex) => {
          $("#article-list2").append(
            `
                        <div class="article-item col-lg-6 col-md-8 col-sm-11 category${article.category_id}">
                            <div class="tour-item">
                                <div class="overlay-thumb">
                                <a href="./article.html?article_id=${article.article_id}"
                                    ><img src="http://39.104.60.212:8088/${article.cover_image}" alt="tour"
                                /></a>
                                </div>
                                <div class="tour-package-content">
                                    <div class="post-header-one">
                                        <h4 class="title style-two">
                                            <a href="#" class="text-overflow">${article.title}</a>
                                        </h4>
                                        <p class="text-overflow2">
                                        ${article.intro}
                                        </p>
                                        <div class="d-flex flex-wrap justify-content-between align-items-center">
                                            <!-- <h4 class="price">$450</h4> -->

                                        </div>
                                    </div>
                                    <!--
                                    <ul class="meta-post-one">
                                        <li>
                                            <a href="#"><i class="far fa-eye"></i> <span>24578</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#"><i class="far fa-thumbs-up"></i> <span>564643</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fas fa-circle-alt"></i> <span>分享</span>
                                            </a>
                                        </li>
                                    </ul>
                                    -->
                                </div>
                            </div>
                        </div>
                        `
          );
        });
        break;

      case "3":
        $("#list3").show();
        childrenList &&
          childrenList.forEach((category, categoryIndex) => {
            $("#category-list3").append(
              `
                            <li class='category-menu category-menu${category.id}' data-filter=".category${category.id}">${category.name}</li>
                        `
            );
          });
        articleList.forEach((article, articleIndex) => {
          $("#article-list3").append(
            `
                        <div class="article-item col-lg-4 col-md-6">
                            <div class="tour-item">
                                <div class="overlay-thumb">
                                <a href="./article.html?article_id=${article.article_id}"
                                    ><img src="http://39.104.60.212:8088/${article.cover_image}" alt="tour"
                                /></a>
                                </div>
                                <div class="tour-package-content">
                                    <div class="post-header-one">
                                        <h4 class="title style-two">
                                            <a href="#" class="text-overflow">${article.title}</a>
                                        </h4>
                                        <p class="text-overflow2">
                                        ${article.intro}
                                        </p>
                                        <p>2020-07-08</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
          );
        });

        break;

      default:
        break;
    }
  },
});

$(".category-menu").on("click", function (e) {
  $(".article-item").hide();
  $($(this).data("filter")).show();
});
