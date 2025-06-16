import React from "react";
import Main from "../Main";
import Footer from "../Footer";

export default function FAQContent() {
  return (
    <div>
      <Main>
        <section className="min-h-[calc(100vh-22vh)] bg-white px-4 py-16 flex flex-col items-center">
          {/* Header + Paragraf di Tengah */}
          <div className="w-full max-w-4xl text-center mb-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Berikut adalah beberapa pertanyaan umum seputar penggunaan sistem pengajuan proposal digital mahasiswa.
            </p>
          </div>

          {/* Daftar Pertanyaan di Kiri */}
          <div className="w-full max-w-4xl text-left space-y-6">
            <div>
                <h2 className="font-semibold text-blue-600 mb-1">
                  1. Siapa saja yang bisa menggunakan sistem ini?
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  Sistem ini dapat digunakan oleh seluruh mahasiswa aktif untuk mengajukan proposal kegiatan, serta oleh pihak kemahasiswaan dan prodi untuk memverifikasi dan menyetujui proposal tersebut.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-blue-600 mb-1">
                  2. Apakah saya harus datang langsung untuk menyerahkan proposal?
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  Tidak. Semua proses dilakukan secara online melalui platform ini, termasuk pengajuan, verifikasi, dan persetujuan proposal.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-blue-600 mb-1">
                  3. Bagaimana saya tahu status proposal saya?
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  Anda dapat melihat status terkini proposal Anda di dashboard setelah login. Setiap perubahan status juga akan dikirimkan melalui notifikasi.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-blue-600 mb-1">
                  4. Apa saja dokumen yang perlu disiapkan?
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  Biasanya Anda perlu menyiapkan proposal kegiatan dalam format PDF dan dokumen pendukung lainnya seperti RAB, surat pengantar, dan lampiran sesuai kebutuhan.
                </p>
              </div>
          </div>
        </section>
        <Footer />
      </Main>
    </div>
  );
}

