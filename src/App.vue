<template>
	<div id="app">
		<div class="header" id="header">

			<div class="group">
				<div class="group_1">
					<img :src="group1_1" id="js_group1_1" alt="" width="400px">
					<img :src="group1_3" id="js_group1_3" alt="" width="625px">
					<img :src="group1_2" id="js_group1_2" alt="" width="400px">
					<img :src="group1_4" id="js_group1_4" alt="" width="450px">
				</div>
				
				<div class="group_2">
					<img :src="group2_1" id="js_group2_1" alt="" width="380px">
					<img :src="group2_2" id="js_group2_2" alt="" width="330px">
					<img :src="group2_4" id="js_group2_4" alt="" width="300px">
					<img :src="group2_3" id="js_group2_3" alt="" width="460px">
				</div>

				<div class="group_3">
					<img :src="group3_1" id="js_group3_1" alt="" width="340px">
					<img :src="group3_4" id="js_group3_4" alt="" width="400px">
					<img :src="group3_3" id="js_group3_3" alt="" width="480px">
					<img :src="group3_2" id="js_group3_2" alt="" width="310px">
				</div> 
			</div>

			<div class="logo">
				<img alt="" src="./assets/img_logo.png">
				<P>ARAGAKI YUI</P>	
			</div>

			<div class="introduce">
				<div class="introduce_title g-font"><span>A</span>wesome &nbsp; Girl <br>Gakki</div>	
				<div class="introduce_nav">
					<div class="introduce_menu g-font">
						<a @mouseover="AmouseOver()" @mouseout="AmouseOut()" href="#tv">Television &nbsp; dramas</a>
						<a @mouseover="BmouseOver()" @mouseout="BmouseOut()" href="#film">Film</a>
						<a @mouseover="CmouseOver()" @mouseout="CmouseOut()" href="#photo">Official &nbsp; photobooks</a>
						<!-- <span>Television &nbsp; dramas</span> -->
						<!-- <span>Film</span> -->
						<!-- <span>Official &nbsp; photobooks</span> -->
					</div>
					<div class="introduce_year">
						<p>2005 - 2018 <span>26</span></p>
						<p>2007 - 2018 <span>12</span></p>
						<p>2006 - 2018 <span>6</span></p>
					</div>
				</div>
		
				<div class="introduce_born">1988 - 6 - 11</div>	
			</div>
		</div>
		
		<div  class="content">
			<div class="posters">
				<div class="posters_title">{{posterTitle1}}</div>
				<div class="posters_img">
					<img :src="posterImg1" alt="gakki">
				</div>
			</div>
			
			<div class="TV" id="tv">
				<div class="nav">
					<p class="g-font">Television &nbsp; dramas</p>
					<div class="arrow g-font">
						<span>more</span>
						<img src="./assets/icon_arrow.png" alt="" width=32px;>
					</div>
				</div>
				<div class="TVlist">
					<div class="TVimg1">
						<img :src="TVimg1" alt="">
						<div class="TVname1">{{TVname1}}</div>
						<!-- <div class="TVtitle">{{TVtitle}}</div> -->
					</div>
					<div class="TVimg2">
						<img :src="TVimg2" alt="">
						<div class="TVname2">{{TVname2}}</div>
					</div>
					<div class="TVimg3">
						<img :src="TVimg3" alt="" width=240px;>
						<div class="TVname3">{{TVname3}}</div>
					</div>
				</div>
			</div>

			<div class="gakkiPoster">
				<div class="gakki_poster">
					<div class="gakki_title posters_title">{{posterTitle2}}</div>
					<div class="gakki_img">
						<span class="g-font">Gakki</span>
						<img :src="posterImg2" alt="gakki">
					</div>
				</div>
			</div>

			<div class="Film" id="film">
				<div class="nav">
					<p class="g-font">Film</p>
					<div class="arrow g-font">
						<span>more</span>
						<img src="./assets/icon_arrow.png" alt="" width=32px;>
					</div>
				</div>
				<div class="fm_list">
					<div class="fm_line">
						<div class="fm_img1">
							<img :src="fm_img1" alt="">
							<div class="fm_name">{{fm_name1}}</div>
						</div>
						<div class="fm_img2">
							<img :src="fm_img2" alt="">
							<div class="fm_name">{{fm_name2}}</div>
						</div>
						<div class="fm_img3">
							<img :src="fm_img3" alt="">
							<div class="fm_name">{{fm_name3}}</div>
						</div>
					</div>
					<div class="fm_img4">
						<img :src="fm_img4" alt="">
						<div class="fm_name">{{fm_name4}}</div>
						<div class="fm_title">{{fm_title}}</div>
					</div>
				</div>
			</div>
			
			<div class="posters">
				<div class="posters_title">{{posterTitle3}}</div>
				<div class="posters_img">
					<img :src="posterImg3" alt="gakki">
				</div>
			</div>

			<div class="photo" id="photo">
				<div class="nav">
					<p class="g-font">Official &nbsp; photobooks</p>
					<div class="arrow g-font">
						<span>more</span>
						<img src="./assets/icon_arrow.png" alt="" width=32px;>
					</div>
				</div>
				<div class="photo_list">
					<div class="photo_img1">
						<img :src="photo_gif_img" alt="" width=940px;>
					</div>
					<div class="photo_img">
						<img class="img2" :src="photo_img2" alt="" width=560px;>
						<img class="img3" :src="photo_img3" alt="" width=330px;>
					</div>
				</div>
			</div>
		</div>
		
		<div class="footer">
			<p class="g-font gakki_tip">Aragaki Yui</p>
			<div class="header" id="header">
				<p class="g-font footer_title">Yui Aragaki (Aragaki Yui, born June 11, 1988) is a <br> Japanese actress, model, singer and occasional radio show host.</p>
				<div class="logo">
					<img alt="" src="./assets/img_logo.png">
					<P>@HAN YIWEI</P>	
				</div>
			</div>
		</div> 
	</div> 
