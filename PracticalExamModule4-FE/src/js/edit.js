$(document).ready(function () {
    selectCategory()
})

//Get cai id tren url
let url_string = window.location.href;
let url = new URL(url_string);
let id = url.searchParams.get("id");
showEdit()

function showEdit() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/city/" + id,
        //xử lý khi thành công
        success: function (data) {
            document.getElementById("id").value = data.id;
            document.getElementById("name").value = data.nameCity;
            selectCategory()
            document.getElementById("area").value = data.area;
            document.getElementById("population").value = data.population;
            document.getElementById("gdp").value = data.gdp;
            document.getElementById("description").value = data.description;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function editCity() {
    let city = {
        id : document.getElementById("id").value,
        nameCity : document.getElementById("name").value,
        country : {id : document.getElementById("idCountries").value},
        area : document.getElementById("area").value,
        population : document.getElementById("population").value,
        gdp : document.getElementById("gdp").value,
        description : document.getElementById("description").value,
    }

    $.ajax({
        type: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/city/" + city.id,
        data: JSON.stringify(city),
        //Xử lý thành công
        success: function () {
            showCity()
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function selectCategory() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/city/countries",
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += `<option value="${data[i].id}">${data[i].nameCountry}</option>`
            }
            document.getElementById("idCountries").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
