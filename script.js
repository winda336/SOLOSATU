if(localStorage.getItem("login") !== "true"){

    window.location.href = "login.html";

}

// ===============================
// GRAFIK PENJUALAN 7 HARI
// ===============================

const ctx = document.getElementById('salesChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Sen',
            'Sel',
            'Rab',
            'Kam',
            'Jum',
            'Sab',
            'Min'
        ],

        datasets: [{
            label: 'Penjualan (Rp)',
            data: [
                450000,
                720000,
                600000,
                850000,
                980000,
                1200000,
                760000
            ],

            backgroundColor: [
                '#D9A441',
                '#C89232',
                '#B07D45',
                '#D9A441',
                '#C89232',
                '#8B5E3C',
                '#6F4E37'
            ],

            borderRadius:10
        }]
    },

    options: {

        responsive:true,

        plugins:{
            legend:{
                display:false
            }
        },

        scales:{

            y:{

                beginAtZero:true,

                ticks:{
                    callback:function(value){

                        return "Rp " + value.toLocaleString('id-ID');

                    }
                }

            }

        }

    }

});


// ===============================
// FORMAT RUPIAH
// ===============================

function rupiah(angka){

    return angka.toLocaleString('id-ID',{

        style:'currency',

        currency:'IDR',

        minimumFractionDigits:0

    });

}

console.log(rupiah(2500000));


// ===============================
// TANGGAL DAN WAKTU
// ===============================

const sekarang = new Date();

console.log(
    sekarang.toLocaleDateString('id-ID')
);

console.log(
    sekarang.toLocaleTimeString('id-ID')
);


// ===============================
// CEK PRODUK RETURN
// ===============================

const statusProduk = document.querySelectorAll('.danger');

statusProduk.forEach(function(item){

    console.log(
        item.innerText + " harus segera diretur!"
    );

});


// ===============================
// ANIMASI CARD
// ===============================

const cards = document.querySelectorAll('.card');

cards.forEach(function(card,index){

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    setTimeout(function(){

        card.style.transition = ".6s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    },index*200);

});


// ===============================
// SAPAAN BERDASARKAN WAKTU
// ===============================

const jam = new Date().getHours();

let salam = "";

if(jam < 11){

    salam = "Selamat Pagi ☀️";

}

else if(jam < 15){

    salam = "Selamat Siang 🌤️";

}

else if(jam < 18){

    salam = "Selamat Sore 🌅";

}

else{

    salam = "Selamat Malam 🌙";

}

console.log(salam);


// ===============================
// TOTAL PENJUALAN
// ===============================

const penjualan = [
450000,
720000,
600000,
850000,
980000,
1200000,
760000
];

let total = 0;

penjualan.forEach(function(nilai){

    total += nilai;

});

console.log(
    "Total Penjualan Minggu Ini : " + rupiah(total)
);


// ===============================
// PRODUK DUMMY
// ===============================

const produk = [

{
nama:"Roti Coklat",
harga:15000,
stok:30
},

{
nama:"Donat Keju",
harga:12000,
stok:25
},

{
nama:"Roti Sobek",
harga:18000,
stok:15
},

{
nama:"Croissant",
harga:22000,
stok:10
}

];

console.table(produk);


// ===============================
// KLIK CARD
// ===============================

cards.forEach(function(card){

    card.addEventListener("click",function(){

        card.style.background="#FFF3D0";

        setTimeout(function(){

            card.style.background="white";

        },300);

    });

});

// ==========================
// MENU MOBILE
// ==========================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () =>{

    sidebar.classList.toggle("show");

    overlay.classList.toggle("show");

});

overlay.addEventListener("click", ()=>{

    sidebar.classList.remove("show");

    overlay.classList.remove("show");

});

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function(){

    localStorage.removeItem("login");

    window.location.href = "login.html";

});

const role = localStorage.getItem("role");
const username = localStorage.getItem("username");

document.getElementById("userInfo").innerHTML =
`Halo, ${username} 👋`;