</template>


<script>
	/*import HelloWorld from './components/HelloWorld.vue'*/
	export default {
		name: 'app',
		data() {
			return{
				posterTitle1: "新垣 結衣 日本の女優、歌手、ファッションモデル。主な愛称はガッキー。",
				posterImg1: require('./assets/img_poster1_1.png'),

				posterTitle2: "カワイイ” は最強なんです。",
				posterImg2: require('./assets/img_gakki_png.png'),

				posterTitle3: "諦めたり 投げ出したりすることなんて 絶対にありません。",
				posterImg3: require('./assets/img_poster2_1.png'),


				TVtitle: "面倒を避けて、避けて、極限まで避け続けたら、歩くのも、食べるのも面倒になって、息をするのも面倒になって、限りなく死に近づくんじゃないでしょうか。",
				TVname1: "逃げるは恥だが役に立つ",
				TVname2: "リーガルハイ",
				TVname3: "掟上今日子の備忘録",
				TVimg1: require('./assets/img_part1_1.png'),
				TVimg2: require('./assets/img_part1_2.png'),
				TVimg3: require('./assets/img_part1_3.png'),


				fm_title: "これからは後（うし）ろを振（ふ）り返（かえ）り、弱（よわ）かった自分を見（み）つめながら、ゆっくり前へ進（すす）むよ。",
				fm_name1: "ミックス。",
				fm_name2: "ワルボロ",
				fm_name3: "恋空",
				fm_name4: "くちびるに歌を",
				fm_img1: require('./assets/img_part2_1.png'),
				fm_img2: require('./assets/img_part2_2.png'),
				fm_img3: require('./assets/img_part2_3.png'),
				fm_img4: require('./assets/img_part2_4.png'),


				photo_img2: require('./assets/img_part3_1.png'),
				photo_img3: require('./assets/img_part3_2.png'),
				// photo_gif: require('./assets/gif_gakki.gif'),
				photo_gif_img: require('./assets/gif_1.png'),


				group1_1: require('./assets/img_group1_1.png'),
				group1_2: require('./assets/img_group1_2.png'),
				group1_3: require('./assets/img_group1_3.png'),
				group1_4: require('./assets/img_group1_4.png'),

				group2_1: require('./assets/img_group2_1.png'),
				group2_2: require('./assets/img_group2_2.png'),
				group2_3: require('./assets/img_group2_3.png'),
				group2_4: require('./assets/img_group2_4.png'),

				group3_1: require('./assets/img_group3_1.png'),
				group3_2: require('./assets/img_group3_2.png'),
				group3_3: require('./assets/img_group3_3.png'),
				group3_4: require('./assets/img_group3_4.png'),
			}
		},

		computed: {
			bg() {return document.getElementById("header")},

			Aone() {return document.getElementById("js_group1_1")},
			Atwo() {return document.getElementById("js_group1_2")},
			Athree() {return document.getElementById("js_group1_3")},
			Afour() {return document.getElementById("js_group1_4")},

			Bone() {return document.getElementById("js_group2_1")},
			Btwo() {return document.getElementById("js_group2_2")},
			Bthree() {return document.getElementById("js_group2_3")},
			Bfour() {return document.getElementById("js_group2_4")},

			Cone() {return document.getElementById("js_group3_1")},
			Ctwo() {return document.getElementById("js_group3_2")},
			Cthree() {return document.getElementById("js_group3_3")},
			Cfour() {return document.getElementById("js_group3_4")},
		},

		methods: {
			AmouseOver:function() {
				this.Aone.style.marginTop = "0";
				this.Atwo.style.marginTop = "80px";
				this.Athree.style.marginTop = "250px";
				this.Afour.style.marginTop = "0";
				this.bg.style.backgroundColor = "#FDF7F6";
			},

			AmouseOut:function() {
				this.Aone.style.marginTop = "-500px";
				this.Atwo.style.marginTop = "-500px";
				this.Athree.style.marginTop = "-900px";
				this.Afour.style.marginTop = "-900px";
				this.bg.style.backgroundColor = "#F9F7F2";
			},


			BmouseOver:function() {
				this.Bone.style.marginTop = "90px";
				this.Btwo.style.marginTop = "0";
				this.Bthree.style.marginTop = "250px";
				this.Bfour.style.marginTop = "0";
				this.bg.style.backgroundColor = "#EEF4F6";
			},

			BmouseOut:function() {
				this.Bone.style.marginTop = "-500px";
				this.Btwo.style.marginTop = "-900px";
				this.Bthree.style.marginTop = "-900px";
				this.Bfour.style.marginTop = "-900px";
				this.bg.style.backgroundColor = "#F9F7F2";
			},


			CmouseOver:function() {
				this.Cone.style.marginTop = "0";
				this.Ctwo.style.marginTop = "0";
				this.Cthree.style.marginTop = "260px";
				this.Cfour.style.marginTop = "30px";
				this.bg.style.backgroundColor = "#F0F7F0";
			},

			CmouseOut:function() {
				this.Cone.style.marginTop = "-500px";
				this.Ctwo.style.marginTop = "-900px";
				this.Cthree.style.marginTop = "-900px";
				this.Cfour.style.marginTop = "-900px";
				this.bg.style.backgroundColor = "#F9F7F2";
			},


			/*changeOne:function() {
				this.titleOne = "Yui Aragaki  is a Japanese actress, model, singer and occasional radio show host.";
				this.posOne = "./assets/img_poster1_2.png"
			},
			changeTwo:function() {
				this.titleTwo = "ツラいとき、味方だって言ってくれるひとがいるだけで救われますよ。";
				this.posTwo = "./assets/img_poster2_2.png"
			},*/
		},
		components: {
		}
	}
