console.log("This will test string.replace with {n, m} regexp patterns.");
"YY".replace(/Y{1,4}/g, "YYYY");
"MM".replace(/M{1,2}/g, "M");
"YY".replace(/Y{1,4}/g, "MMMM");
