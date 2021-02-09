'use strict';


const myData = JSON.parse(data);

const publicationsArr = myData[3].publications.reverse();

// *************** SCIENCE TAB ***************

const publicationsDiv = document.querySelector('#publications--input');

publicationsArr.forEach(publication => {

    const publicationParagraph = `
    <p class="smalltext">
        ${publication.authors}. ${publication.title}. ${publication.magazine}. ${publication.doi}.
        <a class="whitelink" href="${publication.link}" target="_blank">(link)</a>
    </p>
    `;

    const publicationParagraphWithHiglightedAuthor = publicationParagraph.replace('Żurek-Biesiada D', '<b class="orange">Żurek-Biesiada D</b>');
    publicationsDiv.insertAdjacentHTML('afterend', publicationParagraphWithHiglightedAuthor);
});