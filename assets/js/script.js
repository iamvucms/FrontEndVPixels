//
let gender_type = 1;
$('#male').css('background','#68ff0a');
let errors = [];
function switch_gender(type){
	if(type==1){
		gender_type = 1;
		$('#male').css('background-color','#68ff0a');
		$('#female').css('background-color','black');
	}
	else if(type==2){
		gender_type = 2;
		$('#female').css('background-color','#68ff0a');
		$('#male').css('background-color','black');
	}
	
}
$('#ip_name').change(()=>{
	let patt = /[a-zA-Z ]{3,}/i;

	let name = $('#ip_name').val();
	if(!patt.test(name)){
		errors["name"] = "Name must be than 2 characters without special characters";
		$('#ip_name').css('border',"2px solid red");
		document.querySelector('#ip_name').nextElementSibling.style.display ='inline';
	}else{
		errors["name"] ="";
		$('#ip_name').css('border',"2px solid green");
		document.querySelector('#ip_name').nextElementSibling.style.display ='none';
	}
})
$('#ip_mail').change(()=>{
	let patt = /[a-zA-Z0-9_.]{3,}@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}/i;
	let name = $('#ip_mail').val();
	if(!patt.test(name)){
		errors["mail"] = "Please type email format exactly"
		$('#ip_mail').css('border',"2px solid red");
		document.querySelector('#ip_mail').nextElementSibling.style.display ='inline';
	}else{
		errors["mail"]=""
		$('#ip_mail').css('border',"2px solid green");
		document.querySelector('#ip_mail').nextElementSibling.style.display ='none';
	}
})
$('#ip_pass').change(()=>{
	let name = $('#ip_pass').val();
	if(name.length<6){

		errors["pass"] = "Password must be than 6 characters";
		$('#ip_pass').css('border',"2px solid red");
		document.querySelector('#ip_pass').nextElementSibling.style.display ='inline';
	}else{
		errors["pass"]=""
		$('#ip_pass').css('border',"2px solid green");
		document.querySelector('#ip_pass').nextElementSibling.style.display ='none';
	}
})
$('#ip_pass_re').change(()=>{
	let name = $('#ip_pass_re').val();
	if(name!==$('#ip_pass').val()){
		errors["repass"] = "Please confirm password exactly";
		$('#ip_pass_re').css('border',"2px solid red");
		document.querySelector('#ip_pass_re').nextElementSibling.style.display ='inline';
	}else{
		errors["repass"]="";
		$('#ip_pass_re').css('border',"2px solid green");
		document.querySelector('#ip_pass_re').nextElementSibling.style.display ='none';
	}
})
$('#ip_age').change(()=>{
	let name = $('#ip_age').val();
	
	if(name<=0){
		errors["age"] ="Age must be number";
		$('#ip_age').css('border',"2px solid red");
		document.querySelector('#ip_age').nextElementSibling.style.display ='inline';
	}else{
		errors["age"]=""
		$('#ip_age').css('border',"2px solid green");
		document.querySelector('#ip_age').nextElementSibling.style.display ='none';
	}
})
$('#name_error').mouseover(()=>{
	$('#name_info').css('display','inline');
})
$('#name_error').mouseout(()=>{
	$('#name_info').css('display','none');
})

var error_list = document.querySelectorAll('#name_error')
console.log(error_list)
for (let x of error_list){
	x.onmouseover = ()=>{
		x.nextElementSibling.style.display = 'inline';
	}
	x.onmouseout = ()=>{
		x.nextElementSibling.style.display = 'none';
	}
}
$('#signupbtn').click(()=>{
	let name = $('#ip_age').val();
	console.log(name)
	if(name<=0){
		errors["age"] ="Age must be number";
		$('#ip_age').css('border',"2px solid red");
		document.querySelector('#ip_age').nextElementSibling.style.display ='inline';
	}else{
		errors["age"]=""
		$('#ip_age').css('border',"2px solid green");
		document.querySelector('#ip_age').nextElementSibling.style.display ='none';
	}
	check = true;
	
	for (let x in errors){
		if(errors[x].length>0){
			check = false;
			break;
		}
		
	}
	if(check){
		swal("Success!", "Sign Up Successfully", "success");
		setTimeout(()=>{
			window.location.href = 'index.html'
		},1000)		
	}else{
		let err_texts = "";
		for (let x in errors){
		if(errors[x].length>0){
			err_texts+="\n- "+errors[x]+'	';
		}
		swal("Error!", "Sign Up Failed\n"+err_texts, "error");
	}
	}
})
$('#loginbtn').click(()=>{
	check = true;
	
	for (let x in errors){
		if(errors[x].length>0){
			check = false;
			break;
		}
		
	}
	if(check){
		swal("Success!", "Sign In Successfully", "success");
		setTimeout(()=>{
			window.location.href = 'index.html'
		},1000)	
	}else{
		let err_texts = "";
		for (let x in errors){
		if(errors[x].length>0){
			err_texts+="\n- "+errors[x]+'	';
		}
		swal("Error!", "Sign In Failed\n"+err_texts, "error");
	}
	}
})

//INDEX.JS
var scroll = $(window).scrollTop();
    if(window.location.href.indexOf('index.html')>-1){
    	if(scroll>200) {
        $('.ip_search2').css('width','550px');
        $('.ip_search2').css('height','40px');
        $('.menu').css('background-color','#232a34');
    } else {
        $('.ip_search2').css('width','0');
        $('.ip_search2').css('height','0');
        $('.menu').css('background-color','transparent');
         
    }
    }
    //pre check position
$(window).scroll(function() {
	
    var scroll = $(window).scrollTop();
    if(window.location.href.indexOf('index.html')>-1 ){
    	if(scroll>200) {
        $('.ip_search2').css('width','550px');
        $('.ip_search2').css('height','40px');
        $('.menu').css('background-color','#232a34');
    } else {
        $('.ip_search2').css('width','0');
        $('.ip_search2').css('height','0');
        $('.menu').css('background-color','transparent');
         
    }
    }
    
    
});
$('#trending').click(()=>{
	$('#trending').addClass('category_active');
	$('#new').removeClass('category_active');
})
$('#new').click(()=>{
	$('#new').addClass('category_active');
	$('#trending').removeClass('category_active');
})
let alist = document.querySelectorAll('.gallery a');

for(let x in alist){
	alist[x].onclick = ()=>{
		window.location.href = 'detail.html'+'#'+alist[x].children[0].currentSrc
		if(window.location.href.indexOf('detail.html')>-1) location.reload()
	}
	alist[x].onmouseover = ()=>{
		alist[x].children[1].style.display = 'inline-block';
	}
	alist[x].onmouseout = ()=>{
		alist[x].children[1].style.display = 'none';
	}
}
//DETAIL.JS
var body = $("html, body");
if(window.location.href.indexOf('detail.html')>-1) body.stop().animate({scrollTop:0}, 500, 'swing', function() {});
let src = window.location.href.split('#').pop()
console.log(src)
if(src.indexOf('detail.html')>-1 && window.location.href.indexOf('detail.html')>-1) window.location.href = 'index.html';
//PROFILE.JS
$('.status').click(()=>{
	if($('.status').html()=='Following') $('.status').html('Follow')
	else if($('.status').html()=='Follow') $('.status').html('Following')
})