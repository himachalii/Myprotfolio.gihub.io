//header toggle

let menubtn = document.getElementById('menubtn');

menubtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});


// type Effect

let typed =  new Typed('.auto-input',
{
    strings: ['Front-End Developer!' , 'Web Developer!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true,
});

// Active link state on scroll

// get all links
let navlinks = document.querySelectorAll('nav ul li a')
// get all sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight))
        {
            navlinks.forEach(link => 
                {
                    link.classList.remove('active');
                    if(section.getAttribute('id') === link.getAttribute('href').substring(1))
                    {
                        link.classList.add('active')
                    }
                });
        }
    });
});