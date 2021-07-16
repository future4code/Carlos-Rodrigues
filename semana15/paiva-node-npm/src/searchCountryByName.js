const countries = require("./countries")

const query = process.argv[2].toLowerCase()

const result = countries.filter(
   country => country
      .name
      .toLowerCase()
      .includes(query)
)

console.table(result)