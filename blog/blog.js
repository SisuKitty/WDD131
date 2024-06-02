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
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

function formatBooks(book) {
	const bookElement = document.createElement("div");
	const bookHtml = 
	`<div class="review_details">
		<section class="date">${book.date}</section>
		<section class="age_range">${book.ages}</section>
		<section class="genre">${book.genre}</section>
		<section class="rating">${book.stars}</section>
	</div>
	<div class="book_details">
		<section class="title">${book.title}</section>
		<img class="cover" src="${book.imgSrc}"/>
		<section class="description">${book.description}</section>
	</div>`;
	bookElement.innerHTML = bookHtml;
	bookElement.classList.add("book");
	document.querySelector(".results").appendChild(bookElement);
};

const bookList = articles.map(formatBooks);

// function formatBooks(book) {
// const date = document.querySelector(".date");
// const ages = document.querySelector(".age_range");
// const genre = document.querySelector(".genre");
// const stars = document.querySelector(".rating");

// date.textContent =  `<article>${book.date}</article>`;
// ages.textContent = `${book.ages}`;
// genre.textContent = `${book.genre}`;
// stars.textContent = `${book.stars}`;

// const title = document.querySelector(".title");
// const cover = document.querySelector(".cover");
// const desc = document.querySelector(".description");

// title.textContent = `${book.title}`;
// cover.setAttribute("src", articles[0].imgSrc);
// desc.textContent = `${book.description}`;
// }

// document.querySelector("#results").innerHTML = bookList.join()


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