</script>


<style lang="scss">
body,p {
	margin: 0;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

$bg: #F9F7F2;
$pink: #FFC8BF;
$red: #DB4137;

/* #app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
} */ 


#header {
	background-color: $bg;
	transition: all 1s ease-in-out;

	.logo {
		margin: 0 auto;
		width: 940px;
		padding-top: 30px;

		img {
			height: 30px;
			line-height: 30px;
			float: right;
		}

		p {
			font-size: 14px;
			line-height: 30px;
			color: #555;
			letter-spacing: 10px;
			font-weight: 100;
		}
	}

	.introduce {
		margin-top: 130px;
		padding-bottom: 130px;
		margin: 0 auto;
		width: 940px;
	}

	.introduce_title {
		font-size: 84px;
		color: $red;
		line-height: 112px;
		margin-top: 130px;
		letter-spacing: 1px;

		span {
			font-size: 140px;
		}

		&:after {
			content: '';
			width: 40px;
			height: 3px;
			background-color: $red;
			display: block;
			margin-top: 60px; 
			margin-left: 5px; 
		}
	}

	.introduce_nav {
		margin-top: 80px;
	}

	.introduce_menu {
		display: flex;
		justify-content: space-between;
		font-size: 28px;
		color: #222;
		cursor: pointer;
		letter-spacing: 1px;

		a {
			text-decoration: none;
			color: inherit;
		}

		a:hover {
			color: $red;
		}
	}

	.introduce_year {
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: #555;
		letter-spacing: 2px;
		font-weight: 100;

		span {
			margin-left: 16px;
			color: $red;
			font-weight: 400;
		}
	}


	.introduce_born {
		display: inline-block;
		margin-top: 0px;
		padding: 5px 40px 5px 10px;
		background-color: $pink;
		color: #222;
		letter-spacing: 2px;
		font-weight: 100;
		position: relative;
		transform: rotate(90deg);
		left: -110px;
		top: 140px;

		&:after {
			content: '';
			width: 100px;
			height: 1px;
			background-color: #222;
			position: absolute;
			top: 16px;
			left: 130px;
		}
	}
}

