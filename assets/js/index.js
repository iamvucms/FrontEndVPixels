var scroll = $(window).scrollTop();
    if(window.location.href.indexOf('index.html')>-1){
    	if(scroll>200) {
        $('.ip_search2').css('width','550px');
        $('.ip_search2').css('height','40px');
        $('.menu').css('background-color','#081929');
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
        $('.menu').css('background-color','#081929');
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
		alist[x].children[1].style.display = 'flex';
	}
	alist[x].onmouseout = ()=>{
		alist[x].children[1].style.display = 'none';
	}
}
var bannerbackground = ["https://images.pexels.com/photos/2170233/pexels-photo-2170233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2228123/pexels-photo-2228123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2258534/pexels-photo-2258534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/206673/pexels-photo-206673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"http://www.technocrazed.com/wp-content/uploads/2015/12/city-wallpaper-34.jpg"]
var ibanner = 0;
setInterval(() => {
          if(ibanner >= bannerbackground.length) ibanner =0;
          $('.banner').css('background-image','url('+bannerbackground[ibanner]+')')
          ibanner++;
}, 4000);