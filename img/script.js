/*	追加する際のテンプレ
母
{
	"name":"kikkun",
	"message":""
},

息子
{
	"name":"fb",
	"branch":"choice" or "root",
	"message1":"",
	"message2":""
}
また、息子に関しては"branch"が"root"の時、かつ"message2"の文章を選択した場合、失敗ルートを新しく作成する。(data2以降が失敗のルートとなっている。)

*/

var allroot={
//正規ルート
"data1": [
{
	"name":"kikkun",
	"message":"なあえふびー",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"えふびー？",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"おい",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"既読無視かよ！"
},
{
	"name":"fb",
	"message":"誰"
},
{
	"name":"kikkun",
	"message":"古に伝わりしきっくんだよ！"
},
{
	"name":"fb",
	"message":"・・・で何"
},
{
	"name":"kikkun",
	"message":"お前に相談があるんだけど！"
},
{
	"name":"fb",
	"message":"めんどくさい"	
},
{
	"name":"kikkun",
	"message":"そう言うなって俺らの仲だろ〜"
},
{
	"name":"fb",
	"message":"えおえおに相談しなよ"
},
{
	"name":"kikkun",
	"message":"お前じゃないとダメなの",
	"time":"3000"
},
{
	"name":"fb",
	"message":""
},
{
	"name":"fb",
	"message":"そう"
},
{
	"name":"fb",
	"message":"で、何？"
},
{
	"name":"kikkun",
	"message":"あのね"
},
{
	"name":"kikkun",
	"message":"えふびーに好きになってもらうにはどうしたらいい？",
	"time":"3000"
},
{
	"name":"fb",
	"message":""
},
{
	"name":"fb",
	"message":"は？"
},
{
	"name":"kikkun",
	"message":"ん？"
},
{
	"name":"fb",
	"message":"どういう意味？"
},
{
	"name":"kikkun",
	"message":"そのまんまだけど"
},
{
	"name":"kikkun",
	"message":"わかってるとは思うんだけどさ！"
},
{
	"name":"kikkun",
	"message":"俺はえふびーのことが好きだから、お前にも好きになって欲しいと思って"
},
{
	"name":"fb",
	"message":"はい？"
},
{
	"name":"fb",
	"message":"え？"
},
{
	"name":"kikkun",
	"message":"好きな人に好きになってもらいたいのは普通でしょ？"
},
{
	"name":"fb",
	"message":"いや"
},
{
	"name":"fb",
	"message":"いやいやいや！？"
},
{
	"name":"fb",
	"message":"初めて聞いたんですけど"
},
{
	"name":"kikkun",
	"message":"そう？好きな人に嫌われたい人なんていなくない？"
},
{
	"name":"fb",
	"message":"そっちじゃない"
},
{
	"name":"fb",
	"message":"俺のこと、好きとか"
},
{
	"name":"kikkun",
	"message":"気づいてなかったの？"
},
{
	"name":"fb",
	"message":"気づくっていうか、おかしいでしょ"
},
{
	"name":"fb",
	"branch":"root",
	"message1":"散々一緒にいて今更じゃん",
	"message2":"それとも女に飽きたから男？"
},
{
	"name":"kikkun",
	"message":"ずっと前から好きだった！",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"えふびー？",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"おーい",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"また既読無視？",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"えふびー！"
},
{
	"name":"fb",
	"message":"何言ってんのきっくん"
},
{
	"name":"kikkun",
	"message":"？"
},
{
	"name":"fb",
	"message":"あ、これ罰ゲームだろ！あろま辺りにやらされてんだろ"
},
{
	"name":"kikkun",
	"message":"ばれちゃったかー！",
	"time":"3500"
},
{
	"name":"fb",
	"message":""
},
{
	"name":"fb",
	"message":"そんな事だと思った"
},
{
	"name":"kikkun",
	"message":"マリカーであろまに負けてさー"
},
{
	"name":"kikkun",
	"message":"作戦失敗か"
},
{
	"name":"fb",
	"message":"じゃあドッキリは失敗って事で"
},
{
	"name":"kikkun",
	"message":"ドッキリ？"
},
{
	"name":"fb",
	"message":"ドッキリなんでしょ？もういいから"
},
{
	"name":"fb",
	"message":"罰ゲームに巻き込まないでよ"
},
{
	"name":"kikkun",
	"message":"いやでも本当のことだし"
},
{
	"name":"fb",
	"message":"だからもういいって"
},
{
	"name":"fb",
	"message":"俺だっていい加減キレるぞ"
},
{
	"name":"fb",
	"message":"よくないって！チャンスなんだから！！"
},
{
	"name":"fb",
	"message":"はい？"
},
{
	"name":"kikkun",
	"message":"これを機にえふびーに好きになってもらおうと思ってさ"
},
{
	"name":"fb",
	"message":"何で"
},
{
	"name":"kikkun",
	"message":"だから言ったじゃん。好きな人には好かれたいでしょ"
},
{
	"name":"fb",
	"message":"だから罰ゲーム"
},
{
	"name":"kikkun",
	"message":"罰ゲームでもお前の事好きなのは変わんないから当然だろ",
	"time":"3000"
},
{
	"name":"fb",
	"message":""
},
{
	"name":"fb",
	"message":"ちょっと意味わかんない"
},
{
	"name":"fb",
	"message":"負けたから俺に告白するっていう罰ゲームでしょ？"
},
{
	"name":"kikkun",
	"message":"違うよ"
},
{
	"name":"kikkun",
	"message":"好きな人に今の悩みを相談しろっていう罰ゲーム",
	"time":"3000"
},
{
	"name":"fb",
	"message":"え"
},
{
	"name":"fb",
	"message":"じゃあ、本当に俺の事好きなの"
},
{
	"name":"kikkun",
	"message":"だからそう言ってんじゃん！"
},
{
	"name":"kikkun",
	"message":"えふびーって鈍感だよね"
},
{
	"name":"fb",
	"message":"きっくんだって"
},
{
	"name":"kikkun",
	"message":"あの二人も気づいてるよ？",
	"time":"3500"
},
{
	"name":"fb",
	"message":"は"
},
{
	"name":"fb",
	"message":"嘘でしょ"
},
{
	"name":"fb",
	"message":"みんなグルでドッキリなんだ？"
},
{
	"name":"kikkun",
	"message":"違うって"
},
{
	"name":"kikkun",
	"message":"えふびーのこと好きだよ"
},
{
	"name":"fb",
	"branch":"root",
	"message1":"いつから？",
	"message2":"証拠は？"
},
{
	"name":"kikkun",
	"message":"専門の時から"
},
{
	"name":"fb",
	"message":"そんなに前"
},
{
	"name":"kikkun",
	"message":"それでさ。どう？俺、好きになってもらえそう？"
},
{
	"name":"fb",
	"message":"あ、相談か・・・"
},
{
	"name":"fb",
	"branch":"root",
	"message1":"実は俺も",
	"message2":"・・・友達のままで"
},
{
	"name":"fb",
	"message":"俺もきっくんのこと好きだったよ"
},
{
	"name":"fb",
	"message":"だからドッキリって言われて辛かった"
},
{
	"name":"kikkun",
	"message":"でも好きなのは罰ゲームじゃないよ"
},
{
	"name":"fb",
	"message":"うん。だから嬉しかった"
},
{
	"name":"kikkun",
	"message":"今からえふびーん家行っていい？"
},
{
	"name":"fb",
	"message":"・・・うん"
},
{
	"name":"kikkun",
	"message":"今すぐ抱きしめたい"
},
{
	"name":"fb",
	"message":"待ってる",
	"time":"5000"
},
{
	"name":"kikkun",
	"message":"<a href=''>[ハッピーエンド！]</a>"
},

],


//失敗ルート1
"data2":[
{
	"name":"kikkun",
	"message":"は？何それ",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"俺のことそんなやつだと思ってんの",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"お前のことずっと好きだったんだぞ"
},
{
	"name":"kikkun",
	"message":"専門の頃お前に気があるって女がいたからさ"
},
{
	"name":"kikkun",
	"message":"ちょっと俺が誘ったらその女すぐついて来やがって"
},
{
	"name":"kikkun",
	"message":"そんな女共はお前にふさわしくない",
	"time":"3500"
},
{
	"name":"fb",
	"message":"きっくん？"
},
{
	"name":"kikkun",
	"message":"お前には俺だけだ",
	"time":"1500"
},
{
	"name":"kikkun",
	"message":"そろそろお前ん家着くからさ",
	"time":"1500"
},
{
	"name":"kikkun",
	"message":"嫌でもお前は俺のものってわからせてやる",
	"time":"1000"
},
{
	"name":"kikkun",
	"message":"鍵かけても無駄だよ？"
},
{
	"name":"fb",
	"message":"",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"[きくおヤンデレEND]",
	"retry":"1"
}
],
//失敗ルート2
"data3":[
{
	"name":"kikkun",
	"message":"証拠かー"
},
{
	"name":"kikkun",
	"message":"じゃあ、台所のコンセント開けてみて？"
},
{
	"name":"fb",
	"message":"コンセント？",
	"time":"3000"
},
{
	"name":"fb",
	"message":"",
	"time":"3000"
},
{
	"name":"fb",
	"message":"何これ"
},
{
	"name":"kikkun",
	"message":"盗聴器♡"
},
{
	"name":"fb",
	"message":"何でこんなもの"
},
{
	"name":"kikkun",
	"message":"だから言ったでしょ"
},
{
	"name":"kikkun",
	"message":"お前の事好きだって"
},
{
	"name":"kikkun",
	"message":"台所、寝室、全部の部屋にあるよ"
},
{
	"name":"kikkun",
	"message":"それが証拠",
	"time":"3500"
},
{
	"name":"kikkun",
	"message":"ねえ"
},
{
	"name":"kikkun",
	"message":"さっきまで一緒にいた女誰？"
},
{
	"name":"fb",
	"branch":"choice",
	"message1":"知らないよ",
	"message2":"きっくんの彼女だよ"
},
{
	"name":"kikkun",
	"message":"そう"
},
{
	"name":"kikkun",
	"message":"えふびーの手を使う事なかったのに",
	"time":"1500"
},
{
	"name":"kikkun",
	"message":"ソレ、えふびーに近づこうとしてたやつ",
	"time":"1500"
},
{
	"name":"kikkun",
	"message":"ちょっと誘ったら俺についてきたからさ"
},
{
	"name":"kikkun",
	"message":"いつか捨てるつもりだったよ"
},
{
	"name":"kikkun",
	"message":"だからえふびーが焼くことないのに"
},
{
	"name":"kikkun",
	"message":"俺のためにやってくれたんだ",
	"time":"1500"
},
{
	"name":"kikkun",
	"message":"えふびーも俺の事相当好きだね"
},
{
	"name":"fb",
	"message":"",
	"time":"3500"
},
{
	"name":"fb",
	"message":"ゾクゾクきた"
},
{
	"name":"fb",
	"message":"全部聞かれてたんだ♡",
	"time":"1500"
},
{
	"name":"fb",
	"message":"女を殺した音も。何もかも",
	"time":"1500"
},
{
	"name":"kikkun",
	"message":"今からえふびーん家いくね"
},
{
	"name":"kikkun",
	"message":"盗聴器ごしじゃなくて直接聞きたい"
},
{
	"name":"fb",
	"message":"うん待ってる♡",
	"time":"3000"
},
{
	"name":"kikkun",
	"message":"[二人ともヤンデレEND]",
	"retry":"1"
}
],
//失敗ルート3
"data4":[
{
	"name":"kikkun",
	"message":"そっか",
	"time":"5000"
},
{
	"name":"kikkun",
	"message":"じゃあ",
	"time":"5000"
},
{
	"name":"kikkun",
	"message":"また"
},
{
	"name":"kikkun",
	"message":"[？END]",
	"retry":"1"
}
]

};



