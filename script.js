let isLoggedIn = false;

// ================= LOGIN =================
function handleLogin(){
    if(isLoggedIn){
        isLoggedIn = false;
        document.getElementById("loginNav").innerText="Login";
        document.getElementById("loginText").innerText="Login";
        alert("Logout Berhasil");
    } else {
        openLogin();
    }
}

// ================= SEARCH =================
function toggleSearch(){
    const box = document.getElementById("searchBox");
    box.classList.toggle("active");
    if (box.classList.contains("active")) {
        box.querySelector("input").focus();
    }
}

// ================= MENU =================
function toggleMenu(){
    document.body.classList.toggle("menu-open");
}

// ================= PAGE SYSTEM =================
function openPage(title, content){
    let newTab = window.open("", "_blank");

    newTab.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <link rel="stylesheet" href="exl.css">
    </head>
    <body>

    <h1>${title}</h1>
    <div>${content}</div>

    </body>
    </html>
    `);

    newTab.document.close();
}

// ================= MENU PAGES =================
function openBeranda(){
    openPage("Beranda", "<h2>Selamat Datang 🚀</h2>");
}

function openProfil(){
    openPage("Profil", "<p>Profil Perpustakaan</p>");
}

function openLayanan(){
    openPage("Layanan", "<p>Layanan tersedia</p>");
}

function openStruktur(){
    openPage("Struktur", "<p>Struktur organisasi</p>");
}

function openKoleksi(){
    openPage("Koleksi", "<p>Daftar koleksi buku</p>");
}

function openKegiatan(){
    openPage("Kegiatan", "<p>Kegiatan terbaru</p>");
}

function openForum(){
    openPage("Forum", "<p>Forum diskusi</p>");
}

function openAdmin(){
    openPage("Admin", "<p>Halaman admin</p>");
}

function openKontak(){
    openPage("Kontak", "<p>Kontak kami</p>");
}

// ================= EVENT =================
function lihatEvent(){
    alert("Pameran Koleksi Terbaru 2026");
}

// ================= BUKU =================
function bukaBuku(judul){
    alert("Membuka buku: " + judul);
}

// ================= LOGIN POPUP =================
function openLogin() {
    let newTab = window.open("", "_blank");

    newTab.document.write(`
    <html>
    <head>
    <title>Login</title>
    </head>
    <body style="text-align:center; padding:50px;">

    <h2>Login</h2>
    <input id="loginEmail" placeholder="Email"><br><br>
    <input id="loginPass" type="password" placeholder="Password"><br><br>
    <button onclick="login()">Masuk</button>

    <script>
    function login(){
        let email = document.getElementById("loginEmail").value;
        let pass = document.getElementById("loginPass").value;

        let user = localStorage.getItem(email);

        if(user){
            let data = JSON.parse(user);

            if(pass === data.password){
                alert("Login berhasil");

                if(window.opener){
                    window.opener.isLoggedIn = true;
                }

                window.close();
            } else {
                alert("Password salah");
            }
        } else {
            alert("Akun tidak ditemukan");
        }
    }
    <\/script>

    </body>
    </html>
    `);

    newTab.document.close();
}
