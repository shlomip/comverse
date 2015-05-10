hamburger = 0;
searcher = 0;
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


document.querySelector(".mobile-search").addEventListener("click",function(){
	
	if(searcher)
	{
		document.querySelector(".mobile-form").style.display= "none";
		searcher = 0;
	}
	else
	{
		document.querySelector(".mobile-form").style.display = "block";
		searcher= 1;
	}
});
