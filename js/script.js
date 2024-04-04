document.getElementById('btnSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        document.getElementById('switch-mode').setAttribute('class','bi bi-brightness-high-fill');
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        document.getElementById('switch-mode').setAttribute('class','bi bi-moon-stars-fill');
    }
})


/*
document.addEventListener("keydown", e=>{
    e.preventDefault();
    
    if(e.key.toLowerCase()==="k" && e.ctrlKey){
        document.
    }
});

*/