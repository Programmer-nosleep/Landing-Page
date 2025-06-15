import React from "react";

import Main from "../Main";
import Footer from "../Footer";

export default function HomeContent() {
  return (
    <div>
      <Main> 
        <section className="min-h-[calc(100vh-22vh)] flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Sistem Pengajuan Proposal Digital Mahasiswa
          </h1>
          <p className="text-md text-gray-600 max-w-2xl mb-6">
            Platform mempermudah mahasiswa untuk mengajukan proposal kegiatan secara daring 
            tanpa perlu datang langsung ke pihak kemahasiswaan, prodi, maupun rektorat.
            Semua proses dilakukan secara efisien dan transparan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition">
              Ajukan Proposal
            </button>
            <button className="px-6 py-2 bg-gray-100 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 cursor-pointer transition">
              Lihat Status Proposal
            </button>
          </div>
        </section>

        <section className="py-20 bg-white px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Fitur Utama
            </h2>
            <p className="text-gray-600 mb-8">
              Kami menyediakan fitur-fitur utama yang menunjang proses pengajuan proposal secara digital.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-lg text-blue-600 mb-2">Pengajuan Online</h3>
                <p className="text-gray-600">Ajukan proposal langsung dari mana saja tanpa perlu formulir fisik.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-blue-600 mb-2">Tracking Proposal</h3>
                <p className="text-gray-600">Pantau status proposal Anda secara real-time mulai dari pengajuan hingga persetujuan.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-blue-600 mb-2">Notifikasi Otomatis</h3>
                <p className="text-gray-600">Dapatkan pemberitahuan otomatis melalui email atau sistem saat ada update.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Alur Pengajuan Proposal
            </h2>
            <p className="text-gray-600 mb-8">
              Ikuti langkah-langkah sederhana berikut untuk menyelesaikan proses pengajuan proposal.
            </p>
            <ol className="space-y-4 text-left max-w-2xl mx-auto list-decimal list-inside text-gray-700">
              <li>Login menggunakan akun mahasiswa.</li>
              <li>Isi formulir pengajuan proposal dan unggah dokumen pendukung.</li>
              <li>Ajukan proposal dan tunggu verifikasi dari pihak kemahasiswaan/prodi.</li>
              <li>Lacak status dan riwayat proposal dari dashboard Anda.</li>
            </ol>
          </div>
        </section>
        <Footer />
      </Main>
    </div>
  );
}