.content {
	text-align: center;
	margin: 0 auto;
	width: 940px;
}

.posters_title {
	width: 620px;
	color: #222;
	font-size: 22px;
	margin: 70px auto 50px auto;
	font-weight: 150;
	position: relative;
	// border: 1px solid red;

	&:before, &:after {
		content: "“";
		font-size: 90px;
		font-family: 'BornReadySlanted';
		color: $pink;
		position: absolute;
		top: -32px;
	}

	&:before {
		left: -60px;
	}  

	&:after {
		right: -60px;
	}  
}

.posters_img {
	position: relative;

	&:before {
		content: '';
		width: 60px;
		height: 4px;
		background-color: $pink;
		position: absolute;
		display: block;
		top: 36px;
		left: 118px;
	}

	&:after {
		content: 'Gakki';
		font-size: 90px;
		font-family: 'BornReadySlanted';
		color: $pink;
		position: absolute;
		top: 190px; 
		right: 70px;
	} 

	img {
		width: 640px;
		margin-bottom: 120px;
	}
}

.nav {
	height: 80px;
	line-height: 80px;
	margin-bottom: 30px;
	// border: solid 1px red;

	.g-font {
		font-size: 30px;
		float: left;
		letter-spacing: 1px;
	}

	.arrow {
		line-height: 80px;
		float: right;
		cursor: pointer;

		span {
			margin-right: 10px;
		}
	}
}


.TVimg1 {
	width: 580px;
	float: left;
	display: inline-block;
	margin-bottom: 90px;
	// border: solid 1px red;

	img {
		width: 520px;
		float: left;
	}

	.TVname1 {
		width: 20px;
		line-height: 20px;
		font-size: 20px;
		font-weight: 300;
		float: right;
		padding-right: 15px;
	}
}

.TVimg2 {
	width: 300px;
	height: 330px;
	float: right;
	// border: solid 1px red;

	img {
		width: 240px;
		float: left;
		padding-left: 15px;
	}

	.TVname2 {
		width: 20px;
		line-height: 20px;
		font-size: 20px;
		font-weight: 300;
		float: right;
	}
}

.TVimg3 {
	width: 300px;
	height: 330px;
	float: right;
	margin-top: 70px;
	// border: solid 1px red;

	img {
		width: 240px;
		float: left;
		padding-left: 15px;
	}

	.TVname3 {
		width: 20px;
		line-height: 20px;
		font-size: 20px;
		font-weight: 300;
		float: right;
	}
}


// 清除浮动
.TV:before,.TV:after {
	content: "" ;
	display: block;
}
.TV:after {
	clear:both;
}


.gakkiPoster {
	margin: 10px 0px;
	position: relative;
	// border: 1px solid red;
}

.gakki_title {
	width: 330px;
}

.gakki_img {
	img {
		width: 320px;
		position: relative;
		// border: 1px solid red;
	}

	span {
		font-size: 300px;
		line-height: 280px;
		color: $pink;
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 55px;
		// border: 1px solid red;
	}
}


.Film {
	margin-top: 120px;
	margin-bottom: 150px;
	position: relative;
	// border: 1px solid red;
}

.fm_line {
	display: flex;
	justify-content: space-between;
}

.fm_img1,.fm_img2,.fm_img3,.fm_img4 {
	width: 284px;
	height: 330px;
	// border: 1px solid red;

	img {
		width: 240px;
		float: left;
	}

	.fm_name {
		width: 20px;
		line-height: 20px;
		font-size: 20px;
		font-weight: 300;
		float: right;
	}
}

