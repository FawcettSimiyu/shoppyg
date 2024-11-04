import { useFetch } from "../../utils/useFetch";
import star_icon from '../../assets/star_icon.svg';
import { nanoid } from 'nanoid';
import Loading from '../Loading';

const Feedback = () => {
    const { productData, loading } = useFetch('https://dummyjson.com/products');
    const products = productData?.products || [];

    return (
        <section className="mt-10 mb-10">
            <h2 className="font-semibold text-3xl text-center mb-5">
                Our <span className="text-Vermillion">Happy Customers</span>
            </h2>
            <div className="overflow-hidden mt-10">
                {loading ? (
                    <Loading />
                ) : (
                    <ul className="flex justify-center items-center gap-5 md:animate-Move-md animate-Move p-3">
                        {products.flatMap(product => 
                            product.reviews
                                .filter(review => review.rating > 4)
                                .map(review => (
                                    <li className="px-4 py-5 border-2 border-slate-100 shadow-md rounded-lg bg-white transition-transform transform hover:scale-105" key={nanoid()}>
                                        <div className="text-black">
                                            <h3 className="font-semibold text-lg">{review.reviewerName}</h3>
                                            <p className="font-light text-sm text-gray-600">{review.comment}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-black mt-2">
                                            <img src={star_icon} alt="Star" className="w-5 h-5" />
                                            <p className="text-base font-medium">{review.rating}</p>
                                        </div>
                                    </li>
                                ))
                        )}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default Feedback;

