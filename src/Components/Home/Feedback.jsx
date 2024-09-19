import { useFetch } from "../../utils/useFetch";
import star_icon from '../../assets/star_icon.svg';
import { nanoid } from 'nanoid';
import Loading from '../Loading';

const Feedback = () => {
    const { productData,loading } = useFetch('https://dummyjson.com/products');
    const products = productData && productData.products ? productData.products : [];

    return (
        <section className="mt-10 mb-10">
            <h2 className="font-semibold text-3xl text-center">Our <span className="text-Vermillion">happy Customer</span></h2>
            <div className="overflow-hidden whitespace-nowrap mt-10">
                {loading ? <Loading /> :<ul className="flex justify-center items-center gap-5 md:animate-Move-md animate-Move p-3">
                    {products.map((product) => ( product.reviews.filter( review => review.rating > 4 ).map((reviews) => (
                        <li className="px-4 py-5 border-2 border-slate-100 shadow-sm rounded-md bg-white" key={nanoid()}>
                            <div className="text-black">
                                <h2 className="font-semibold text-base text-black">{reviews.reviewerName}</h2>
                                <p className="font-light text-sm">{reviews.comment}</p>
                            </div>
                            <div className="flex items-center gap-1 text-black float-left mt-2">
                                <img src={star_icon} alt="" className="w-3 h-3" />
                                <p className="text-base">{reviews.rating}</p>
                            </div>
                        </li>
                    ))))}
                </ul>}
            </div>
        </section>
    )
}
export default Feedback;
// display the feedback of user which is greater than 4 only.
// used to custom hooks to fetch the data and get the product review which is greater than 4