       //封装一个获得属性值函数，避免offset中有border的bug
       //if else解决浏览器兼容性问题
       function getStyle (obj,name) {
        if (obj.currentStyle) {
          return currentStyle[name];
        }else{
          return getComputedStyle(obj,false)[name];
        }
       }
       function startMove (obj,json,fun) {
       
       	//清除定时器
       	   clearInterval(obj.timer)
           obj.timer=setInterval(function  () {
            //设置开关是否清除定时器
            var sportStop=true;//假设所有的运动都执行完了
             //for in获取json里面的attr
            for(var attr in json){
           	//用cur代替后面出现的属性值
           	   // var cur=parseInt(getStyle(obj,attr));
           	   //兼容透明度的操作
           	   var cur=0;
           	   if (attr=='opacity') {
           	   	   cur=parseFloat(getStyle(obj,attr))*100
           	   	//这里*100是避免透明度出现！=1的情况，所以化为整数
           	   }else{
           	   	   cur=parseInt(getStyle(obj,attr)); 
           	   }
           	//speed   缓冲运动=（要到的距离-当前的属性值）/稍大的整数 （避免一步到位）
           	   var speed=(json[attr]-cur)/6
           	   //判断speed的正负来决定运动方向  取整的目的避免出现不停止的运动
               speed=speed>0?Math.ceil(speed):Math.floor(speed);
               //如果发现有attr没有达到cur值就设为false;
               if (cur!=json[attr]) {
                sportStop=false;
               };
               // if (cur==json[attr]) {
               // 	  clearInterval(obj.timer)
               //    //如果funend函数存在就执行funend()
               //    if(fun)fun();
               // }else{
               // obj.style[attr]=cur+speed+'px'
               	  //同样去兼容透明度的问题
               	  if (attr=='opacity') {
               	  	//alpha兼容IE   opcity兼容Chrome  和 fireFox
               	  	obj.style.filter='alpha(opacity:'+(cur+speed)+')';
               	  	obj.style.opacity=(cur+speed)/100
               	  	// console.log(obj.style.opacity)
               	  }else{
               	  	obj.style[attr]=cur+speed+'px'
               	  	// console.log(obj.style[attr]);
               	  }
              } 
               if (sportStop) {
                 clearInterval(obj.timer)
                 if (fun)fun();
               };
             },30)
       }