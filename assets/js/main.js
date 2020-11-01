// このファイルに処理を記述する

// モックの本来は動的につくる部分をコメントアウトしておく

//Addボタンの処理

//Addボタンが押されたら
//1,入力文字のチェック
	//空文字なら何もしない
		// 2,ulの中にli
		//何か入力されていたら、ulの中にliとして表示する
			//3,表示するliには、右側にdeleteボタンが表示されている様にする
			//追加されるliはどんどん下に追加

//Addボタン要素の取得
let addBtn = document.querySelector('#btn');

//trashボタン要素の取得
let trashBtn = document.querySelector('.fa-trash-alt');


//Addボタンが押された時のイベントを取得（addEventListener)
//イベントを察知したい要素.addEventlistener(察知したいイベント名(文字列),function(){イベントが発生した})
addBtn.addEventListener('click',function(){

//fa-trash-altボタンが押された時のイベントを取得（addEventListener)
//イベントを察知したい要素.addEventlistener(察知したいイベント名(文字列),function(){イベントが発生した})


//1,入力文字のチェック
//入力文字の取得
let input_text = document.querySelector('#input').value;

//input_textが空じゃなかったら、処理を行う
if (input_text !=''){
	// 2.ulの中にliとして表示する
	// 親要素のulを変数に取得
	let todo_list =document.querySelector('.todo-list');

	//追加予定のliタグを生成
	let li = document.createElement('li');

	//list<li></li>が入ってる
	//liのclassにlistに追加
	li.classList.add('list');
	//li<li class="list"</li>
	// 生成したliタグの文字を、入力された文字（inputu_text）にする（代入する）
	li.textContent = input_text;
	//li <li class="list">入力された文字</li>が入っている
	console.log(li);


	//3,liの中にDeleateボタンとなるdivタグを追加
	// trashボタン用のdivタグを生成
	let div_trash = document.createElement('div');
	// div_trashには<div>が入ってる
	// Deleteボタン用のdivタグを生成
	let div_done = document.createElement('div');
	// div_deleteには<div>が入ってる


	// divにクラス名trashを指定
	// div_trash.classList.add('fa-trash-alt');
	div_trash.classList.add("fas");
	div_trash.classList.add("fa-trash-alt");
	// divにクラス名doneを指定
	// div_done.classList.add('fa-check-circle');
	div_done.classList.add("far");
	div_done.classList.add("fa-check-circle");

	// div_trashには<div class="trash"></div>が入ってる


	// trashボタンの処理
	// 押されたら、押されたリスト部分を削除
	//押されたtrashボタンの親要素のliが消える
	div_trash.addEventListener('click',function(){
		//this trashボタン（divタグ）
		//this.parentElement trashを含んだliタグ
		let hantei = confirm('本当に削除しますか？');
		//OKが押されたら、削除する
		if(hantei == true){
			this.parentElement.remove();
		}
	});


	//生成したdivタグを親要素liに追加
	li.appendChild(div_trash);
	//liには、<li class="list">入力された文字<div class="trash">trash</div></li>が入ってる
//生成したdivタグを親要素liに追加
	li.appendChild(div_done);
	//liには、<li class="list">入力された文字<div class="done">done</div></li>が入ってる

	//生成したliタグを親要素のulタグに追加(appendChildを使うことによりどんどん下に追加される)
	todo_list.appendChild(li);

		// 4入力欄を空っぽにする
	document.querySelector('#input').value = "";


}

});