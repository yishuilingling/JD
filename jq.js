// 城市出现与消失
$('#head1 .hleft').hover(function  () {
	$('.hleft ul').show();
	$('.hleft .baib').show();
	$('.hleft .shd').css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('.hleft li a').click(function  () {
		$('.hleft li a').removeClass('select');			
		$(this).addClass('select');
		$('.baib').width($('.shd').width()+19);
		$('.hleft .shd span').html($(this).html());

		$('.hleft ul').hide();
		$('.hleft .baib').hide();
		$('.hleft .shd').css({'background':'#F1F1F1',
			'borderLeft':'none','borderRight':'none'});
	})
},function  () {
	$('.hleft ul').hide();
	$('.hleft .baib').hide();
	$('.hleft .shd').css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
});

// 我的京东
$('#head1 .hright .my').hover(function  () {
	$(this).children().eq(2).show();
	$(this).children().eq(3).show();
	$(this).children().eq(3).width($(this).width()+14);
	$(this).children().eq(3).css('left','0');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .my').width($('#head1 .hright .my').width()-2);
},function  () {
	$(this).children().eq(2).hide();
	$(this).children().eq(3).hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .my').width($('#head1 .hright .my').width()+2);
});

// 手机京东
$('#head1 .hright .shjjd').hover(function  () {
	$(this).children().eq(2).show();
	$('#head1 .hright .shjjd img').show();
	$(this).children().eq(2).width($(this).width()+15);
	$(this).children().eq(2).css('left','0px');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .shjjd').width($('#head1 .hright .shjjd').width()-2);
},function  () {
	$(this).children().eq(2).hide();
	$('#head1 .hright .shjjd img').hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .shjjd').width($('#head1 .hright .shjjd').width()+2);
});

//关注京东
 $('#head1 .hright .gzhjd').hover(function  () {
	$(this).children().eq(2).show();
	$('#head1 .hright .gzhjd img').show();
	$(this).children().eq(2).width($(this).width()+15);
	$(this).children().eq(2).css('left','0px');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .gzhjd').width($('#head1 .hright .gzhjd').width()-2);
},function  () {
	$(this).children().eq(2).hide();
	$('#head1 .hright .gzhjd img').hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .gzhjd').width($('#head1 .hright .gzhjd').width()+2);
});

 // 客户服务
 $('#head1 .hright .khfw').hover(function  () {
	$(this).children().eq(2).show();
	$(this).children().eq(3).show();
	$(this).children().eq(3).width($(this).width()+14);
	$(this).children().eq(3).css('left','0px');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .khfw').width($('#head1 .hright .khfw').width()-2);
},function  () {
	$(this).children().eq(2).hide();
	$(this).children().eq(3).hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .khfw').width($('#head1 .hright .khfw').width()+2);
});

 // 网站导航
  $('#head1 .hright .wzhdh').hover(function  () {
	$(this).children().eq(1).show();
	$(this).children().eq(2).show();
	$(this).children().eq(2).width($(this).width()+15);
	$(this).children().eq(2).css('left','0px');
	$(this).css({'background':'#fff',
		'borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc'});
	$('#head1 .hright .wzhdh').width($('#head1 .hright .wzhdh').width()-2);
},function  () {
	$(this).children().eq(1).hide();
	$(this).children().eq(2).hide();
	$(this).css({'background':'#F1F1F1',
		'borderLeft':'none','borderRight':'none'});
	$('#head1 .hright .wzhdh').width($('#head1 .hright .wzhdh').width()+2);
});

// 广告删除
$('.ad .close').click(function  () {
	$('.ad').remove();
})

// 购物车
$('#logo .right').hover(function  () {
	$(this).css({'backgroundColor':'#fff','boxShadow':'0 0 5px rgba(0,0,0,0.2)'})
	$(this).children().eq(2).show();
	$(this).children().eq(3).show();
},function  () {
	$(this).css({'backgroundColor':'#F9F9F9','boxShadow':'none'})
	$(this).children().eq(2).hide();
	$(this).children().eq(3).hide();
})

// 商品分类
$('.content .cen1 .classify li').hover(function  () {
	var i=$('.content .cen1 .classify li').index(this);
	$(this).css('backgroundColor','#f7f7f7');
	$(this).children(0).children().css('color','#C81623');
	var len=$(this).children().length;
	$(this).children('span').html('');
	$('.content .cen1 .detail .fl').eq(i).show();
},function  () {
	var i=$('.content .cen1 .classify li').index(this);
	$(this).css('backgroundColor','#C81623');
	$(this).children(0).children().css('color','#fff');
	$(this).children('span').html('>');
	$('.content .cen1 .detail .fl').eq(i).hide();
})

$('.content .cen1 .detail .fl').hover(function  () {
	$(this).show();
},function  (argument) {
	$(this).hide();
})

// 透明度切换
var time1=null;
var a=0;
var x=0;
function moveLeft () {
	clearInterval(time1);
	time1=setInterval(function  () {	
		a++;
		if(a>=$('.content .inner img').length){
			a=0;
		}
		move();		
	},1500)
}

function move () {
	$('.content .inner img').eq(a).fadeIn(function  () {
		x=0;
	}).siblings().fadeOut();
	$('.content .cenc li').eq(a).addClass('select').siblings().removeClass();
}

moveLeft();

$('.content .cenc').hover(function  () {
	$(' .cenc .left').show();
	$(' .cenc .right').show();
	clearInterval(time1);
},function  () {
	$(' .cenc .left').hide();
	$(' .cenc .right').hide();
	moveLeft();
})

$('.cenc .right').click(function  () {
	if(x==0){
		x=1;
		a++;
		if(a>=$('.content .inner img').length){
			a=0;
		}
	}
	
	move();
})

$('.cenc .left').click(function  () {
	if(x==0){
		x=1;
		a--;
		if(a<0){
			a=$('.content .inner img').length-1;
		}
	}
	
	move();
})

$('.content .cenc li').stop().hover(function  () {
	if(x==0){
		x=1;
		a=$(this).index();
		move();
	}
})