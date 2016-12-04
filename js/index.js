$(function() {
	var sign = 0;
	//列表和切歌
	var musics = [{
		name: "那英 - 离开我 (Live) ",
		author: "那英",
		src: "./music/那英 - 离开我 (Live) [mqms2].mp3",
		duration: "04:11",
		content:"[00:00.14]那英 - 离开我(Live)[00:00.89]词：袁惟仁[00:01.09]曲：袁惟仁[00:01.24]编曲：达日丹[00:18.74]我把你的电话[00:21.61]从手机里消除了[00:26.44]我把你的消息[00:29.36]从话题里减少了[00:34.24]我把你的味道[00:37.12]用香水喷掉了[00:42.02]我把你的相片[00:44.43]用全家福挡住了[00:55.56]你让我的懂事[00:58.47]变成一种幼稚[01:03.18]你让我的骄傲[01:06.15]觉得很无知[01:10.99]你让我的朋友[01:13.86]关心我的生活[01:18.64]你让我的软弱[01:21.71]陪伴你的自由[01:27.04]离开我 你会不会好一点[01:34.80]离开你 什么事都难一点[01:42.50]车来了 坐上你的明天[01:50.16]车走了 我还站在路边[01:55.98]离开我 你会不会好一点[02:03.85]离开你 什么事都难一点[02:11.55]风来了 云就会少一点[02:19.25]你走了 我住在雨里面[02:54.08]离开我 你会不会好一点[03:01.89]离开你 什么事都难一点[03:09.55]车来了 坐上你的明天[03:17.27]车走了 我还站在路边[03:23.02]离开我 你会不会好一点[03:30.83]离开你 什么事都难一点[03:38.64]风来了 云就会少一点[03:46.34]你走了 我住在雨里面[03:54.17]你走了 我住在雨里面"

	}, {
		name: " 想遇见一个人",
		author: "曾咏熙",
		src: "./music/曾咏熙 - 想遇见一个人 [mqms2](1).mp3",
		duration: "3:46",
		content:"[00:00.76]曾咏熙[00:05.84]想遇见一个人[00:21.84]又一个情人节 独自沉默[00:28.54]我不要 像同情的联络[00:36.99]自由得很寂寞[00:40.74]逞强得很脆弱[00:46.14]想遇见 一个真心的人[00:50.05]想听见 一句爱能当真[00:54.10]想忘了 最亲的也最残忍[00:57.88]难愈合 的裂痕[01:01.68]想遇见 一个浪漫的人[01:05.58]想看见 感动不停发生[01:09.43]想知道 我不再是座空城[01:13.48]能让我 被呵护 被放任[01:33.33]心 有时候觉得 像静止的[01:40.13]怎么做 就是无法快乐[01:48.54]谁对谁很温柔[01:52.29]我莫名会泪流[01:55.84]想遇见 一个真心的人[01:59.70]想听见 一句爱能当真[02:03.65]想忘了 最亲的也最残忍[02:07.46]难愈合 的裂痕[02:11.36]想遇见 一个浪漫的人[02:15.21]想看见 感动不停发生[02:19.06]想知道 我不再是座空城[02:23.01]能让我 被呵护 被放任[02:54.02]想遇见 一个真心的人[02:57.82]想听见 一句爱能当真[03:01.62]想忘了 最亲的也最残忍[03:05.72]难愈合 的裂痕[03:09.52]想遇见 一个浪漫的人[03:13.32]想看见 感动不停发生[03:16.97]想知道 我不再是座空城[03:21.12]能让我 被呵护 被放任"
	}, {
		name: "偏偏喜欢你 ",
		author: "陈晓东 ",
		src: "./music/尖耳朵的阿凡达妹妹陈晓东 - 偏偏喜欢你 (Live) [mqms2].mp3",
		duration: "4:29",
		content:"[00:00.76]陈晓东、尖耳朵的阿凡达妹妹 - 偏偏喜欢你(Live)[00:06.06]作词：郑国江[00:07.17]作曲：陈百强[00:08.33]编曲：陈家荣[00:26.60]愁绪挥不去苦闷散不去[00:33.03]为何我心一片空虚[00:39.81]感情已失去一切都失去[00:46.48]满腔恨愁不可消除[00:56.58]为何你的嘴里[00:59.66]总是那一句[01:03.10]为何我的心不会死[01:09.45]明白到爱失去一切都不对[01:16.55]我又为何偏偏喜欢你[01:23.28]爱已是负累相爱似受罪[01:30.14]心底如今满苦泪[01:36.43]旧日情如醉此际怕再追[01:43.94]偏偏痴心想见你[01:49.98]为何我心分秒想着过去[01:56.45]为何你一点都不记起[02:02.70]情义已失去恩爱都失去[02:09.62]我却为何偏偏喜欢你[02:29.75]为何我心分秒想着过去[02:36.33]为何你一点都不记起[02:42.61]情义已失去恩爱都失去[02:49.52]我却为何偏偏喜欢你[02:56.62]爱已是负累[02:59.80]相爱似受罪[03:03.48]心底如今满苦泪[03:09.63]旧日情如醉[03:13.03]此际怕再追[03:17.28]偏偏痴心想见你[03:29.72]为何我心[03:32.14]分秒想着过去[03:36.34]为何你一点[03:39.12]都不记起[03:42.66]情义已失去恩爱都失去[03:49.72]我却为何偏偏喜欢你[03:56.17]情义已失去[03:59.77]恩爱都失去"
	}, {
		name: " 有多少爱可以重来 ",
		author: "李嘉格侧田 ",
		src: "./music/李嘉格侧田 - 有多少爱可以重来 (Live) [mqms2].mp3",
		duration: "4:40",
		content:"[00:00.76]李嘉格侧田[00:05.76]有多少爱可以重来 (Live)[00:24.69]常常责怪自己[00:26.93]当初不应该[00:33.28]常常后悔没有[00:35.82]把你留下来[00:40.26]为什么明明相爱[00:45.14]到最后还是要分开[00:49.30]是否我们总是[00:51.48]徘徊在心门之外[00:58.95]谁知道又和你[01:01.64]相遇在人海[01:07.64]命运如此安排[01:10.23]总教人无奈[01:14.96]这些年过得不好不坏[01:19.12]只是好像少了[01:20.85]一个人存在[01:23.59]而我渐渐明白[01:26.03]你仍然是我不变的关怀[01:31.97]有多少爱可以重来[01:36.24]有多少人愿意等待[01:40.50]当懂得珍惜以后归来[01:43.45]却不知那份爱[01:45.63]会不会还在[01:48.83]有多少爱可以重来[01:53.30]有多少人值得等待[01:57.57]当爱情已经桑田沧海[02:00.31]是否还有勇气去爱[02:41.91]谁知道又和你[02:44.25]相遇在人海[02:50.50]命运如此安排[02:53.09]总教人无奈[02:57.91]这些年过得不好不坏[03:02.03]只是好像少了[03:03.70]一个人存在[03:06.40]而我渐渐明白[03:08.53]你仍然是我不变的关怀[03:14.98]有多少爱可以重来[03:18.79]有多少人愿意等待[03:23.26]当懂得珍惜以后归来[03:26.26]却不知那份爱[03:28.24]会不会还在[03:31.64]有多少爱可以重来[03:36.21]有多少人值得等待[03:40.33]当爱情已经桑田沧海[03:43.27]是否还有勇气去爱[03:49.22]有多少爱可以重来[03:53.08]有多少人愿意等待[03:57.55]当懂得珍惜以后归来[04:00.39]却不知那份爱[04:02.93]会不会还在[04:06.13]有多少爱可以重来[04:10.40]有多少人值得等待[04:14.51]当爱情已经桑田沧海[04:17.61]是否还有勇气去爱[04:23.45]当爱情已经桑田沧海[04:26.19]是否还有勇气去爱"
	}]

	var ul = $("#ul");
	//渲染 创建列表
	function render() {
		ul.empty();
		$.each(musics, function(i, v) {
			var c = (i == sign) ? "active" : "";
			$('<li><span>' + musics[i].name + '</span><span></span><span>' + musics[i].author + '</span><span></span><div><i class="i">&#xe665;</i></div><div class="delete"><i>&#xe6cb;</i></div></li>').appendTo(ul)
		})
	}
	render();
	//标记喜欢
	$(".i").eq(0).html("&#xe640");
	ul.on("touchend", "li", function() {
			$("li").removeAttr("id");
			$(".i").html("&#xe665;");
			sign = $(this).index();
			$("li").eq(sign).attr("id", "active");
			$(".i").eq(sign).html("&#xe640");
			audio.src = musics[sign].src;
			audio.play();
		})
		//控制播放 暂停
	var play = $(".play");
	var audio = $("#audio").get(0);
	play.on("touchend", function() {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	})
	$(".plays").on("touchend", function() {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	})
	audio.onplay = function() {
		$(".bg").attr("id", "bgg");
		$(".plays").attr("id", "plays");

	}
	audio.onpause = function() {
			$(".bg").removeAttr("id");
			$(".plays").removeAttr("id");

		}
		//添加歌曲
	$(".tj-body").on("touchend", ".song", function() {
			var index = $(this).index();
			var d = $(this).attr("data-v");
		    if($(".song .biaoji").eq(index).css("background")=="rgb(49, 194, 124) none repeat scroll 0% 0% / auto padding-box border-box"){
		    	$(".song .biaoji").eq(index).css("background", "transparent");
		    }else{
		    	$(".song .biaoji").eq(index).css("background", "#31c27c");
				musics.push(JSON.parse(d));
				render();
		    }	
		})
		//全部添加
	$(".all").on("touchend", function() {
		if ($(".biaoji").css("background") == "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box") {
			$(".biaoji").css("background", "#31c27c");
		} else {
			$(".biaoji").css("background", "transparent");
		}
	})
	$(".addto").on("touchend", function() {
		$(".song").each(function(i) {
			var d = $(".song").eq(i).attr("data-v");
			musics.push(JSON.parse(d));
		})
		render();
	})
   //全部删除
   $(".laji").on("touchend",function(){
   	$(".song-list li").html("");
   })
   //点击进度条跳转
	var current = $(".current-time");
	var duration = $(".duration");
	var progress = $(".progress");
	var progress1 = $("#progress1");
	var pi = $("#pi");
	var pi1 = $("#pi1");
	var w=$(".pro-sign").width()/2;
	var kuan=$("#progress").width();
	var kuan1=$("#progress1").width();

    $(".pro-sign").on("touchstart",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-$(".pro-sign").position().left;
		var start=w-offsetX;
		$(document).on("touchmove",function(e){
			var left=e.originalEvent.changedTouches[0].clientX+start;
			if(left>=kuan||left<=0){
				return;
			}
			audio.currentTime=left/kuan*audio.duration;
		});
		return false;
	});
	$(".pro-sign").on("touchend",function(){
		$(document).off("touchmove");
	})
	$(".pro-sign").on("touchend",false);
	$('.jindu').on("touchend",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-
					progress.offset().left;
		audio.currentTime=offsetX/kuan*audio.duration;
	})

	$(".pro-circle").on("touchstart",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-$(".pro-circle").position().left;
		var start=w-offsetX;
		$(document).on("touchmove",function(e){
			var left=e.originalEvent.changedTouches[0].clientX+start;
			if(left>=kuan1||left<=0){
				return;
			}
			audio.currentTime=left/kuan1*audio.duration;
		});
		return false;
	});
	$(".pro-circle").on("touchend",function(){
		$(document).off("touchmove");
	})
	$(".pro-circle").on("touchend",false);
	$('#progress1').on("touchend",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-
					progress.offset().left;
		audio.currentTime=offsetX/kuan1*audio.duration;
	})


	function format(v) {
		v = Math.floor(v);
		var s = v % 60;
		s = (s < 10) ? ("0" + s) : s;
		var m = Math.floor(v / 60);
		return m + ":" + s;
	}
   
	$(audio).on("timeupdate", function() {
		current.html(format(audio.currentTime));
		var	left=kuan*audio.currentTime/audio.duration;
		var	left1=kuan1*audio.currentTime/audio.duration;
		$(".pro-sign").css("left",left-w);
		$(".pro-bg").css("width",left-w);
		$('#pro').css("width",left1-w);
		$(".pro-circle").css("left",left1-w);
		play2();

	})
		//调节音量
	var voice = $(".voice");
	var vi = $(".vi");
	vi.on("touchend", false);
	vi.on("touchstart", function(e) {
		var r = $(this).width() / 2;
		var offsetX = e.originalEvent.changedTouches[0].clientX - vi.offset().left;
		var start = r - offsetX;
		$(document).on("touchmove", function(e) {
			var m = e.originalEvent.changedTouches[0].clientX;
			var left = m - voice.position().left + start;
			if ((left / voice.width() > 0) && (left / voice.width() < 1)) {
				audio.volume = left / voice.width();
			}

		})
		return false;
	})
	$(document).on("touchend", function() {
		$(document).off("touchmove");
	})
	voice.on("touchend", function(e) {
		var offsetX = e.originalEvent.changedTouches[0].clientX - vi.offset().left;
		audio.volume = offsetX / $(this).width();
		//				mute.removeAttr("data-v");
	})
