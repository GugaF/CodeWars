// https://www.codewars.com/kata/6089c7992df556001253ba7d
// 7 Kyu - What a "Classy" Song

// Your job is to create a class called Song.
// A new Song will take two parameters, title and artist.

// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
// mountMoose.title => 'Mount Moose'
// mountMoose.artist => 'The Snazzy Moose'

// You will also have to create an instance method named howMany().
// The method takes an array of people who have listened to the song that day. 
// The output should be how many new listeners the song gained on that day out 
// of all listeners. Names should be treated in a case-insensitive manner, 
// i.e. "John" is the same as "john".

// Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1 (or test 1)
// mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// These are all new since they are the first listeners.

// day 2
// mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// Luke and Amanda are new, john already listened to it the previous day

// Also if the same person listened to it more than once a day it should only 
// count them once.

// Example
// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
// day 1
// mountMoose.howMany(['John', 'joHN', 'carl']); => 2

class Song{
    constructor(title, artist) {
        this.title = title;
        this.artist = artist
        this.listeners = []
    }

    howMany(todaysListens) {      
        // make all names lower case, keep unique values
        todaysListeners = [...new Set(todaysListeners.map(name => name.toLowerCase()))]
        // remove listeners already in list
        todaysListeners = todaysListeners.filter(e => !this.listeners.includes(e))
        // add new listeners to the list, return the count
        this.listeners += todaysListens
        return todaysListens.length;
    }
}


const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1
console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']), 5);
// day 2
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']), 2);
// day 3
console.log(mountMoose.howMany(['John', 'joHN', 'carl']), 0);
// day 4
console.log(mountMoose.howMany(['ray', 'RAy']), 1);