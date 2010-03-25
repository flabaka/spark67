/*
 * 
 * 一度にx軸方向に複数のガイドを引いてくれるJSX
 * 
 * Copyright (C) 2009 あつのすけ（flabaka）
 * version 1.0.0
 * CreateDate 2009/07/27 
 * 
 * Developed by あつのすけ（flabaka）
 * http://flabaka.com/blog/
 * 
 * (C) 2009 flabaka and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
//ダイアログボックスを表示させる

var data = prompt("x軸に複数のガイドを引く","値をカンマで区切ってください");

//カンマを取り除き、配列に入れる

var myarray = data.split(",");

//配列の値を使ってガイドを作成する
for(var i=0;i<myarray.length;i++){
	guide(myarray[i]);
}

function guide( value )
{
var id1 = charIDToTypeID( "Mk  " );
    var desc1 = new ActionDescriptor();
    var id2 = charIDToTypeID( "Nw  " );
        var desc2 = new ActionDescriptor();
        var id3 = charIDToTypeID( "Pstn" );
        var id4 = charIDToTypeID( "#Pxl" );
        desc2.putUnitDouble( id3, id4, value );
        var id5 = charIDToTypeID( "Ornt" );
        var id6 = charIDToTypeID( "Ornt" );
        var id7 = charIDToTypeID( "Vrtc" );
        desc2.putEnumerated( id5, id6, id7 );
    var id8 = charIDToTypeID( "Gd  " );
    desc1.putObject( id2, id8, desc2 );
executeAction( id1, desc1, DialogModes.NO );
}