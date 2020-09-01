/*Buatlah tampilan buah menggunakan array of object
Data yang perlu ditampilkan
Nama, warna, nama latin, tipe biji, gambar buah
*/

let fruits = [
    {
        name: "Apple",
        color: "Red",
        latinName: "Malus sylvestris",
        clad: "monocotyl",
        img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Banana",
        color: "Yellow",
        latinName: "Musa paradisiaca",
        clad: "dicotyl",
        img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Blueberry",
        color: "Dark Blue",
        latinName: "Vaccinum corymbosum",
        clad: "monocotyle",
        img: "https://images.unsplash.com/photo-1568387022280-92935eb78c5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Cherry",
        color: "Red",
        latinName: "Prunus apetala",
        clad: "dicotyle",
        img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Lemon",
        color: "Yellow",
        latinName: "Citrus limon",
        clad: "monocotyl",
        img: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Mango",
        color: "Green",
        latinName: "Mangifera indica",
        clad: "dicotyle",
        img: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Orange",
        color: "Orange",
        latinName: "Citrus reticulata",
        clad: "monocotyl",
        img: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    },
    {
        name: "Pear",
        color: "Yellow",
        latinName: "Pyrus caucasica",
        clad: "dicotyl",
        img: "https://images.unsplash.com/photo-1517428956741-0e738679fc79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    }
]

let fruit = document.querySelector(".column");

let display = () => {
    fruits.forEach((fruits) => {
    let card = document.createElement("span");
    card.innerHTML = ` 
            <img src="${fruits.img}" alt="">
            <p class="name">${fruits.name}</p>
            <p class="color">${fruits.color}</p>
            <p class="clad">${fruits.clad}</p>
            <p class="latinname">${fruits.latinName}</p>`;
        fruit.appendChild(card)
    })

}

display();