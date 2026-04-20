// =========================
// LOGIN STATE GLOBAL
// =========================
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

// CTRL + CLICK / MIDDLE CLICK = tab baru
function goTo(page){
    window.location.href = page;
}

function goToNewTab(page){
    window.open(page, "_blank");
}
function toggleDropdown(el){
    let menu = el.nextElementSibling;

    // tutup semua dropdown lain
    document.querySelectorAll(".dropdown-menu-custom").forEach(item => {
        if(item !== menu){
            item.style.maxHeight = null;
        }
    });

    // toggle
    if(menu.style.maxHeight){
        menu.style.maxHeight = null;
    } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
    }
}

// =========================
// UPDATE UI LOGIN + NAMA
// =========================
function updateLoginUI(){
    let nav1 = document.getElementById("loginNav");
    let nav2 = document.getElementById("loginText");
    let userDisplay = document.getElementById("userDisplay");

    let userName = localStorage.getItem("userName");

    if(isLoggedIn){
        if(nav1) nav1.innerText = "Logout";
        if(nav2) nav2.innerText = "Logout";

        if(userDisplay && userName){
            userDisplay.innerText = "Halo, " + userName;
        }

    } else {
        if(nav1) nav1.innerText = "Login";
        if(nav2) nav2.innerText = "Login";

        if(userDisplay){
            userDisplay.innerText = "";
        }
    }
}

function handleLogin(){
    if(isLoggedIn){
        isLoggedIn = false;
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("userName");
        updateLoginUI();
        alert("Logout Berhasil");
    } else {
        openLogin();
    }
}

function toggleSearch(){
    const box = document.getElementById("searchBox");
    box.classList.toggle("active");
    if (box.classList.contains("active")) {
        box.querySelector("input").focus();
    }
}
    
function toggleMenu(){
    document.body.classList.toggle("menu-open");
}

function lihatEvent(){
    window.location.href = "event.html";
}

function bukaBuku(judul){
    alert(
    "Anda membuka buku: " + judul + 
    "\n\nFitur membaca buku digital akan segera tersedia."
    );
}

