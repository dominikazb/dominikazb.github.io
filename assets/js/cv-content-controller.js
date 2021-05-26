'use strict';

const btnExperience = document.querySelector('#btn--experience');
const btnEducation = document.querySelector('#btn--education');
const btnCourses = document.querySelector('#btn--courses');
const btnCommunicationSkills = document.querySelector('#btn--communication-skills');
const btnPublications = document.querySelector('#btn--publications');
const btnAwardsAndScholarships = document.querySelector('#btn--awards-and-scholarships');

const sectionExperience = document.querySelector('#section--experience');
const sectionEducation = document.querySelector('#section--education');
const sectionCourses = document.querySelector('#section--courses');
const sectionCommunicationSkills = document.querySelector('#section--communication-skills');
const sectionPublications = document.querySelector('#section--publications');
const sectionAwardsAndScholarships = document.querySelector('#section--awards-and-scholarships');

btnExperience.addEventListener('click', function() {
    sectionExperience.scrollIntoView({
        behavior: 'smooth'
    });
});

btnEducation.addEventListener('click', function() {
    sectionEducation.scrollIntoView({
        behavior: 'smooth'
    });
});




const myData = JSON.parse(data);

// *************** section experience ***************
const experienceContainer = document.querySelector('#experience--line');
const experienceArr = myData[5].experience.reverse();


    experienceArr.forEach(experience => {

        const responsibilitiesArr = experience.responsibilities;
        let responsibilititesToInsert = ``;

        responsibilitiesArr.forEach(responsibility => {
            responsibilititesToInsert += `<li>${responsibility}</li>`;
        });


        const achievementsArr = experience.achievements;
        let achievementsToInsert = ``;

        achievementsArr.forEach(achievement => {
            achievementsToInsert += `<li>${achievement}</li>`;
        });

        const image = `
        <div class="centerleftalign">
            <a href="${experience.link}" target="_blank">
                <img class="seeappimage" src="${experience.image}">
            </a>
        </div>`;


        const experienceToInsert = `
        <div class="row">
            <div class="col-sm-2">
                <div class="d-flex flex-column">
                    <img class="align-self-center" src="${experience.logo}" height="50px">
                </div>
            </div>

            <div class="col-sm-10">
                <div class="row">
                    <div class="col-sm-9">
                        <div class="centerleftalign">
                            <b>${experience.position}</b>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="alignrightandcenter">
                            <p class="gray">${experience.dates}</p>
                        </div>
                    </div>
                </div>
                <div class="justify">
                    <div class="centerleftalign">
                        <p class="companyname gray">${experience.company}</p>
                    </div>
                    
                    ${experience.showProjectLink ? `<p><h4>Project: <a class="projectlink" href="${experience.link}" target="_blank">${experience.linkText}</a></h4></p>` : ""}
                    ${experience.showText1 ? `${experience.text1}<br><br>` : ""}
                    ${experience.showText2 ? `${experience.text2}<br><br>` : ""}
                    ${experience.showText3 ? `${experience.text3}<br><br>` : ""}
                    ${experience.showResponsibilities ? `<p>Responsibilities:</p><ul>${responsibilititesToInsert}</ul><br>` : ''}
                    ${experience.showAchievements ? `<p>Achievements:</p><ul>${achievementsToInsert}</ul><br>` : ''}
                    ${experience.showText4 ? `${experience.text4}<br>` : ""}
                    ${experience.showImage ? image : ''}
                    <br>
                    
                    <hr>
                    <br>
                </div>
            </div>
        </div>`;

        experienceContainer.insertAdjacentHTML('afterend', experienceToInsert);
    });



// *************** section education ***************
const educationContainer = document.querySelector('#education--line');
const educationArr = myData[0].education.reverse();

educationArr.forEach(education => {

    const educationToInsert = `
    <div class="row">
        <div class="col-sm-2">
        <div class="d-flex flex-column">
            <img class="align-self-center" src="${education.icon}" height="50px">
        </div>
        </div>
        <div class="col-sm-10">
        <div class="row">
            <div class="col-sm-9">
            <div class="centerleftalign">
                <b>${education.title}</b>
            </div>
            </div>
            <div class="col-sm-3">
            <div class="alignrightandcenter">
                ${education.timeline}
            </div>
            </div>
        </div>
        <div class="justify">
            <div class="centerleftalign">
            <p class="companyname orangedarkertitle">${education.organization}</p>
            </div>
            <p>
            ${education.description}
            ${education.linkExists ? `<a class="orangelink" href="${education.descriptionLink}">${education.descriptionLinkText}</a>` : ""}
            </p>
        </div>
        </div>
    </div>
    <div class="littlespace"></div><div class="littlespace"></div>`;

    educationContainer.insertAdjacentHTML('afterend', educationToInsert);
});


// *************** section courses ***************
const coursesContainer = document.querySelector('#courses--line');
const coursesArr = myData[1].courses.reverse();

coursesArr.forEach(course => {

    const courseToInsert = `
    <div class="row">
        <div class="col-sm-2">${course.date}</div>
        <div class="col-sm-10">
            <p>${course.name}, ${course.platform} 
                <a class="orangelinkwhitebackground" href="${course.link}" target="_blank">>>link<<</a>
                (${course.timeToComplete})
            </p>
        </div>
    </div>`;

    coursesContainer.insertAdjacentHTML('afterend', courseToInsert);
});



// *************** section communication skills ***************
const communicationSkillsContainer = document.querySelector('#communication-skills--line');
const communicationSkillsArr = myData[2].communicationSkills.reverse();

communicationSkillsArr.forEach(skill => {

    const skillToInsert = `
    <div class="row">
        <div class="col-sm-2">${skill.date}</div>
        <div class="col-sm-10">
            <p>${skill.event}<br>
            <span class="orangedarkertitle">Title: ${skill.title}</span>
            </p>
        </div>
    </div>`;

    communicationSkillsContainer.insertAdjacentHTML('afterend', skillToInsert);
});


// *************** section publications ***************
const publicationsContainer = document.querySelector('#publications--line');
const publicationsArr = myData[3].publications.reverse();

publicationsArr.forEach(publication => {

    const publicationToInsert = `
    <div class="row">
        <div class="col-sm-2">${publication.year}</div>
        <div class="col-sm-10">
            <p>${publication.authors}. ${publication.title}. ${publication.magazine}. ${publication.doi}.
            <a class="orangelinkwhitebackground" href="${publication.link}" target="_blank">»link«</a>
            </p>
        </div>
    </div>`;

    const publicationToInsertWithHighlighedAuthor = publicationToInsert.replace('Żurek-Biesiada D', '<b class="orange">Żurek-Biesiada D</b>');

    publicationsContainer.insertAdjacentHTML('afterend', publicationToInsertWithHighlighedAuthor);

});


// *************** section awards and scholarships ***************
const awardsAndScholarshipsContainer = document.querySelector('#awardsAndScholarships--line');
const awardsAndScholarshipsArr = myData[4].awardsAndScholarships.reverse();


awardsAndScholarshipsArr.forEach(award => {

    const awardToInsert = `
    <div class="row">
        <div class="col-sm-2">${award.date}</div>
        <div class="col-sm-10">
            <p>
            <b>${award.title}</b>
            <br>
                <span class="orangedarkertitle">${award.description}</span>
            </p>
        </div>
    </div>`;

    awardsAndScholarshipsContainer.insertAdjacentHTML('afterend', awardToInsert);
});