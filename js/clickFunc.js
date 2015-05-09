hamburger = 0;
document.querySelector(".mobile-menu").addEventListener("click",function(){
	
	if(hamburger)
	{
		document.querySelector(".ham_menu").style.display= "none";
		hamburger = 0;
	}
	else
	{
		document.querySelector(".ham_menu").style.display = "block";
		hamburger = 1;
	}
});

search = 0;
document.querySelector(".mobile-menu").addEventListener("click",function(){
	
	if(search)
	{
		document.querySelector(".mobile-search").style.display= "none";
		hamburger = 0;
	}
	else
	{
		document.querySelector(".mobile-search").style.display = "block";
		search= 1;
	}
});