//count用
var count = 0;

//失敗ルートcount用
var count2 = 0;

	//分岐の時に止める変数。0=動く　1以外=一時停止
var status = 0;

//失敗フラグが発生した時用
var flag = 1;

var root = "data"+flag;

function add(){


	count++;
	status=0;

	document.getElementById("btnN").style.display="none";

	//data[]が格納されていなければこの時点で終了させる。
	if(allroot[root][count-1]==null){
		status==1;
		return;
	}

	if(allroot[root][count-1].name == "kikkun"){				//母の発言時

	    var div_element = document.createElement("div");
	    div_element.innerHTML = '<div class="question_box"><img src="img/kikkun.png" class="left-image"/><div id="text_question"">'+ allroot[root][count-1].message + '</div></div>';
	    var parent_object = document.getElementById("wrapper");
	    parent_object.appendChild(div_element);

	}else if(allroot[root][count-1].name =="fb"){				//息子の発言時
		if(allroot[root][count-1].branch =="choice"){
			var form_element = document.createElement("div");
			form_element.id='btnAB';
			form_element.innerHTML = '<div id="btn2"><button id="btnA" onClick="addC(this);">'+allroot[root][count-1].message1+'</button><button id="btnB" onClick="addC(this);">'+allroot[root][count-1].message2+'</button></div>';
			var parent_object =document.getElementById("button");
			parent_object.appendChild(form_element);

			status=1;

		}else if(allroot[root][count-1].branch =="root"){
			var form_element = document.createElement("div");
			form_element.id = 'btnAB';
		    form_element.innerHTML = '<div id="btn2"><button id="btnA" onClick="addA();">'+allroot[root][count-1].message1+'</button><button id="btnB" onClick="addB();">'+allroot[root][count-1].message2+'</button></div>';
		    var parent_object = document.getElementById("button");
		    parent_object.appendChild(form_element);
		    status=1;
		    flag++;

		}else{
			var div_element = document.createElement("div");
		    div_element.innerHTML = '<div class="answer_box"><div id="text_answer">'+allroot[root][count-1].message+'</div></div>';
		    var parent_object = document.getElementById("wrapper");
		    parent_object.appendChild(div_element);
		}
	}

	window.scrollTo( 0, 100+(count-1)*1000 ) ;//追加したら一番下にスクロール

	//１文の読み込み速度
	if(status==0){
	var timerID = setTimeout(function(){
			if(allroot[root][count-1].time==null){
				add();
			}else{
				setTimeout('add()',allroot[root][count-1].time);
			}
			//配列にtimeを作成し、それが定義された時のみ時間間隔を操作する
		},2000);
	}

}