.fm_img4 {
	margin-top: 40px;

	.fm_title {
		width: 520px;
		font-size: 20px; 
		font-weight: 300;
		margin-top: 100px;
		margin-left: 350px;
		position: absolute;
		// border: 1px solid red;
	}
}


.photo_list{
	margin-bottom: 120px;
	// border: 1px solid red;
}

.photo_gif {
	opacity: 1;
}

.photo_img1 {
	width: 940px;
	height: 620px;
	overflow: hidden;
	background-image: url(./assets/gif_gakki.gif) ;
	margin-bottom: 50px;

	img {
		opacity: 1;
		transition: all .2s;
	}

	img:hover {
		opacity: 0;
	}
}

.photo_img {
	.img2 {
		float: left;
	}

	.img3 {
		float: right;
	}
}

// 清除浮动
.photo_img:before,.photo_img:after {
	content: "" ;
	display: block;
}
.photo_img:after {
	clear:both;
}

.footer {
	.header {
		padding-top: 130px;
		padding-bottom: 80px;
	}

	.logo {
		margin-top: 50px;
	}
}

.footer_title {
	text-align: center;
	margin: 0 auto;
	font-size: 22px;
	color: #A22628;
	width: 540px;
	letter-spacing: 1px;
	font-weight: 150;
	position: relative;

	&:before, &:after {
		content: "“";
		font-size: 90px;
		font-family: 'BornReadySlanted';
		color: $pink;
		position: absolute;
		top: -6px;
	}

	&:before {
		left: -60px;
	}  

	&:after {
		right: -60px;
	}  
}

.gakki_tip {
	text-align: center;
	margin: 0 auto;
	color: $pink;
	font-size: 90px;
	line-height: 90px;
	width: 400px;
	margin-bottom: -46px;
	// border: 1px solid red;
}


img:hover {
	transform: scale(1.01);
	transition: all .2s ease-in-out;	
}

.photo_img1,.group_1,.group_2,.group_3 {
	img:hover{
		transform: none;
		transition: none;	
	}
}

// hover 图片组1
.group_1 {
	margin: 0 auto;
	width: 940px;
	position: relative;

	img {
		box-shadow: -20px 20px 60px rgba(0,0,0,.2);
	}

	#js_group1_2 {
		margin-top: -500px;
		position: absolute;
		margin-left: 330px;
		transition: all .7s ease-in-out;
	}

	#js_group1_4 {
		margin-top: -900px;
		position: absolute;
		margin-left: 696px;
		transition: all .6s ease-in-out;
	}

	#js_group1_1 {
		margin-top: -500px;
		position: absolute;
		transition: all .3s ease-in-out;	

	}

	#js_group1_3 {
		margin-top: -900px;
		position: absolute;
		margin-left: 470px;
		transition: all .7s ease-in-out;
	}
}


// hover 图片组2
.group_2 {
	margin: 0 auto;
	width: 940px;
	position: relative;

	img {
		box-shadow: -20px 20px 60px rgba(0,0,0,.2);
	}

	#js_group2_2 {
		margin-top: -900px;
		position: absolute;
		margin-left: 390px;
		transition: all .7s ease-in-out;
	}

	#js_group2_4 {
		margin-top: -900px;
		position: absolute;
		margin-left: 790px;
		transition: all .6s ease-in-out;
	}

	#js_group2_1 {
		margin-top: -500px;
		margin-left: 90px;
		position: absolute;
		transition: all .7s ease-in-out;	

	}

	#js_group2_3 {
		margin-top: -900px;
		position: absolute;
		margin-left: 480px;
		transition: all .7s ease-in-out;
	}
}


// hover 图片组3
.group_3 {
	margin: 0 auto;
	width: 940px;
	position: relative;

	img {
		box-shadow: -20px 20px 60px rgba(0,0,0,.2);
	}

	#js_group3_2 {
		margin-top: -900px;
		position: absolute;
		margin-left: 420px;
		transition: all .7s ease-in-out;
	}

	#js_group3_4 {
		margin-top: -900px;
		position: absolute;
		margin-left: 756px;
		transition: all .6s ease-in-out;
	}

	#js_group3_1 {
		margin-top: -500px;
		margin-left: 80px;
		position: absolute;
		transition: all .7s ease-in-out;	

	}

	#js_group3_3 {
		margin-top: -900px;
		position: absolute;
		margin-left: 620px;
		transition: all .7s ease-in-out;
	}
}

</style>
