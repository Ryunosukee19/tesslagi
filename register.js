document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman
            
            // Ambil data dari input form
            const nama = document.getElementById('nama').value;
            const nim = document.getElementById('nim').value;
            const password = document.getElementById('password').value;
            const semester = document.getElementById('semester').value;

            // Simpan data ke LocalStorage (sebagai simulasi Database)
            const userData = {
                nama: nama,
                nim: nim,
                password: password,
                semester: semester
            };
            
            // Menyimpan dengan key berdasakan NIM agar unik
            localStorage.setItem(nim, JSON.stringify(userData));

            alert(`Registrasi Berhasil, ${nama}! Anda akan diarahkan ke materi pembelajaran.`);

            // Logika Redirect berdasarkan Semester
            if (semester === "1") {
                // Ganti URL ini dengan halaman dashboard/materi semester 1 kamu
                window.location.href = "materi_semester1.html"; 
            } else if (semester === "2") {
                // Ganti URL ini dengan halaman dashboard/materi semester 2 kamu
                window.location.href = "materi_semester2.html"; 
            }
        });
    }

    // --- LOGIKA UNTUK HALAMAN LOGIN NANTINYA ---
    // (Kamu bisa memisahkan ini ke file login.html)
    //
    // function loginMahasiswa(inputNim, inputPassword) {
    //     const userString = localStorage.getItem(inputNim);
    //     
    //     if (userString) {
    //         const user = JSON.parse(userString);
    //         if (user.password === inputPassword) {
    //             alert("Login Sukses!");
    //             // Redirect berdasarkan semester yang tersimpan saat registrasi
    //             if (user.semester === "1") window.location.href = "materi_semester1.html";
    //             if (user.semester === "2") window.location.href = "materi_semester2.html";
    //         } else {
    //             alert("Password salah!");
    //         }
    //     } else {
    //         alert("NIM tidak terdaftar!");
    //     }
    // }
});