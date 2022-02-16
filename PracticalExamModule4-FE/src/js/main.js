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
                str += `<td>${data[i].nameCity}</td>`
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