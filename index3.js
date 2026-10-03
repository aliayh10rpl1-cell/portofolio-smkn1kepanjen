// ==========================================
// JAVASCRIPT MODUL 3
// INTERACTIVE DIGITAL PROFILE
// ==========================================


// ==========================================
// 1. DARK MODE / LIGHT MODE
// ==========================================

// Mengambil tombol ganti tema
const btnTema = document.querySelector('#btnToggleTema');

// Mengambil elemen body
const bodyHalaman = document.querySelector('body');

// Menjalankan fungsi ketika tombol diklik
btnTema.addEventListener('click', function() {

    // Menambahkan / menghapus class light-mode
    bodyHalaman.classList.toggle('light-mode');

    // Mengecek apakah light mode sedang aktif
    if (bodyHalaman.classList.contains('light-mode')) {

        // Jika light mode aktif
        btnTema.textContent = 'Mode Gelap 🌙';

    } else {

        // Jika kembali ke dark mode
        btnTema.textContent = 'Mode Terang ☀️';
    }

});


// ==========================================
// 2. MODAL KIRIM PESAN
// ==========================================

// Mengambil tombol "Kirim Pesan"
const btnBukaModal = document.querySelector('#btnKontak');

// Mengambil elemen modal
const elemenModal = document.querySelector('#modalKontak');

// Mengambil tombol "Tutup"
const btnTutupModal = document.querySelector('#btnTutupModal');


// Ketika tombol Kirim Pesan diklik
btnBukaModal.addEventListener('click', function(event) {

    // Mencegah link langsung membuka email
    event.preventDefault();

    // Menampilkan modal
    elemenModal.classList.add('show');
});


// Ketika tombol Tutup diklik
btnTutupModal.addEventListener('click', function() {

    // Menyembunyikan modal
    elemenModal.classList.remove('show');
});


// ==========================================
// 3. MENUTUP MODAL DENGAN KLIK DI LUAR BOX
// ==========================================

elemenModal.addEventListener('click', function(event) {

    // Jika yang diklik adalah bagian overlay
    if (event.target === elemenModal) {

        // Tutup modal
        elemenModal.classList.remove('show');
    }
});


// ==========================================
// 4. UCAPAN BERDASARKAN WAKTU
// ==========================================

// Mengambil elemen ucapan
const greeting = document.getElementById('greeting');

// Mengambil jam saat ini
const hour = new Date().getHours();

if (greeting) {

    if (hour >= 5 && hour < 11) {
        greeting.textContent = 'Selamat Pagi ☀️';

    } else if (hour >= 11 && hour < 15) {
        greeting.textContent = 'Selamat Siang 🌤️';

    } else if (hour >= 15 && hour < 18) {
        greeting.textContent = 'Selamat Sore 🌇';

    } else {
        greeting.textContent = 'Selamat Malam 🌙';
    }
}


// ==========================================
// 5. AVATAR BERPUTAR
// ==========================================

// Mengambil elemen avatar
const avatar = document.getElementById('avatar');

if (avatar) {

    // Ketika avatar diklik
    avatar.addEventListener('click', function() {

        // Menambahkan / menghapus animasi
        avatar.classList.toggle('active');

    });
}