function cariBuku(keyword){
    let books = document.querySelectorAll(".book-card");

    books.forEach(book => {
        let judul = book.innerText.toLowerCase();

        if(judul.includes(keyword.toLowerCase())){
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

document.getElementById("searchInput").addEventListener("keyup", function(){
    cariBuku(this.value);
});

function updateClock(){
    let now = new Date();

    let jam = now.toLocaleTimeString("id-ID");
    let tanggal = now.toLocaleDateString("id-ID", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    document.getElementById("clock").innerHTML = jam + " | " + tanggal;
}
setInterval(updateClock, 1000);
updateClock();

function startVoice(){
    if(!('webkitSpeechRecognition' in window)){
        alert("Browser tidak mendukung voice typing");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "id-ID";

    recognition.start();

    recognition.onresult = function(event){
        let text = event.results[0][0].transcript;
        document.getElementById("searchInput").value = text;
        cariBuku(text);
    }
}

document.addEventListener("DOMContentLoaded", function(){

    // =========================
    // INIT
    // =========================
    updateLoginUI();
    updateClock();
    
    // =========================
    // SEARCH INPUT (AMAN)
    // =========================
    let searchInput = document.getElementById("searchInput");
    if(searchInput){
        searchInput.addEventListener("keyup", function(){
            cariBuku(this.value);
        });
    }
    // =========================
    // NAVIGATION
    // =========================
    let links = document.querySelectorAll(".top-nav a, .side-nav a");

    links.forEach(link => {
        let href = link.getAttribute("href");

        if(
            !href || 
            href === "#" || 
            href.startsWith("javascript") || 
            link.id === "loginText" ||
            href.startsWith("#") 
        ) return;;

        link.addEventListener("click", function(e){

        // Jika CTRL / middle click → biarkan default (new tab)
        if(e.ctrlKey || e.button === 1){
            return;
        }

        // klik biasa → pindah halaman
        e.preventDefault();
        window.location.href = href;
    });
});

    // =========================
    // ACTIVE MENU
    // =========================
   let current = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if(link.getAttribute("href") === current){
            link.style.textDecoration = "underline";
        }
    });

});

function openLogin() {
    let newTab = window.open("", "_blank");
    newTab.document.write(`
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
    body{
        margin:0;
        font-family:Arial;
        background:url('library.jpeg') no-repeat center center/cover;
        padding:120px 20px;
        text-align:center;
        color:white;
    }
    .box{
        background:rgba(0,0,0,0.7);
        padding:30px;
        max-width:350px;
        margin:auto;
    }
    input{
        width:100%;
        padding:8px;
        margin:10px 0;
    }
    button{
        padding:8px 15px;
        background:#C72B32;
        color:white;
        border:none;
        cursor:pointer;
    }
    a{color:#FEEAC9;cursor:pointer;}

    /* TEXT BERKEDIP */
    @keyframes blink{
        0%{opacity:1;}
        50%{opacity:0;}
        100%{opacity:1;}
    }

    .success{
        color:lime;
        animation:blink 1s infinite;
        margin-top:10px;
    }
    </style>
    </head>
    <body>

    <div class="box" id="loginBox">
        <h2>Login</h2>
        <input type="email" id="loginEmail" placeholder="Email" required>
        <input type="password" id="loginPass" placeholder="Password" required>
        <button onclick="login()">Masuk</button>
        <p id="loginMsg"></p>
        <p>Belum punya akun? <a onclick="showRegister()">Daftar</a></p>
    </div>

    <div class="box" id="registerBox" style="display:none;">
        <h2>Daftar</h2>
        <input type="text" id="namaDepan" placeholder="Nama Depan" required>
        <input type="text" id="namaBelakang" placeholder="Nama Belakang" required>
        <input type="email" id="regEmail" placeholder="Email" required>
        <input type="tel" id="regTelp" placeholder="No Telepon" required>
        <input type="password" id="regPass" placeholder="Password" required>
        <button onclick="register()">Kirim</button>
        <p id="registerMsg"></p>
        <p>Sudah punya akun? <a onclick="showLogin()">Login</a></p>
    </div>

    <script>
function showRegister(){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("registerBox").style.display="block";
}

function showLogin(){
    document.getElementById("loginBox").style.display="block";
    document.getElementById("registerBox").style.display="none";
}

function login(){
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    if(email !== "" && pass !== ""){

        let user = localStorage.getItem(email); 

        if(user){
                let data = JSON.parse(user);
           
            if(pass === data.password){
                document.getElementById("loginMsg").innerHTML =
                "<span class='success'>Login Berhasil!</span>";
            
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userName", data.nama || "User");
            
                if(window.opener){
                    window.opener.isLoggedIn = true;
                    window.opener.updateLoginUI();
                }
            
                setTimeout(function(){
                    window.close();
                },1500);

            } else {
                alert("Password salah");
            }

        } else {
            alert("Akun tidak ditemukan");
        }

    } else {
        alert("Harap isi semua data!");
    }
}

function register(){
    let nama = document.getElementById("namaDepan").value;
    let namaBelakang = document.getElementById("namaBelakang").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if(nama !== "" && email !== "" && pass !== ""){
        let namaLengkap = namaDepan + " " + namaBelakang;

        let dataUser = {
            nama: namaLengkap,
            email: email,
            password: pass
        };

        localStorage.setItem(email, JSON.stringify(dataUser));

        document.getElementById("registerMsg").innerHTML =
        "<span class='success'>Pendaftaran Berhasil!</span>";

    } else {
        alert("Harap isi semua data!");
    }
}
</script> 
</body>
</html>
  `);

    newTab.document.close(); // ✅ WAJIB
}
