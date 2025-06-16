import React from "react";

import Main from "../Main";
import Footer from "../Footer";

export default function AboutUsContent() {
  return (
    <div>
      <Main>
        <section className="min-h-[calc(100vh-22vh)] bg-white flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Tentang Sistem Pengajuan Proposal Digital Mahasiswa
          </h1>
          <p className="text-sm md:text-lg lg:text-md text-gray-600 max-w-xl md:max-w-2xl lg:max-w-5xl mb-6">
            Kami adalah tim pengembang yang berkomitmen untuk menghadirkan sistem pengajuan proposal digital 
            yang memudahkan mahasiswa dalam menyampaikan ide dan kegiatan secara efisien. 
            Melalui platform ini, seluruh proses pengajuan hingga persetujuan dilakukan secara daring, 
            cepat, transparan, dan terdokumentasi dengan baik, sehingga mendukung kelancaran tugas administrasi kemahasiswaan.
          </p>
        </section>
        <Footer />
      </Main>
    </div>
  );
}
