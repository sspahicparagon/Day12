var collection = {
    2548: {
        album: "Slippery When Wet",
        artis: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artis: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artis: "Robert Palmer",
        tracks: [ ]
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    // Only change code below this line
    if(prop == "tracks" && value != "") {
        if(object[id][prop]) {
            object[id][prop].push(value);
        }
        else {
            object[id][prop] = [];
            object[id][prop].push(value);
        }
    }
    else if(value != "") {
        object[id][prop] = value;
    }
    else {
        delete object[id][prop];
    }
    return object;
    // Only change code above this line
}

console.log(updateRecords(collection, 5439, "artis", "ABBA")); // Change this line
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));

module.exports = updateRecords;