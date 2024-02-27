import React from 'react';

const articles = [
  {
    title: 'Problem',
    desc: 'Hadapi tantangan coding langsung dari berbagai tingkat kesulitan untuk mengasah keterampilan Anda dengan situasi dunia nyata',
    color: '#4ccff9',
    image: '/images/problem.svg',
  },
  {
    title: 'Ikuti contest',
    desc: 'Bergabunglah dalam beragam kompetisi coding yang menantang untuk menguji kemampuan Anda, bersaing dengan para ahli, dan menambahkan prestasi pada profil Anda',
    color: '#62a1ff',
    image: '/images/contest.svg',
  },
  {
    title: 'Buat contest',
    desc: 'Berperan sebagai pengorganisasi dengan membuat kontes coding sendiri, menantang para peserta dengan soal-soal menarik, dan membangun komunitas di sekitar minat coding Anda.',
    color: '#e9f97f',
    image: '/images/Createcontest.svg',
  },
  // tambahkan artikel lain jika diperlukan
];
export default function Fiture() {
  return (
    <section id="#fiture">
      <div className=" rounded-md py-4 mx-auto max-w-full lg:max-w-screen  ">
        <div className="grid gap-2 md:grid-cols-3 grid-cols-1">
          {articles.map((article, index) => (
            <article key={index} className="hover:animate-background rounded-xl p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
              <div className="rounded-[10px] min-h-[60vh] max-h-[60vh] gap-2 flex flex-col justify-center p-4 sm:p-6 " style={{ backgroundColor: article.color }}>
                {/* SVG */}
                {article.image && <img src={article.image} alt="SVG Icon" className="w-10 h-10 mb-4" />}
                {/* Judul Artikel */}
                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">{article.title}</h3>
                </a>

                {/* Deskripsi Artikel */}
                <p className="text-base md:text-sm">{article.desc}</p>

                {/* Tombol Pelajari Lebih Lanjut */}
                <div className="group mt-4 cursor-pointer inline-flex items-center gap-1 text-sm font-medium hover:text-[#fae74d]">
                  Pelajari lebih lanjut
                  <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
