document.addEventListener("DOMContentLoaded",function(){const b=document.querySelectorAll(".popup-btn");const a=document.querySelectorAll(".popup");b.forEach(function(d){d.addEventListener("click",function(){const f=this.getAttribute("data-popup");const e=document.getElementById(f);c(e,this)})});function c(d,e){if(d.style.display==="none"||d.style.display===""){d.style.display="block";e.classList.add("active")}else{d.style.display="none";e.classList.remove("active")}}a.forEach(function(d){d.addEventListener("click",function(e){e.stopPropagation()});d.querySelectorAll("*").forEach(function(e){e.addEventListener("copy",function(f){f.preventDefault()})});document.addEventListener("click",function(f){const e=document.querySelectorAll(".popup.active");e.forEach(function(g){if(f.target!==g&&!g.contains(f.target)){g.style.display="none";const h=document.querySelector('.popup-btn.active[data-popup="'+g.id+'"]');if(h){h.classList.remove("active")}}})})})});