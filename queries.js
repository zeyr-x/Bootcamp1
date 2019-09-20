/* Add all the required libraries*/

var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/

mongoose.connect(config.db.uri, { useNewUrlParser: true });

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

   Listing.find({name: 'Library West'}, function(err, result) {
     if(err) {
      throw err;
     }
     console.log(result);
   });
   

};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   
    // delete doc
    Listing.findOneAndRemove({code: 'CABL'}, function(err, result) {
    if(err) {
      console.log('\nentry not found\n');
     }

     console.log('\ndeleted the CABL entry\n');
    });

  
};

var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

  Listing.updateOne({name: 'Phelps Laboratory'}, 
      {address: '1953 Museum Rd, Gainesville, FL 32603, USA'}, 
      function(err, result) {
        if(err) {
          throw err;
        } 
        //log correct doc 
        Listing.find({name: 'Phelps Laboratory'}, function(err, result2) {
          if(err) {
           throw err;
          }
          console.log(result2);
        });
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, result) {
    if(err) {
     throw err;
    }
    console.log(result);
  });
   
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();