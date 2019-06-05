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
	let patt = /[a-zA-Z ]{1,}/i;

	let name = $('#ip_name').val();
	if(!patt.test(name)){
		errors["name"] = "Name must be than 1 characters without special characters";
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
	let patt = /[^\s]{6,}/i;
	let name = $('#ip_pass').val();
	if(!patt.test(name)){

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
           patt = /[a-zA-Z ]{1,}/i;

	 name = $('#ip_name').val();
	if(!patt.test(name)){
		errors["name"] = "Name must be than 1 characters without special characters";
		$('#ip_name').css('border',"2px solid red");
		document.querySelector('#ip_name').nextElementSibling.style.display ='inline';
	}else{
		errors["name"] ="";
		$('#ip_name').css('border',"2px solid green");
		document.querySelector('#ip_name').nextElementSibling.style.display ='none';
          }
          //
           patt = /[^\s]{6,}/i;
	 name = $('#ip_pass').val();
	if(!patt.test(name)){

		errors["pass"] = "Password must be than 6 characters";
		$('#ip_pass').css('border',"2px solid red");
		document.querySelector('#ip_pass').nextElementSibling.style.display ='inline';
	}else{
		errors["pass"]=""
		$('#ip_pass').css('border',"2px solid green");
		document.querySelector('#ip_pass').nextElementSibling.style.display ='none';
          }
          name = $('#ip_pass_re').val();
	if(name!==$('#ip_pass').val() || name == ""){
		errors["repass"] = "Please confirm password exactly";
		$('#ip_pass_re').css('border',"2px solid red");
		document.querySelector('#ip_pass_re').nextElementSibling.style.display ='inline';
	}else{
		errors["repass"]="";
		$('#ip_pass_re').css('border',"2px solid green");
		document.querySelector('#ip_pass_re').nextElementSibling.style.display ='none';
	}
          //
           patt = /[a-zA-Z0-9_.]{3,}@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}/i;
	 name = $('#ip_mail').val();
	if(!patt.test(name)){
		errors["mail"] = "Please type email format exactly"
		$('#ip_mail').css('border',"2px solid red");
		document.querySelector('#ip_mail').nextElementSibling.style.display ='inline';
	}else{
		errors["mail"]=""
		$('#ip_mail').css('border',"2px solid green");
		document.querySelector('#ip_mail').nextElementSibling.style.display ='none';
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
	patt = /[a-zA-Z0-9_.]{3,}@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}/i;
	 name = $('#ip_mail').val();
	if(!patt.test(name)){
		errors["mail"] = "Please type email format exactly"
		$('#ip_mail').css('border',"2px solid red");
		document.querySelector('#ip_mail').nextElementSibling.style.display ='inline';
	}else{
		errors["mail"]=""
		$('#ip_mail').css('border',"2px solid green");
		document.querySelector('#ip_mail').nextElementSibling.style.display ='none';
	}
	 patt = /[^\s]{6,}/i;
	 name = $('#ip_pass').val();
	if(!patt.test(name) || name.length ==0){

		errors["pass"] = "Password must be than 6 characters";
		$('#ip_pass').css('border',"2px solid red");
		document.querySelector('#ip_pass').nextElementSibling.style.display ='inline';
	}else{
		errors["pass"]=""
		$('#ip_pass').css('border',"2px solid green");
		document.querySelector('#ip_pass').nextElementSibling.style.display ='none';
          }
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