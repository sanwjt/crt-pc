/*
 * @Author: your name
 * @Date: 2020-10-18 22:36:15
 * @LastEditTime: 2020-10-18 23:00:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /crt-pc/js/bottomnav.js
 */

$(function(){
    var windowHeight = $(window).height();
    var mainHeight=$('.main_box').height()+131+50;
    var searchHeight = $('.search-banner').height() || 0;
  
    if(mainHeight+searchHeight<windowHeight){
        $('.footer_box').addClass('fixedbottom')
    }
})