import { getSearchedCountry } from './endpoints/getSearchedCountry';
import {app} from './app'
import { getAllCountries } from './endpoints/getAllCountries'
import { getCountryById } from './endpoints/getCountryById'

app.get('/countries', getAllCountries)
// app.get('/countries/:id', getCountryById)
app.get('/countries/search', getSearchedCountry)