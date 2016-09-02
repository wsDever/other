﻿var v = new Array();
var vs = "10X98765432";
var newCardID = "";

function onload() {
  document.getElementById("cardID").focus();
}

function checkCardID(cardID15) {
  v.push(2, 4, 8, 5, 10, 9, 7, 3, 6, 1, 2, 4, 8, 5, 10, 9, 7);
  var cardID = cardID15.value;
  if (cardID.length != 15) {
    alert("请输入15位你的身份证号码！");
    cardID15.focus();
    return;
  }
  var month = cardID.substring(8, 10); //获得15位号码中的月份  
  if (!checkMonth(month)) {
    alert("你输入的身份证格式不正确，月份填写错误！")
    cardID15.focus();
    return;
  }
  var year = "19" + cardID.substring(6, 8);
  var day = cardID.substring(10, 12);
  if (!checkDay(year, month, day)) {
    alert("你输入的身份证的个格式不正确，日期格填写错误");
    cardID15.focus();
    return;
  }
  //alert(checkDay(year,month,day));  
  //将15位的号码转换位17位  
  var cardID17 = cardID.substring(0, 6) + "19" + cardID.substring(6);
  var N = 0;
  var R = -1;
  var T = '0'; //储存最后一个数字  
  var j = 0;
  var cardID18 = "";
  //计数出第18位数字     
  for (var i = 16; i >= 0; i--) {
    N += parseInt(cardID17.substring(i, i + 1)) * v[j];
    j++;
  }
  R = N % 11;
  T = vs.charAt(R);
  cardID18 = cardID17 + T;
  document.getElementById("cardID18").value = cardID18;
  newCardID = cardID18;
}
//判断输入的月份是否正确  
function checkMonth(month) {
  if (month < 1 || month > 12) {
    return false;
  }
  return true;
}
/** 
 **检查你输入的天数是否正确 
 **yean为年 
 **month为月 
 **day为日 
 **/
function checkDay(year, month, day) {
  var Mday = 0;
  if (day < 1 || day > 31) {
    return false;
  }
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    Mday = 31;
  }
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    Mday = 30;
  }
  if (month == 2) {
    Mday = isLeapYear(year);
  }
  if (day > Mday) {
    return false;
  }
  return true;
}
//判断你输入的年是否位闰年  
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? 29 : 28;
}

function checkNewCardID() {
  alert("18位身份证号码为：" + newCardID);
}