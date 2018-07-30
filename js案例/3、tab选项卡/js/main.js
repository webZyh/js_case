window.onload=function(){
	var aLi = $("tab_header").querySelectorAll('li');
	//var aDom = $("tab_cont").querySelectorAll('.dom');
	var aDom = $("tab_cont").getElementsByClassName('dom');
	for(var i=0; i<aLi.length; i++){

		aLi[i].id = i;
		aLi[i].onmouseover = function(){
			for(var j=0; j<aLi.length; j++){
				aLi[j].className = '';
				aDom[j].style.display = 'none';
			}
			this.className = 'active';
			aDom[this.id].style.display = 'block';
            //console.log(this.id);
        }
	}
}
function $(id){
	return typeof id === 'string' ? document.getElementById(id) : null;
}