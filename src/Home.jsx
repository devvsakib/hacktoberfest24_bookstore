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
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import CustomerReview from './components/CustomerReview'

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
      type: "ayah",
      who_said: "আল্লাহ বলেন",
      ayah_arabic: "﴾ قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ    وَالَّذِينَ لَا يَعْلَمُونَ ﴿",
      ayah_bangla: "অর্থাৎ বল, যারা জানে এবং যারা জানে না তারা কি সমান?",
      source: "যুমার ৯ আয়াত"
    },
    {
      heading: "সিহাহ সিত্তাহ",
      text: "সহীহ হাদিস সমূহ",
      data: hadithBooks,
      className: "grad2"
    },
    {
      type: "ayah",
      who_said: "আল্লাহ বলেন",
      ayah_arabic: "﴾ يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ﴿",
      ayah_bangla: "অর্থাৎ যাদেরকে জ্ঞান দান করা হয়েছে আল্লাহ তাদেরকে বহু মর্যাদায় উন্নত করবেন।",
      source: "মুজাদালা ১১ আয়াত"
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
        <div className='absolute bottom-0 left-0 bg-black/60 w-full h-full overflow-x-hidden'></div>
        <Layout>
          <div className='py-40 z-40 grid gap-20 justify-center items-center mx-auto'>
            <Title text={"আমাদের উদ্দেশ্য সালাফি মানহাজের বইপত্রের প্রচার প্রচারণা বাড়ানো।"} heading={"Giveaway🎉"} customClassText={"text-xs md:text-base"} />
            <div className='grid md:grid-cols-2 gap-24 relative'>
              <div className='relative h-full p-1'>
                <div className='gradientBorderBox1 h-full overflow-hidden'>
                  <img className='w-full rounded-lg shadow-md border-2 border-white' src={images.giveaway1} />
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
      {/* <section className='relative py-20'>
        <Layout>
          <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">content</div>
            <div className="divider divider-horizontal">OR</div>
            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">content</div>
          </div>
          <div className={'absolute top-0 left-0 right-0 w-full h-full z-10 grad3'}></div>
        </Layout >

      </section> */}

      {
        sectionsData.map((section, idx) => section.type ?
          <div
            className='max-w-[800px] mx-auto px-5 min-h-[50vh] grid place-content-center overflow-x-hidden'
            key={idx}

          >
            <div className='text-center  gap-4 text-white relative'>
              <FaQuoteLeft className='text-5xl absolute top-0 -left-12' />
              <span className=''>{section.who_said}</span>
              <h3 className='font-uthman text-xl md:text-5xl leading-[1.5em] md:leading-normal'>{section.ayah_arabic}</h3>
              <p className='text-2xl md:text-4xl banglaAyah'>{section.ayah_bangla}</p>
              <span className='badge badge-primary mx-auto text-white'>{section.source}</span>
              <FaQuoteRight className='text-5xl absolute bottom-0 -right-12' />
            </div>
          </div>
          :
          <Sections
            key={idx}
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

      <CustomerReview />

      <Footer />

    </>
  )
}

export default App
