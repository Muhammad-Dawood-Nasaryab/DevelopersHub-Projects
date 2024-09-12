const skills = document.querySelectorAll('.skill');
const skillSelectors = document.querySelectorAll('.skills-list h2');

const eduButton = document.querySelector('.education-button');
const eduContent = document.querySelector('.education');
const skillButton = document.querySelector('.skills-button');
const skillsContent = document.querySelector('.skills');

const contactForm = document.querySelector('.contact-form');
const nameFeild = document.querySelector('.contact-form #name');
const emailFeild = document.querySelector('.contact-form #email');
const messageFeild = document.querySelector('.contact-form #message');
const submitButton = document.querySelector('#submit-form');

const hamburger = document.querySelector('header nav .hamburger');
const dropdownMenu = document.querySelector('header nav .nav-menu');

// This code enables to toggle between different skills

function showSkill(title) {
    skills.forEach(skill => {
        skill.style.display = 'none';
    });
    document.querySelector(`.skills-description #${title}`).style.display = 'block';
};

skillSelectors.forEach(skillSelector => {
    skillSelector.addEventListener('click', function() {
        skillSelectors.forEach(selector => selector.classList.remove('active-skill'));
        showSkill(this.dataset.title);
        this.classList.add('active-skill');
    });
});

skills.forEach(skill => skill.style.display = 'none');
document.querySelector('.skills-description #html').style.display = 'block';
document.querySelector('.skills-list h2').classList.add('active-skill');

// This code toggles between skills and education section

skillsContent.style.display = 'none';

skillButton.addEventListener('click', () => {
    skillsContent.style.display = 'block';
    skillButton.classList.add('active');
    eduContent.style.display = 'none';
    eduButton.classList.remove('active');
    scrollTo(0, 650)
});

eduButton.addEventListener('click', () => {
    eduContent.style.display = 'block';
    eduButton.classList.add('active');
    skillsContent.style.display = 'none';
    skillButton.classList.remove('active');
    scrollTo(0, 650)
});

// This code will prevent form from being submitted if fields are empty

submitButton.disabled = true;

contactForm.addEventListener('keyup', () => {
    if ((nameFeild !== "") && (emailFeild !== "") && (messageFeild !== "")) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    };
});

submitButton.addEventListener('click', () => {
    if (!submitButton.disabled) {
        nameFeild.value = "";
        emailFeild.value = "";
        messageFeild.value = "";
    };
});

// This code shows dropdown on hamburger icon when clicked

hamburger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});
