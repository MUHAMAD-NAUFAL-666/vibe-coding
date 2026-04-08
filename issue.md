# Rencana Pengembangan: Proyek Bun + ElysiaJS + Drizzle + MySQL

## Ringkasan Tugas
Instruksi ini bertujuan untuk membangun backend service / API baru di dalam repositori ini menggunakan ekosistem Bun. 

## Stack Teknologi
- **Runtime:** Bun
- **Framework Web:** ElysiaJS
- **ORM:** Drizzle ORM
- **Database:** MySQL

## Langkah-Langkah Implementasi (Tingkat Tinggi)

1. **Inisialisasi Proyek**
   - Lakukan inisialisasi proyek Bun baru di dalam direktori ini.
   - Pastikan environment TypeScript sudah terkonfigurasi dengan baik (file `package.json` dan `tsconfig.json`).

2. **Pengelolaan Dependensi**
   - Instal ElysiaJS sebagai framework utama untuk menangani routing/API.
   - Instal Drizzle ORM beserta ekstensi/driver MySQL yang sesuai untuk Bun (contoh: `mysql2`).

3. **Pengaturan Database (Drizzle & MySQL)**
   - Buat file konfigurasi koneksi database MySQL menggunakan Drizzle.
   - Definisikan setidaknya satu skema tabel sederhana (misalnya tabel `users` atau `items`) menggunakan Drizzle.
   - Siapkan mekanisme *migration* untuk mengeksekusi skema tersebut ke database MySQL.

4. **Pengaturan Server & Routing (Elysia)**
   - Buat instans server utama menggunakan ElysiaJS.
   - Buat endpoint atau rute dasar (misalnya `/`, `GET /users`, atau sejenisnya).
   - Di dalam rute tersebut, lakukan operasi database (seperti membaca atau menyisipkan data) dengan mengimpor konfigurasi Drizzle.

5. **Validasi & Eksekusi**
   - Tambahkan *script* di `package.json` untuk menjalankan server secara lokal (dengan *hot reload* bawaan Bun).
   - Pastikan tidak ada *error* saat server dinyalakan, dan pastikan endpoint bisa mereturn data dengan baik dari database MySQL.

## Kriteria Selesai (Definition of Done)
- Aplikasi bisa berjalan menggunakan `bun run`.
- Stack ElysiaJS dan Drizzle ORM saling terintegrasi dan sanggup berkomunikasi baca/tulis dengan server MySQL.
- Struktur *code* rapi dan cukup modular untuk dikembangkan lebih jauh.
