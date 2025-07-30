const apiRes = {
  books: [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fiction",
      year_published: 2020,
      rating: 4.3,
    },
    {
      title: "Educated",
      author: "Tara Westover",
      genre: "Memoir",
      year_published: 2018,
      rating: 4.5,
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Thriller",
      year_published: 2019,
      rating: 4.1,
    },
    {
      title: "Normal People",
      author: "Sally Rooney",
      genre: "Fiction",
      year_published: 2018,
      rating: 4.0,
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Mystery",
      year_published: 2018,
      rating: 4.6,
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      genre: "Memoir",
      year_published: 2018,
      rating: 4.8,
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      genre: "Fantasy",
      year_published: 2018,
      rating: 4.4,
    },
    {
      title: "The Vanishing Half",
      author: "Brit Bennett",
      genre: "Fiction",
      year_published: 2020,
      rating: 4.2,
    },
    {
      title: "The Testaments",
      author: "Margaret Atwood",
      genre: "Dystopian",
      year_published: 2019,
      rating: 4.0,
    },
    {
      title: "The Guest List",
      author: "Lucy Foley",
      genre: "Mystery",
      year_published: 2020,
      rating: 4.2,
    },
    {
      title: "The Water Dancer",
      author: "Ta-Nehisi Coates",
      genre: "Historical Fiction",
      year_published: 2019,
      rating: 4.1,
    },
    {
      title: "The Glass Hotel",
      author: "Emily St. John Mandel",
      genre: "Fiction",
      year_published: 2020,
      rating: 4.0,
    },
    {
      title: "Such a Fun Age",
      author: "Kiley Reid",
      genre: "Contemporary Fiction",
      year_published: 2019,
      rating: 4.3,
    },
    {
      title: "The Dutch House",
      author: "Ann Patchett",
      genre: "Fiction",
      year_published: 2019,
      rating: 4.0,
    },
    {
      title: "The Underground Railroad",
      author: "Colson Whitehead",
      genre: "Historical Fiction",
      year_published: 2016,
      rating: 4.5,
    },
    {
      title: "Where'd You Go, Bernadette",
      author: "Maria Semple",
      genre: "Humor",
      year_published: 2012,
      rating: 3.9,
    },
    {
      title: "Little Fires Everywhere",
      author: "Celeste Ng",
      genre: "Fiction",
      year_published: 2017,
      rating: 4.1,
    },
    {
      title: "City of Girls",
      author: "Elizabeth Gilbert",
      genre: "Historical Fiction",
      year_published: 2019,
      rating: 4.0,
    },
    {
      title: "The Night Circus",
      author: "Erin Morgenstern",
      genre: "Fantasy",
      year_published: 2011,
      rating: 4.2,
    },
    {
      title: "The Power",
      author: "Naomi Alderman",
      genre: "Dystopian",
      year_published: 2016,
      rating: 3.8,
    },
    {
      title: "Station Eleven",
      author: "Emily St. John Mandel",
      genre: "Science Fiction",
      year_published: 2014,
      rating: 4.3,
    },
    {
      title: "The Goldfinch",
      author: "Donna Tartt",
      genre: "Fiction",
      year_published: 2013,
      rating: 4.0,
    },
    {
      title: "Eleanor Oliphant Is Completely Fine",
      author: "Gail Honeyman",
      genre: "Fiction",
      year_published: 2017,
      rating: 4.2,
    },
    {
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      genre: "Mystery",
      year_published: 2015,
      rating: 4.0,
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      genre: "Mystery",
      year_published: 2012,
      rating: 4.1,
    },
    {
      title: "The Martian",
      author: "Andy Weir",
      genre: "Science Fiction",
      year_published: 2011,
      rating: 4.3,
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Science Fiction",
      year_published: 2008,
      rating: 4.3,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      year_published: 1960,
      rating: 4.3,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year_published: 1949,
      rating: 4.5,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Classic",
      year_published: 1813,
      rating: 4.4,
    },
  ],
};

const rawData = apiRes.books;
const filterForm = document.getElementById("filterForm");
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const author = document.getElementById("author");
const year = document.getElementById("year");
const filteredResults = document.getElementById("filteredResults");

function displayData(newRawData) {
  filteredResults.innerHTML = "";

  newRawData.forEach((element) => {
    let newElem = document.createElement("div");
    newElem.classList.add("books");

    newElem.innerHTML = `<h4>${element.title}</h4>
    <p>${element.author}</p>
    <p>genre: ${element.genre}</p>
    <p>Published in ${element.year_published}</p>
    <span>Rating: ${element.rating}</span>`;

    filteredResults.appendChild(newElem);
  });
}

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let titleVal = title.value.toLowerCase();
  let genreVal = genre.value;
  let authorVal = author.value.toLowerCase();
  let yearVal = year.value;

  let returnData = [];

  if (titleVal) {
    returnData.push(
      ...rawData.filter((book) => book.title.toLowerCase().includes(titleVal))
    );
  }
  if (authorVal) {
    returnData.push(
      ...rawData.filter((book) => book.author.toLowerCase().includes(authorVal))
    );
  }
  if (genreVal) {
    returnData.push(...rawData.filter((book) => book.genre.includes(genreVal)));
  }
  if (yearVal) {
    returnData.push(
      ...rawData.filter((book) => book.year_published === yearVal)
    );
  }

  if (returnData.length == 0) {
    displayData(rawData);
  } else {
    displayData(returnData);
  }
});

displayData(rawData);
