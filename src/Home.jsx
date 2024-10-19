import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Layout from './components/Layout'
import { images } from './config/images'
import "./index.css"
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Title from './components/Shared/Title'
import Sections from './components/Shared/Sections'

function App() {

  const mustHaveBooks = [
    {
      name: "আল ফাতাওয়া আল হামা... আল কুবরা",
      src: images.alfatwaalhama
    },
    {
      name: "কিতাবুত তাওহীদ",
      src: images.kitabuttawhid
    },
    {
      name: "মানহাজুস সালাফ",
      src: images.manhajsalaf
    },
    {
      name: "ফিকহুস সালাফ",
      src: images.fiqhsalaf
    },
    {
      name: "ফিকহুস সালাফ",
      src: images.fiqhmuasser
    },
    {
      name: "রহমান আরশের উপর উঠেছেন",
      src: images.rahmanarosherupore
    },
  ]
  const hadithBooks = [
    {
      name: "সহীহ বুখারী",
      src: images.hadithbukhari
    },
    {
      name: "সহীহ মুসলিম",
      src: images.hadithmuslim
    },
    {
      name: "জামি' আত তিরমিযী",
      src: images.hadithtirmidhi
    },
    {
      name: "সুনান আন নাসাঈ",
      src: images.hadithnasai
    },
    {
      name: "সুনান আবু দাউদ",
      src: images.hadithhaud
    },
    {
      name: "মিশকাতুল মাসাবীহ",
      src: images.hadithmiskat
    }
  ]
  const tafsirBooks = [
    {
      name: "তাফসীর আস-সাদী",
      src: images.tafsirsadi
    },
    {
      name: "তাফসীর জাকারিয়া",
      src: images.tafsirzakaria
    },
    {
      name: "তাফসীর আহসানুল বায়ান",
      src: images.tafsirahsan
    }
  ]

  const sectionsData = [
    {
      heading: "তালিবুল ইলম",
      text: "যে বই অবশ্যই থাকতে হবে",
      data: mustHaveBooks,
      className: "grad"
    },
    {
      heading: "সিহাহ সিত্তাহ",
      text: "সহীহ হাদিস সমূহ",
      data: hadithBooks,
      className: "grad2"
    },
    {
      heading: "তাফসীর",
      text: "বিশুদ্ধ কুরআনের ব্যাখ্যা",
      data: tafsirBooks,
      className: "grad3"
    },
  ]
  const [selectedBook, setSelectedBook] = useState("")

  return (
    <>
      {/* <Header /> */}
      <Banner />


      <section className='relative py-20 bg-bottom bg-blend-multiply'
        style={{
          background: "linear-gradient(#000000, #000000, #00000000), url('/images/rb_255.png')",
          backgroundPosition: "center"
        }}
      >
        <div className='absolute bottom-0 left-0 bg-black/60 w-full h-full'></div>
        <Layout>
          <div className='py-40 z-40 grid gap-20 justify-center items-center mx-auto'>
            <Title text={"আমাদের উদ্দেশ্য সালাফি মানহাজের বইপত্রের প্রচার প্রচারণা বাড়ানো।"} heading={"Giveaway🎉"} customClassText={"text-xs md:text-base"} />
            <div className='grid md:grid-cols-2 gap-24 relative'>
              <div className='relative h-full p-1'>
                <div className='gradientBorderBox1 h-full overflow-hidden'>
                  <img className='w-full rounded-lg shadow-md' src={images.giveaway1} />
                </div>
              </div>
              <div>
                <div className="badge badge-accent mb-5">On going</div>
                {/* <div className="badge badge-accent">Over</div> */}
                <h2 className='text-5xl'>নিম্নোক্ত শর্ত অনুযায়ী অংশগ্রহণ করুন:</h2>
                <ul className='grid gap-5 mt-6 text-xl md:text-2xl'>
                  <li>❶. এই পোষ্টটি আপনার টাইমলাইনে শেয়ার করুন, পেইজে লাইক না দেয়া থাকলে লাইক দিয়ে রাখুন।</li>
                  <li>❷. ছবিতে থাকা পছন্দের একটি বইয়ের নাম লিখে কমেন্ট করুন ও সাথে আপনার সর্বনিম্ন ৫ জন বন্ধুকে মেনশন করুন। [ বেশি দিলে আরো ভালো]।</li>
                  <li>❸. গ্রপে Join না হয়ে থাকলে <a className="link link-secondary" href='https://facebook.com/groups/sunnahbookshop/'>JOIN</a> করুন.

                  </li>
                </ul>
                <div className='mt-5 text-center md:text-left'>
                  <Link
                    to={"https://www.facebook.com/photo/?fbid=903773335147738&set=a.541824728009269"}
                    className='px-10 btn btn-primary font-[Poppins] text-white rounded-badge'
                  >Participate</Link>
                </div>
              </div>

            </div>
          </div>
        </Layout >
      </section >
      {
        sectionsData.map((section, idx) => <Sections
          heading={section.heading}
          text={section.text}
          data={section.data}
          className={section.className}
          setSelectedBook={setSelectedBook}

        />)
      }


      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-5">
          <h3 className="font-bold text-lg text-white">{selectedBook}</h3>
          <p className="py-4">বইটি সংগ্রহ করতে আমাদের ফেসবুক অথবা WhatsApp এ যোগাযোগ করুন। বারাকাল্লাহু ফি ইলমিক</p>
          <div className='flex gap-2 items-center justify-center'>
            <Link to="https://www.facebook.com/Sunnahbookshop" target="_blank">
              <img className='w-8' src={images.facebook} alt='Facebook' typeof='button' />
            </Link>
            <Link to="https://wa.me/8801641447822" target="_blank">
              <img className='w-8' src={images.whatsapp} alt='WhatsApp' typeof='button' />
            </Link>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <Footer />

    </>
  )
}

export default App