/* 正解の選択肢を選んだら */
function addA(){
	var dom_obj=document.getElementById('btnAB');
    var dom_obj_parent=dom_obj.parentNode;
    dom_obj_parent.removeChild(dom_obj);
   	document.getElementById("btnN").style.display="";

	var div_element = document.createElement("div");
	div_element.innerHTML = '<div class="answer_box"><div id="text_answer">'+allroot[root][count-1].message1+'</div></div>';
	var parent_object = document.getElementById("wrapper");
	parent_object.appendChild(div_element);

	window.scrollTo( 0, 100+count*1000 ) ;
	document.getElementById("btnN").style.display="none";
	setTimeout('add()',2000);

}

/* 不正解の選択肢を選んだら */
function addB(){

	if(count2==0){
		root = "data1";
		var dom_obj=document.getElementById('btnAB');
    	var dom_obj_parent=dom_obj.parentNode;
    	dom_obj_parent.removeChild(dom_obj);
		var div_element = document.createElement("div");
	    div_element.innerHTML = '<div class="answer_box"><div id="text_answer">'+ allroot[root][count-1].message2 + '</div></div>';
	    var parent_object = document.getElementById("wrapper");
	    parent_object.appendChild(div_element);
	}

	status=0;
	count2++;
	var root= "data" + flag;


	if(allroot[root][count2-1]==null){
		status=1;
		return;
	}

	if(allroot[root][count2-1].name == "kikkun"){
	    var div_element = document.createElement("div");
	    div_element.innerHTML = '<div class="question_box"><img src="img/kikkun.png" class="left-image"/><div id="text_question"">'+ allroot[root][count2-1].message + '</div></div>';
	    var parent_object = document.getElementById("wrapper");
	    parent_object.appendChild(div_element);

	    //不正解ルートの最後まで表示されたら、やり直すボタンを表示
	    if(allroot[root][count2-1].retry != null){
			var form_element = document.createElement("div");
			form_element.id='btnAB';
			form_element.innerHTML = '<div id="btn2"><button id="btnR" onClick="">やり直す</button></div>';
			var parent_object =document.getElementById("button");
			parent_object.appendChild(form_element);
		}

	}else if(allroot[root][count2-1].name =="fb"){
		if(allroot[root][count2-1].branch =="choice"){
			var form_element = document.createElement("div");
			form_element.id='btnAB';
			form_element.innerHTML = '<div id="btn2"><button id="btnA" onClick="addC(this);" value="'+allroot[root][count2-1].message1+'">'+allroot[root][count2-1].message1+'</button><button id="btnB" onClick="addC(this);" value="'+allroot[root][count2-1].message2+'">'+allroot[root][count2-1].message2+'</button></div>';
			var parent_object =document.getElementById("button");
			parent_object.appendChild(form_element);

			status=1;

		}else if(allroot[root][count2-1].branch =="root"){
			var form_element = document.createElement("div");
			form_element.id = 'btnAB';
	    	form_element.innerHTML = '<div id="btn2"><button id="btnA" onClick="addA();">'+allroot[root][count2-1].message1+'</button><button id="btnB" onClick="addB();">'+allroot[root][count2-1].message2+'</button></div>';
	    	var parent_object = document.getElementById("button");
	   		parent_object.appendChild(form_element);

	 	   status=1;

		}else{
			var div_element = document.createElement("div");
	    	div_element.innerHTML = '<div class="answer_box"><div id="text_answer">'+allroot[root][count2-1].message+ '</div></div>';
	    	var parent_object = document.getElementById("wrapper");
	    	parent_object.appendChild(div_element);
		}
	}

	window.scrollTo( 0, 100+(count+count2-1)*1000 ) ;//追加したら一番下にスクロール


	//１文の読み込み速度
	if(status==0){
	var timerID = setTimeout(function(){
			if(allroot[root][count2-1].time==null){
				addB();
			}else{
				setTimeout('addB()',allroot[root][count2-1].time);
			}
			//配列にtimeを作成し、それが定義された時のみ時間間隔を操作する
		},2000);
	}
}


/*どちらを選択しても今後の分岐がないルート*/
function addC(button){

	var dom_obj=document.getElementById('btnAB');
	var dom_obj_parent=dom_obj.parentNode;
	dom_obj_parent.removeChild(dom_obj);
	var div_element = document.createElement("div");

	if(count2>0){
			div_element.innerHTML = '<div class="answer_box"><div id="text_answer">'+button.value+ '</div></div>';
	}else{
		if(button.id=="btnA"){
			div_element.innerHTML = '<div class="answer_box"><div id="text_answer">'+allroot[root][count-1].message1+ '</div></div>';
		}else if(button.id=="btnB"){
			div_element.innerHTML = '<div class="answer_box"><div id="text_answer">'+allroot[root][count-1].message2+ '</div></div>';
		}
	}
	var parent_object = document.getElementById("wrapper");
	parent_object.appendChild(div_element);
	window.scrollTo(0,100+(count-1)*1000);

	if(count2>=1){
		setTimeout('addB()',2000);
	}else{
		if(button.id=="btnA"){
			setTimeout('add()',2000);
		}else{
			setTimeout('add()',2000);
		}
	}

}
