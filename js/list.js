function getByClass (oParent,sClass) {
         	var aEle=oParent.getElementsByTagName('*');
         	var arr=[]
         	for (var i = 0; i < aEle.length; i++) {
         		if (aEle[i].className==sClass) {
         			arr.push(aEle[i])
         		};
         	};
         	return arr;
         }
window.onload=function(){
	
	var oRightContent=document.getElementsByClassName('right-content')[0]
	var oTime=getByClass(oRightContent,time)[0]
	var oShop=getByClass(oTime,shop)[0]
	var oUl=getByClass(oShop,ul)[0]
	var oLi=getByClass(oUl,li)[1]
	var oImg=getByClass(oLi,img)[0]
	oImg.onmouseover=function () {
       oImg.src='images/xin1.png'
   }
}