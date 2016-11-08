$(function() {
	var sign = 0;
	//列表和切歌
	var musics = [{
		name: "那英 - 离开我 (Live) ",
		author: "那英",
		src: "./music/那英 - 离开我 (Live) [mqms2].mp3",
		duration: "04:11"
	}, {
		name: " 想遇见一个人",
		author: "曾咏熙",
		src: "./music/曾咏熙 - 想遇见一个人 [mqms2](1).mp3",
		duration: "3:46"
	}, {
		name: "偏偏喜欢你 ",
		author: "陈晓东 ",
		src: "./music/尖耳朵的阿凡达妹妹陈晓东 - 偏偏喜欢你 (Live) [mqms2].mp3",
		duration: "4:29"
	}, {
		name: " 有多少爱可以重来 ",
		author: "李嘉格侧田 ",
		src: "./music/李嘉格侧田 - 有多少爱可以重来 (Live) [mqms2].mp3",
		duration: "4:40"
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
			$(".song .biaoji").eq(index).css("background", "#31c27c");
			musics.push(JSON.parse(d));
			render();
		})
		//全部添加
	console.log($(".biaoji").css("background"));
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

	var current = $(".current-time");
	var duration = $(".duration");
	var progress = $(".progress");
	var progress1 = $("#progress1");
	var pi = $(".pi");
	var pi1 = $("#pi1");
	//		var mute=$("#mute");
	$(".pro-bg").on("touchend", function(e) {
		var offsetX = e.originalEvent.changedTouches[0].clientX - progress.offset().left;
		audio.currentTime = offsetX / $(this).width() * audio.duration;
	})
	$("#pro").on("touchend", function(e) {
		var offsetX = e.originalEvent.changedTouches[0].clientX - progress1.offset().left;
		audio.currentTime = offsetX / $(this).width() * audio.duration;
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
		var left = progress.width() * audio.currentTime / audio.duration
		pi.css("width", left);

	})
	$(audio).on("timeupdate", function() {
			current.html(format(audio.currentTime));
			var left = progress1.width() * audio.currentTime / audio.duration
			pi1.css("width", left);

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

	pi.on("touchend", false);
	pi1.on("touchend", false);
	pi.on("touchstart", function(e) {
		$(document).on("touchmove", function(e) {
			var m = e.originalEvent.changedTouches[0].clientX;
			var left = m - progress.position().left;
			var c = left / progress.width() * audio.duration;
			if (c >= audio.duration) {
				return;
			}
			audio.currentTime = c;
		})
		return false;
	})
	pi1.on("touchstart", function(e) {
			$(document).on("touchmove", function(e) {
				var m = e.originalEvent.changedTouches[0].clientX;
				var left = m - progress1.position().left;
				var c = left / progress1.width() * audio.duration;
				if (c >= audio.duration) {
					return;
				}
				audio.currentTime = c;
			})
			return false;
		})
		//静音
		//		mute.on("click",function(){
		//			if($(this).attr("data-v")){
		//				audio.volume=$(this).attr("data-v");
		//				$(this).removeAttr("data-v");
		//			}else{
		//				$(this).attr("data-v",audio.volume);
		//				audio.volume=0;
		//			}
		//		})
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
	$(".neirong").on("touchend", function() {
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
})