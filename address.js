var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Edwards",
        number: "(978) 555-1212",
        address: ["35 Maple Drive", "Middleboro", "MA"]
    },
    steve: {
        firstName: "Steve",
        lastName: "Shuman",
        number: "(410) 555-1213",
        address: ["1010 West Road", "Providence", "RI"]
    
    },
    marik: {
        firstName: "Marik",
        lastName: "Ishtar",
        number: "(212) 555-1214",
        address: ["Underground Facility", "Giza", "Egypt"]
    
    },
    bakura: {
        firstName: "Yami",
        lastName: "Bakura",
        number: "(781) 555-1212",
        address: ["Secret Hideaway", "Melrose", "MA"]
    
    },
    janice: {
        firstName: "Janice",
        lastName: "Reynolds",
        number: "(617) 555-1234",
        address: ["187 Central Street", "Somerville", "MA"]
    }
};

var list = function(friends){
    for (var key in friends){
        console.log(key);
    }
};

var search = function(name){
    for (var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
    
    }
};

var printBook = function(friends){
  for (var key in friends){
  console.log("First Name: ");
  console.log(key[firstName]);
  }  
};