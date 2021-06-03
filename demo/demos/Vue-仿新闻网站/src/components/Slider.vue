<template>
    <div class="banner">
        <ul class="clearfix">
            <li>
                <img src="../assets/images/img_1.jpg" alt="" />
                <div class="text-box">
                    <h2>banner 1</h2>
                    <p>11 / 文</p>
                </div>
            </li>
            <li>
                <img src="../assets/images/img_2.jpg" alt="" />
                <div class="text-box">
                    <h2>banner 2</h2>
                    <p>22 / 文</p>
                </div>
            </li>
            <li>
                <img src="../assets/images/img_3.jpg" alt="" />
                <div class="text-box">
                    <h2>banner 3</h2>
                    <p>33 / 文</p>
                </div>
            </li>
            <li>
                <img src="../assets/images/img_1.jpg" alt="" />
                <div class="text-box">
                    <h2>banner 4</h2>
                    <p>44 / 文</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>


<script>
    export default {
        mounted(){
            this.fnSlider();
        },methods:{
           fnSlider(){
				$(function (){
					var mySwipe=new Swipe($('.banner')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			}
        }
    }
</script>