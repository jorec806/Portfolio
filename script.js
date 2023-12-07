"use strict";

const nodeListButton = document.querySelectorAll(".node");
const photoDescription = document.getElementById('photo-description');
const titleHero = document.getElementById('title-hero');

const buttonJoseinAus = document.getElementById('button-project-jose');
const buttonPokemon = document.getElementById('button-project-pokemon');

const aboutMe = document.getElementById('title-about');
const aboutMeSubtitle = document.getElementById('about-subtitle');
const aboutMeDescription = document.getElementById('about-description');

const personalProjects = document.getElementById('title-projects');
const projectCard = document.getElementById('project-card');

const technologies = document.getElementById('title-technologies');
const cardTech = document.getElementById('tech1');

const learningTech = document.getElementById('title-learning');
const react = document.getElementById('react');

photoDescription.style.backgroundImage = 'url("images/0.jpg")';
photoDescription.style.backgroundSize = 'cover';
photoDescription.style.backgroundPosition = 'center';

// Script ABOUT ME

const dogLover = {
    title : 'Dog Lover',
    script : `Meet Cleo, my beloved companion whom I welcomed into my life at the age of three in 2014. Together, we've formed an unbreakable bond, and my deep affection for her has inspired a heartfelt goal – to establish a sanctuary for lost and abandoned dogs, providing them with the love and care they deserve.`
};

const student = {
    title : 'Comp Sci Student',
    script : `Embarking on a journey to pursue a Master's Degree in Artificial Intelligence and Machine Learning next year, I'm gearing up to immerse myself in the cutting-edge realm of technology. This endeavor not only promises to equip me with a robust understanding of the latest innovations but also brings me one step closer to realizing a cherished aspiration – establishing my own tech startup.`,
};

const gamer = {
    title : 'Gamer',
    script : `Fueling my entry into the software development industry is a profound passion for video games. Having translated this enthusiasm into action, I've crafted a duo of engaging experiences – a captivating Blackjack game and an immersive Pokémon battle. Feel free to explore these creations in my Github repository and witness the fusion of my love for gaming with my burgeoning coding skills.`,
};

const manager = {
    title : 'Graduated in Administration and Management',
    script : `Armed with a Bachelor's degree in Administration and Management, my educational journey has sculpted a robust skill set encompassing leadership, problem-solving prowess, and efficient time management. Beyond these foundational qualities, I've acquired the knowledge essential for steering and orchestrating the successful establishment of my very own company.`,
};

const techEnthusiast = {
    title : 'Tech Enthusiast',
    script : 'I am fueled by a profound passion for technology, which has driven me to independently master web development. Currently, my short-term objective is to achieve mastery in the powerful three.js library, with the ultimate aim of crafting an immersive 3D web video game from scratch.',
};

///////////////////////////////////////
///////////Event Handlers//////////////
///////////////////////////////////////

const arrScripts = [dogLover,student,gamer,manager,techEnthusiast];

nodeListButton.forEach((value, index) => {
    value.addEventListener("click", ()=>{
        photoDescription.style.backgroundSize = 'cover'; 
        photoDescription.style.backgroundPosition = 'center';
        photoDescription.style.backgroundImage = `url("images/${index}.jpg")`;

        aboutMeSubtitle.textContent = arrScripts[index].title;
        aboutMeDescription.textContent = arrScripts[index].script;
    })
});

buttonJoseinAus.addEventListener('click', ()=>{
    window.location.href = 'https://www.youtube.com/@JoseenAustralia';
});

buttonPokemon.addEventListener('click', ()=>{
    window.location.href = 'https://jorec806.github.io/pokemon-battle-0.2/';
});

///////////////////////////////////////
//////////////FUNCTIONS////////////////
///////////////////////////////////////

//typewrite animation to titles

const typeWrite = function(str){
    const arr = str.textContent.split('');

    let word = '';

    arr.forEach((_, index)=> {
        setTimeout(() => {
            word = word + arr[index];
            //word = word.insertAdjacentHTML('beforeend',`<span class="bg-black">I</span>`);
            str.textContent = word;
            str.insertAdjacentHTML('beforeend',`<span class="bg-black" id="cursor${str.id}">i</span>`);

        }, 70*index);
    });

    setTimeout(() => {
        let isDisplayed = true;
        setInterval(() => {
            const cursor = document.getElementById(`cursor${str.id}`);
            if (isDisplayed){
                cursor.style.opacity= 0;
                isDisplayed = false;
            }else{
                cursor.style.opacity= 1;
                isDisplayed = true;             
            }
        }, 400);
    }, (arr.length*70)+10);

}

typeWrite(titleHero);

const viewElement = function(elementSeen, elementModified){
    // Observer function
    const callback = function(entries, observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                elementModified.style.opacity = 1;
                typeWrite(elementModified);
                observer.disconnect();
            }
        });
    }

    const options = {
        root : null,
        threshold : 0.5,
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(elementSeen);
}

viewElement(photoDescription, aboutMe);
viewElement(projectCard, personalProjects);
viewElement(cardTech, technologies);
viewElement(react, learningTech);