const btn = document.querySelector(".btn");

btn.onclick = function () {
    let colors = document.querySelectorAll('.subjects .subject input[type="color"]');
    let checkboxes = document.querySelectorAll('.subjects .subject input[type="checkbox"]');
    let values = [];
    let i = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            values.push(colors[i].value);
        }
        else {
            values.push("#ffffff");
        }
        i++;
    })

    //CS382
    let cs382 = document.querySelectorAll(".CS382");
    for (let i = 0; i < cs382.length; i++) {
        if (checkboxes[0].checked) {
            cs382[i].style.backgroundColor = values[0];
            cs382[i].innerHTML = "CS382";
        }
        else {
            cs382[i].style.backgroundColor = "#ffffff";
            cs382[i].innerHTML = '';
        }
    }

    //CS382-LD
    let cs382ld = document.querySelectorAll(".CS382-LD");
    for (let i = 0; i < cs382ld.length; i++) {
        if (checkboxes[1].checked) {
            cs382ld[i].style.backgroundColor = values[1];
            cs382ld[i].innerHTML = "CS382-LD";
        }
        else {
            cs382ld[i].style.backgroundColor = "#ffffff";
            cs382ld[i].innerHTML = '';
        }

    }

    //HSS332
    let hss332 = document.querySelectorAll(".HSS332");
    for (let i = 0; i < hss332.length; i++) {
        if (checkboxes[2].checked) {
            hss332[i].style.backgroundColor = values[2];
            hss332[i].innerHTML = "HSS332";
        }
        else {
            hss332[i].style.backgroundColor = "#ffffff";
            hss332[i].innerHTML = '';
        }

    }

    //CS334
    let cs334 = document.querySelectorAll(".CS334");
    for (let i = 0; i < cs334.length; i++) {
        if (checkboxes[3].checked) {
            cs334[i].style.backgroundColor = values[3];
            cs334[i].innerHTML = "CS334";
        }
        else {
            cs334[i].style.backgroundColor = "#ffffff";
            cs334[i].innerHTML = '';
        }
    }

    //CS442
    let cs442 = document.querySelectorAll(".CS442");
    for (let i = 0; i < cs442.length; i++) {
        if (checkboxes[4].checked) {
            cs442[i].style.backgroundColor = values[4];
            cs442[i].innerHTML = "CS442";
        }
        else {
            cs442[i].style.backgroundColor = "#ffffff";
            cs442[i].innerHTML = '';
        }
    }

    //CS146
    let cs146 = document.querySelectorAll(".CS146");
    for (let i = 0; i < cs146.length; i++) {
        if (checkboxes[5].checked) {
            cs146[i].style.backgroundColor = values[5];
            cs146[i].innerHTML = "CS146";
        }
        else {
            cs146[i].style.backgroundColor = "#ffffff";
            cs146[i].innerHTML = '';
        }
    }

}

