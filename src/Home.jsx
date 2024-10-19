import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Layout from './components/Layout'
import { images } from './config/images'
import "./index.css"
import { Link } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [selectedBook, setSelectedBook] = useState("")

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


  return (
    <>
      {/* <Header /> */}
      <Banner />


      <section className='relative py-20'>
        <Layout>
          <div className='py-40 z-40 grid gap-20 justify-center items-center mx-auto'>
            <div className='text-center mx-auto relative'>
              <p className='text-white absolute bottom-0 left-0 right-0 bottom-0'><span className='link'>আমাদের উদ্দেশ্য</span> সালাফি মানহাজের বইপত্রের প্রচার প্রচারণা বাড়ানো।</p>
              <h4 className='text-4xl md:text-7xl py-2 font-semibold w-fit gradText'>Giveaway🎉</h4>
            </div>
            <div className='grid md:grid-cols-2 gap-10 relative'>
              <div className='relative h-full p-1'>
                <div className='gradientBorderBox1 h-full overflow-hidden'>
                  <img className='w-full rounded-lg shadow-md' src={images.giveaway1} />
                </div>
              </div>
              <div className='grid gap-10'>
                <div>
                  <div className="badge badge-accent mb-2">On going</div>
                  {/* <div className="badge badge-accent">Over</div> */}
                  <h2 className='text-5xl'>নিম্নোক্ত শর্ত অনুযায়ী অংশগ্রহণ করুন:</h2>
                  <ul className='grid gap-5 mt-10 text-xl'>
                    <li>❶. এই পোষ্টটি আপনার টাইমলাইনে শেয়ার করুন, পেইজে লাইক না দেয়া থাকলে লাইক দিয়ে রাখুন।</li>
                    <li>❷. ছবিতে থাকা পছন্দের একটি বইয়ের নাম লিখে কমেন্ট করুন ও সাথে আপনার সর্বনিম্ন ৫ জন বন্ধুকে মেনশন করুন। [ বেশি দিলে আরো ভালো]।</li>
                    <li>❸. গ্রপে Join না হয়ে থাকলে <a className="link link-secondary" href='https://facebook.com/groups/sunnahbookshop/'>JOIN</a> করুন.

                    </li>
                  </ul>
                  <div className='mt-5'>
                    <Link
                      to={"https://www.facebook.com/photo/?fbid=903773335147738&set=a.541824728009269"}
                      className='px-10 btn btn-primary font-[Poppins] text-white rounded-badge'
                    >Participate</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Layout >
      </section >

      <section className='relative py-20'>
        <Layout>
          <div className='py-40 w-full z-40 grid gap-20 justify-center items-center mx-auto'>
            <div className='text-center mx-auto relative'>
              <p className='text-white absolute top-0 left-0 right-0 bottom-0'>যে বই অবশ্যই থাকতে হবে</p>
              <h4 className='text-7xl py-2 font-semibold w-fit gradText'>তালিবুল ইলম</h4>
            </div>
            <div className='grid md:grid-cols-3 gap-10 relative'>
              {
                mustHaveBooks.map(book =>
                  <div className='relative h-full p-1 group' key={book.name}>
                    <div className='gradientBorderBox h-full overflow-hidden'>
                      <img className='featureImg group-hover:bg-orange-200' src={book.src} />
                      <div className='z-40 absolute bg-gradient-to-t from-black text-white bottom-0 left-0 right-0 text-center py-10 opacity-0 h-0 group-hover:h-full group-hover:opacity-100 transition-all duration-300 grid place-content-center rounded-[10px]'>
                        <h2 className='text-2xl break-words'>{book.name}</h2>
                        <button
                          className='mt-1'
                          onClick={() => {
                            document.getElementById('my_modal_2').showModal()
                            setSelectedBook(book.name)
                          }}>কিনুন</button>
                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
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
          <div className='grad absolute top-0 left-0 right-0 w-full h-full z-10'></div>
        </Layout >
      </section>

      <section className='relative py-20'>
        <Layout>
          <div className='py-40 w-full z-40 grid gap-20 justify-center items-center mx-auto'>
            <div className='text-center mx-auto relative'>
              <p className='text-white absolute top-0 left-0 right-0 bottom-0'>সহীহ হাদিস সমূহ</p>
              <h4 className='text-7xl py-2 font-semibold w-fit gradText'>সিহাহ সিত্তাহ</h4>
            </div>
            <div className='grid md:grid-cols-3 gap-10 relative'>
              {
                hadithBooks.map(book =>
                  <div className='relative h-full p-1 group' key={book.name}>
                    <div className='gradientBorderBox h-full overflow-hidden'>
                      <img className='featureImg group-hover:bg-orange-200' src={book.src} />
                      <div className='z-40 absolute bg-gradient-to-t from-black text-white bottom-0 left-0 right-0 text-center py-10 opacity-0 h-0 group-hover:h-full group-hover:opacity-100 transition-all duration-300 grid place-content-center rounded-[10px]'>
                        <h2 className='text-2xl break-words'>{book.name}</h2>
                        <button
                          className='mt-1'
                          onClick={() => {
                            document.getElementById('my_modal_2').showModal()
                            setSelectedBook(book.name)
                          }}>কিনুন</button>
                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
          <div className='grad2 absolute top-0 left-0 right-0 w-full h-full z-10'></div>
        </Layout >
      </section>

      <section className='relative py-20'>
        <Layout>
          <div className='py-40 w-full z-40 grid gap-20 justify-center items-center mx-auto'>
            <div className='text-center mx-auto relative'>
              <p className='text-white absolute top-0 left-0 right-0 bottom-0'>বিশুদ্ধ কুরআনের ব্যাখ্যা</p>
              <h4 className='text-7xl py-2 font-semibold w-fit gradText'>তাফসীর</h4>
            </div>
            <div className='grid md:grid-cols-3 gap-10 relative'>
              {
                tafsirBooks.map(book =>
                  <div className='relative h-full p-1 group' key={book.name}>
                    <div className='gradientBorderBox h-full overflow-hidden'>
                      <img className='featureImg group-hover:bg-orange-200' src={book.src} />
                      <div className='z-40 absolute bg-gradient-to-t from-black text-white bottom-0 left-0 right-0 text-center py-10 opacity-0 h-0 group-hover:h-full group-hover:opacity-100 transition-all duration-300 grid place-content-center rounded-[10px]'>
                        <h2 className='text-2xl break-words'>{book.name}</h2>
                        <button
                          className='mt-1'
                          onClick={() => {
                            document.getElementById('my_modal_2').showModal()
                            setSelectedBook(book.name)
                          }}>কিনুন</button>
                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
          <div className='grad3 absolute top-0 left-0 right-0 w-full h-full z-10'></div>
        </Layout >
      </section>

      <section className=''>
      </section>

      <Footer />

    </>
  )
}

export default App
