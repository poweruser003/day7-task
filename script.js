// 1)a. Get all the countries from Asia continent/region using filter function

var request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
    var res = JSON.parse(request.response)
    console.log(res)
    var region=res.filter((ele)=>ele.region=='Asia')
    var countries=region.map((ele)=>ele.name.common)
    console.log(countries)

// b. Get the all the countries with the population of less than 2 lakhs using filter function


    var population=res.filter((ele)=>ele.population<200000)
    var countries=population.map((ele)=>ele.name.common)
    console.log(countries)

// c. Print the following details name, capital, flag using foreach function

res.forEach((ele)=>console.log(ele.name.common,ele.flag,ele.capital))

//d. Print the total population of countries using reduce function

var population=res.map((ele)=>ele.population)
var totalpopulation=population.reduce((acc,cv)=>acc+cv,0)
console.log(totalpopulation)
}

// e. Print the country that uses US dollars as currency

var request=new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=function(){
    var res = JSON.parse(request.response)
    var currency_data=res.filter((ele)=>ele.currencies[0].code=="USD")
    var USDCountries=currency_data.map((ele)=>ele.name)
    console.log(USDCountries)
}





