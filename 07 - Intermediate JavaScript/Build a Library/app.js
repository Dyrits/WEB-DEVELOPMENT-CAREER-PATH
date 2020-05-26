class Media {
  constructor(title, isCheckedOut = false, ratings = []) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }

  get title() { return this._title; }
  get isCheckedOut() { return this._isCheckedOut; }
  get ratings() { return this._ratings; }

  set isCheckedOut(trueOrFalse) { this._isCheckedOut = trueOrFalse; }

  toggleCheckOutStatus() {
    this._isCheckedOut ? this.isCheckedOut = false : this.isCheckedOut = true;
  }

  getAverageRating() {
    return this._ratings.reduce((average, rating) => {
      return average + rating / this.ratings.length;
    }, 0)
  }

  addRating(rating) { this.ratings.push(rating); }
}

class Book extends Media { 
  constructor(author, title, pages, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings)
    this._author = author;
    this._pages = pages;
  }

  get author() { return this._author; }
  get pages() { return this._pages; }
}

class Movie extends Media {
  constructor(director, title, runTime, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings)
    this._director = director;
    this._runTime = runTime;
  }

  get director() { return this._director; }
  get runTime() { return this._runTime; }
}

class CD extends Media {
  constructor(artist, title, songs, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings)
    this._artist = artist;
    this._songs = songs;
  }

  get artist() { return this._artist; }
  get songs() { return this._songs; }
}

const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating())
