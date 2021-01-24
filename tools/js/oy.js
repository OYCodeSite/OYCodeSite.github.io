// 设置页脚博主会动的心
// 2020 - 2021 By OY
$(document).ready(function(e){
    $('.copyright').html('©2020 - 2021 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat no-destroy"></i> OY');
})
// 去掉banner 图
var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
  full_page[0].style.background = "transparent";
}



/* 手机客户端导航栏默认隐藏 */
var mobile_sidebar_menus = document.getElementById("sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " closed";
}
// 分类卡片折叠
var card_category_list = document.getElementsByClassName(
    "card-category-list child"
);
var item = document.getElementsByClassName("card-category-list-item");
function toggle(t) {
    var display = t.parentElement.nextSibling.style.display;
    if (display == "none") {
        t.parentElement.nextSibling.style.display = "block";
        t.parentElement.nextSibling.style.height = "100%";
        t.className = t.className.replace("fa-chevron-up", "fa-chevron-down");
    } else {
        t.parentElement.nextSibling.style.display = "none";
        t.className = t.className.replace("fa-chevron-down", "fa-chevron-up");
    }
}

for (var i = 0; i < card_category_list.length; i++) {
    card_category_list[i].style.display = "none";
    card_category_list[i].style.transition = "all 1s";
    card_category_list[i].previousSibling.innerHTML +=
        '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" onclick="toggle(this)"></i>';
}






