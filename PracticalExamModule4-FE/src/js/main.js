$(document).ready(function () {
    showCity();
})

function showCity() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/city",
        //xử lý khi thành công
        success: function (data) {
            let str = "";

            for (let i = 0; i < data.length; i++) {
                str += "<tr>"
                str += `<td>${data[i].id}</td>`
                str += `<td><a href="cityDetail.html?id=${data[i].id}">${data[i].nameCity}</td></a>`
                str += `<td>${data[i].country.nameCountry}</td>`
                str += `<td><a class="btn btn-sm btn-outline-secondary badge" href="editCity.html?id=${data[i].id}">Edit</a>
                                <button onclick="modalDelete(${data[i].id})" class="btn btn-sm btn-outline-secondary badge"
                                                            type="button"  data-toggle="modal" data-target="#exampleModal"><i class="fa fa-trash"></i></button></td>`
                str += "</tr>"
            }
            document.getElementById("tbody").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function modalDelete(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/city/" + id,
        //xử lý khi thành công
        success: function (data) {
            document.getElementById("id").value = data.id;
            document.getElementById("name").value = data.nameCity;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function deleteCity() {
    let id = document.getElementById("id").value;

    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/city/${id}`,
        //Xử lý thành công
        success: function () {
            showCity()
        },
        error: function (err) {
            console.log(err)
        }
    })
}

//Get cai id tren url
let url_string = window.location.href;
let url = new URL(url_string);
let id = url.searchParams.get("id");
cityDetail()

function cityDetail() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/city/" + id,
        //xử lý khi thành công
        success: function (data) {
            document.getElementById("id").value = data.id;
            document.getElementById("name").value = data.nameCity;
            document.getElementById("nameCity").innerText = data.nameCity;
            document.getElementById("idCountries").innerText = data.country.nameCountry;
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