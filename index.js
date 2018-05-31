var ed_content = document.getElementById("ed_content"),
    ed = document.getElementById("education"),
    exit = document.getElementById("exit"),
    experience = document.getElementById('experience'),
    ex_content=document.getElementById('ex_content'),
    exit2 = document.getElementById("exit2"),
    skills = document.getElementById('skills'),
    volunteer = document.getElementById('volunteer'),
    skill_content= document.getElementById('skill_content'),
    vol_content = document.getElementById('vol_content'),
    exit3 = document.getElementById('exit3'),
    exit4 = document.getElementById('exit4'),
    resume_l =document.getElementById('resume_l'),
    cover_l=document.getElementById('cover_l'),
    resume = document.getElementById('resume'),
    cover_letter = document.getElementById('cover_letter'),
    footer = document.getElementById('footer'),
    h3 = document.getElementById('h3');

resume_l.addEventListener('click',function(){
	resume.style.display="block";
	cover_letter.style.display = "none";
	footer.style.top= "1450px";
	h3.style.display="block";
	footer.style.opacity = 1;
})

cover_l.addEventListener('click',function(){
	cover_letter.style.display="block";
	resume.style.display = "none";
	footer.style.top = "0px";
	h3.style.display = "none";
	footer.style.opacity = 0.5;
})


ed.addEventListener('click',function(){
	ed_content.style.display="block";
	ed.style.backgroundImage="url('imgs/bg6.jpg')";
	ed.style.overflow="scroll";
	document.getElementById("heading1").style.display="none";
	ed.style.opacity = 1;
	
});

experience.addEventListener('click',function(){
	ex_content.style.display="block";
	experience.style.backgroundImage="url('imgs/bg6.jpg')";
	document.getElementById('heading2').style.display="none";
	experience.style.opacity = 1;
	
})


skills.addEventListener('click',function(){
	skill_content.style.display="block";
	skills.style.backgroundImage="url('imgs/bg6.jpg')";
	document.getElementById('heading3').style.display="none";
	skills.style.opacity = 1;
	
});

volunteer.addEventListener('click',function(){
	vol_content.style.display="block";
	volunteer.style.backgroundImage="url('imgs/bg6.jpg')";
	document.getElementById('heading4').style.display="none";
	volunteer.style.opacity = 1;
	
})

exit.addEventListener('click',function(){
	ed.style.backgroundImage="url('imgs/bg1.jpg')";
	ed_content.style.backgroundImage = "url('imgs/bg1.jpg')";

});