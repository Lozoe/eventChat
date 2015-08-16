var btn=document.getElementById('btn');
var text=btn.innerHTML;
var name=document.getElementById('name');
var item=document.getElementsByClassName('item');

function findName(){
	btnClass=[];
	var nameStr='';
	for(var i=0;i<item.length;i++){
	    btnClass.push(item[i].getElementsByClassName('btn')[0].className);
	    if(item[i].getElementsByClassName('btn')[0].className=='btn'){
	    	nameStr+=(item[i].getElementsByClassName('name')[0].innerHTML)+'、';
	    }
	}
	return nameStr.slice(0,nameStr.length-1);
}

for(var i=0;i<item.length;i++){
	(function(i){
		item[i].getElementsByClassName('btn')[0].onclick=function(){
			var parent=this.parentNode;
			var thisName=parent.getElementsByClassName('name')[0];	
			if(this.innerHTML=="收回邀请"){
				this.innerHTML="邀请回答";
				this.className="btn reply";
			}else{
				this.innerHTML="收回邀请";
				this.className="btn";
			}
			if(!findName()){
				document.getElementById('info').innerHTML='<span>您已邀请<label class="name" id="name">0</label>人</span>';
			}else {
				document.getElementById('info').innerHTML='<span>您已邀请<label class="name" id="name">0</label>等人</span>';
				document.getElementById('name').innerHTML=findName();
			}			
		};
	})(i);	
}