$(document).ready(function () {
    selectCategory()
})

function createCity() {
    let customer = {
        nameCity : document.getElementById("name").value,
        country : {id : document.getElementById("idCountries").value},
        area : document.getElementById("area").value,
        population : document.getElementById("population").value,
        gdp : document.getElementById("gdp").value,
        description : document.getElementById("description").value
    }

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/city",
        data: JSON.stringify(customer),
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
