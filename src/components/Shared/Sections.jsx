import React from "react";
import Layout from "../Layout";
import Title from "./Title";

const Sections = ({ data, heading, text, className,setSelectedBook }) => {

    return (
        <section className='relative py-20'>
            <Layout>
                <div className='py-40 w-full z-40 grid gap-20 justify-center items-center mx-auto'>
                    <Title
                        heading={heading}
                        text={text}
                    />
                    <div className='grid md:grid-cols-3 gap-10 relative'>
                        {
                            data.map(book =>
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
                <div className={'absolute top-0 left-0 right-0 w-full h-full z-10 ' + className}></div>
            </Layout >
           
        </section>
    )
};

export default Sections;
