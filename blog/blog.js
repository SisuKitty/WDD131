const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
];

const date = document.querySelector(".date");
const ages = document.querySelector(".age_range");
const genre = document.querySelector(".genre");
const stars = document.querySelector(".rating");

date.textContent = articles[0].date;
ages.textContent = articles[0].ages;
genre.textContent = articles[0].genre;
stars.textContent = articles[0].stars;

const title = document.querySelector(".title");
const cover = document.querySelector(".cover");
const desc = document.querySelector(".description");

title.textContent = articles[0].title;
cover.setAttribute("src", articles[0].imgSrc);
desc.textContent = articles[0].description;

// for (let book=0; book < 2; book++) {
//     const date = document.querySelector(".date");
//     const ages = document.querySelector(".age_range");
//     const genre = document.querySelector(".genre");
//     const stars = document.querySelector(".rating");

//     date.textContent = book[i].date;
//     ages.textContent = book[i].ages;
//     genre.textContent = book[i].genre;
//     stars.textContent = book[i].stars;

//     const title = document.querySelector(".title");
//     const cover = document.querySelector(".cover");
//     const desc = document.querySelector(".description");

//     title.textContent = book[i].title;
//     cover.setAttribute("src", book[i].imgSrc);
//     desc.textContent = book[i].description;
// }