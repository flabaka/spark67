/*
 * 
 * y軸方向に複数のガイドを引いてくれるJSFL。
 * 
 * Copyright (C) 2009 あつのすけ（flabaka）
 * version 1.0.0
 * CreateDate 2009/08/03 
 * 
 * Developed by あつのすけ（flabaka）
 * http://flabaka.com/blog/
 * 
 * (C) 2009 flabaka and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */

//getDocument～を毎回書くのは面倒なので、pathに入れておく

var path1 = fl.getDocumentDOM();
var path2 = fl.getDocumentDOM().getTimeline();

//ドキュメントの幅を取得しておく
var stageX  = path1.width;

//ダイアログボックスを表示
var str = prompt("Y軸方向に複数のガイドを作成", "値をカンマ区切りで入力してください。");

//デフォルトの設定のまま or 空のままOKを押したら…
if(str == "値をカンマ区切りで入力してください。" || str == ""){
	str = prompt("Yの値は数値を入力してください","");
}

var myarray = str.split(",");

//レイヤー名を取得
var frameName = path2.getLayerProperty("name");

if(frameName == "ガイド"){
	path2.currentLayer = 0;
	path2.setLayerProperty("locked",false);
	for (var i = 0; i<myarray.length; i++){
		path1.addNewLine({x:0, y:Number(myarray[i])}, {x:stageX, y:Number(myarray[i])});
	};
	path2.setLayerProperty("locked",true);
}else{
	path2.addNewLayer("ガイド","guide",true);
	for (var i = 0; i<myarray.length; i++){
		path1.addNewLine({x:0, y:Number(myarray[i])}, {x:stageX, 	y:Number(myarray[i])});
	};
	path2.setLayerProperty("locked",true);
};