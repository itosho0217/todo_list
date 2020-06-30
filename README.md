# JavaScript ToDoアプリ

## 概要
DOMの操作を用いたシンプルなTodoアプリの作成をします。
[完成見本]()

## 機能
* ユーザーはinputに文字を入力
* 「Add」をクリックすると、入力した内容が下のリストに追加される（以下タスクと呼ぶ）
* 各タスクには「Delete」ボタンがついており、クリックすると、リストから削除される。

##　作成の手順
* zipファイルのダウンロード（[クリックでDL開始]()）
* HTML、CSSは用意されているので、main.jsを編集します。

1. ボタン要素を取得
2. ボタンにクリックイベントを追加する
   1. ユーザーが入力した内容を取得し、定数に代入
   2. <li>要素を作成
   3. <li>にクラス（list）を追加
   4. <li>にユーザーが入力した内容を入れる
   5. <ul>要素を取得
   6. 1~4で作成した<li>を5で取得した<ul>の子要素に入れる
   7. Deleteボタンを作成（機能としてはボタンですが、<div>要素を使います）
   8. Deleteボタンのコンテンツ (文字) を指定
   9. Deleteボタンにクラス (delete) を追加
   10. 1~4で作成した<li>に7~9で作成したDeleteボタンの子要素に入れる
   11. Deleteボタンにクリックイベントを追加
       1.  クリックした要素 (this) を親ごと削除
   12. inputの中に入力された文字をresetする


## 使用するコードの復習
まだDOM操作の基本を覚えられていない方は、制作開始前におさらいしましょう。

#### 要素の取得

`document.querySelector('.class')`

#### 要素の作成

`document.createElement('div')`

#### 要素にクラスを追加

`要素.classList.add('list')`

#### 要素のコンテンツ (文字) を編集
`newTask.textContent = inputValue`

#### 子要素を追加

`ul.appendChild(newTask)`

#### 親要素を削除

`this.parentElement.remove();`

#### 要素のvalueを編集

`document.querySelector('#input').value = ''`

#### ある要素の親要素

`要素.parentElement`

#### 要素の削除

`要素.remove()`

#### イベントの追加
```
要素.addEventListener('click', function() {
    console.log('Hello World');
});
```

<!-- #### 注意点
`querySelector`でclassで指定する時は「.」を付ける<br>
idで指定する時は「#」<br>
要素名で指定する時は何も付けない -->