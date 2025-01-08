const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const Sectionspg = document.querySelectorAll('section');
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

const activepg = () => {
    navlinks.forEach(link => {
        link.classList.remove('active');
    });

    Sectionspg.forEach(section => {
        section.classList.remove('active');
    });

    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


navlinks.forEach((link,idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')){
            activepg();
        }
            link.classList.add('active');
            
             Sectionspg[idx].classList.add('active');
    });
});


logolink.addEventListener('click', () => {
    if(!navlinks[0].classList.contains('active')){
        activepg();

        navlinks[0].classList.add('active');

        Sectionspg[0].classList.add('active');
    }
});

const resumebtns = document.querySelectorAll('.resume-btn');

resumebtns.forEach((btn, idx) => {
    btn.addEventListener('click',() => {
        const resumedetails = document.querySelectorAll('.resume-detail');

        resumebtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetails.forEach((detail => {
            detail.classList.remove('active');
        }))
        resumedetails[idx].classList.add('active');
    });
});

const arright = document.querySelector('.pf-box .navi .ar-right');
const arleft = document.querySelector('.pf-box .navi .ar-left');

let index = 0;

const activepf = () =>{
    const imgslide= document.querySelector('.pf-carousal .img-slide');
    const pfdetails = document.querySelectorAll('.pf-detail')
    
    imgslide.style.transform= `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    pfdetails.forEach(detail => {
        detail.classList.remove('active');
    });
    pfdetails[index].classList.add('active');
}

arright.addEventListener('click', ()=> {
    if(index < 2){
        index++;
        arleft.classList.remove('disabled');
    }
    else{
        index = 3;
        arright.classList.add('disabled');
    }

    activepf();
});

arleft.addEventListener('click', ()=> {
    if(index > 1){
        index--;
        arright.classList.remove('disabled');
    }
    else{
        index = 0;
        arleft.classList.add('disabled');
    }

    activepf();
});
