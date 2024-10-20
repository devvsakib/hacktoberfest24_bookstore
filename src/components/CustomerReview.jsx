import { Link } from "react-router-dom";
import { images } from "../config/images";
import Layout from "./Layout";
import Title from "./Shared/Title";

const CustomerReview = () => {
    return (
        <section className='relative py-20'>
            <Layout>
                <div className='py-40 w-full z-40 grid gap-20 justify-center items-center mx-auto'>
                    <Title
                        heading={"রিভিউ"}
                        text={"পাঠকের চোখে সুন্নাহ বুকশপ"}
                        customClassText={"-top-2 md:top-0"}
                    />
                    <div className="grid grid-flow-dense md:grid-cols-2 gap-5">
                        {
                            ["review1", "review2", "review3", "review4", "review5", "review6"].map((rev) =>
                                <img src={images[rev]} className="border-2 rounded-md border-white" />
                        )
                    }
                    </div>
                    <img src={images["review7"]} className="border-2 rounded-md border-white mx-auto -mt-16" />

                </div>
                <Link
                    to={"https://www.facebook.com/Sunnahbookshop/reviews"}
                    target="_blank"
                    className="link text-white text-center mt-5 text-lg font-serif"
                >
                    আরো দেখুন...
                </Link>
            </Layout>;
        </section>
    )
};

export default CustomerReview;