//事件驱动的模式设置音量按钮的位置
	audio.onvolumechange = function() {
		vi.css("left", voice.width() * audio.volume - vi.width() / 2)
	}

	//删歌
	ul.on("touchend", ".delete", function() {
		var li = $(this).closest("li");
		var index = li.index();
		musics.splice(index, 1);
		if (index == sign) {
			if (musics[sign]) {
				audio.src = musics[sign].src;
			} else {
				audio.src = "";
			}
		} else if (index > sign) {

		} else if (index < sign) {
			sign -= 1;
		}
		render();
		return false;
	})

	function next() {
		sign++;
		if (sign == musics.length) {
			sign = 0;
		}
		audio.src = musics[sign].src;
		render();
		audio.play();
	}

	function prev() {
		sign--;
		if (sign < 0) {
			sign = musics.length - 1;
		}

		audio.src = musics[sign].src;
		render();
		audio.play();
	}
	$(".pre").on("touchend", prev);
	$(".next").on("touchend", next);
	audio.onload = function() {
		audio.play();
	}
	audio.onended=function(){
		next();
	}
	audio.oncanplay = function() {
			duration.html(format(audio.duration));
			$(".nav-center").html(musics[sign].name);
			$(".zuozhe").html(musics[sign].author);
			$(".s-name").html(musics[sign].name);
			$(".geminzi").html(musics[sign].name);
			$("li").removeAttr("id");
			$("li").eq(sign).attr("id", "active");

		}
		//切换页面
	$(".s-name").on("touchend", function(e) {
			$(".geciye").removeAttr("id");
		    $(".geciye").attr("id", "gecidong");
	
	})
	$(".nav-left").on("touchend", function() {
		$(".geciye").removeAttr("id");
		$(".geciye").attr("id", "gecidong1");
	});
	//列表页
	$(".list").on("touchend", function() {
		$(".liebiaoye").removeAttr("id");
		$(".liebiaoye").show();
		$(".liebiao").removeAttr("id");
		$(".liebiao").attr("id", "liebiao")
	})
	$(".guanbi").on("touchend", function() {
			$(".liebiao").removeAttr("id");
			$(".liebiao").attr("id", "liebiao1");
			$(".liebiaoye").attr("id", "qu");
		})
		//标记喜欢
	$(".like i").on("touchend", function() {
			if ($(this).attr("id") == "hong") {
				$(this).removeAttr("id");
				$(this).html("&#xe665;");
			} else {
				$(this).attr("id", "hong");

				$(this).html("&#xe640;");
			}
		})
		//添加页
	$(".tianjia").on("touchend", function() {
		$(".tianjiaye").removeAttr("id");
		$(".tianjiaye").attr("id", "tj-lai");
	})
	$(".tiange").on("touchend", function() {
		$(".tianjiaye").removeAttr("id");
		$(".tianjiaye").attr("id", "tj-lai");
	})
	$(".close").on("touchend", function() {
		$(".tianjiaye").removeAttr("id");
		$(".tianjiaye").attr("id", "tj-qu");
	})
	//详情页
	$(".nav-right").on("touchend",function(){
		$(".yinliangye").show();
		$(".yly").removeAttr("id");
		$(".yly").attr("id","yinliang");
	})
	$(".quxiao").on("touchend",function(){
		$(".yinliangye").delay(500).queue(function(){
			$(this).hide().dequeue();
		})
		$(".yly").removeAttr("id");
		$(".yly").attr("id","yinliang1");
	})
				//歌词处理
		function lyric_ctrl()
		{
			var lyricObj=musics[sign].content;
			var temp=lyricObj.split("[");
			var html1="";
			for(var i=0;i<temp.length;i++)
			{   
				var arr=temp[i].split("]");
				var text=(arr[1]);
				var time=arr[0].split(",");
				var temp2=time[0].split(".");
				var ms=temp2[1];//毫秒
				var temp3=temp2[0].split(":");			
				var s=temp3[1];//秒
				var m=temp3[0];//分
				var s_sum=parseInt(m*60)+parseInt(s);
				if(text)
				{
					html1+="<p id='lyric"+s_sum+"'>"+text+"</p>";
				}	
			}
			
			$(".lyric2").html(html1)
		}
		
	
	function play2(obj){
		var lyrict1="lyric"+(Math.floor(audio.currentTime)+2);
		var p1=$(".lyric2 p")
		for(var i=0;i<p1.length;i++){
			if(lyrict1==p1.eq(i).attr("id")){
				p1.css("color","#a7a1a1")
				p1.eq(i).css("color","#fff");
				$(".s-now").html(p1.eq(i).html());
				$(".lyric2").animate({"top":-i*0.6+0.6+"rem"},1000)
			}
		}
	}
	$(audio).on("loadstart",function(){
		$(".lyric2").empty();
		$(".lyric2").css("top","0.4rem")
		lyric_ctrl();
		
	})
})