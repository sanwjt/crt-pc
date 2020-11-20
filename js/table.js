/*
 * @Author: your name
 * @Date: 2020-11-08 11:42:36
 * @LastEditTime: 2020-11-08 22:30:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /crt-pc/js/table.js
 */
function zk(){
	var join_zp_c = document.querySelectorAll(".join_zp_c");
	var join_zp_n = document.querySelectorAll(".join_zp_n");
	var join_zp_length = join_zp_c.length;
	// var orange_boder =
	for(var i=0;i<join_zp_length;i++){
		join_zp_c[i].index = i;
		join_zp_c[i].onclick = function(){
			var isf = join_zp_n[this.index].className;
			if(isf == 'join_zp_n join_active'){
				join_zp_n[this.index].className = 'join_zp_n';
				$('.detail_btn').eq(this.index).html('详情');
				$('.detail_btn').eq(this.index).css({color:"#FF8721"});
				
				
			}else{
				for(var i=0;i<join_zp_length;i++){
					join_zp_n[i].className = 'join_zp_n';
					$('.detail_btn').eq(this.index).html('详情');
					$('.detail_btn').eq(this.index).css({color:"#FF8721"});
				

				}
				join_zp_n[this.index].className = 'join_zp_n join_active';
				$('.detail_btn').eq(this.index).html('收起');
				$('.detail_btn').eq(this.index).css({color:"#7EDCFF"});

			}
		}
	}
}
zk();