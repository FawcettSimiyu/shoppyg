import React from 'react';
import star_icon from '../assets/profile_icon.png';
import { nanoid } from 'nanoid';

const ProductReview = ({ productData }) => {
    return (
        <div className='flex justify-start items-center p-10'>
            <div className='mt-5'>
                <h2 className='font-semibold text-3xl'>Reviews</h2>
                <ul className="mt-4 flex flex-wrap gap-5">
                    {productData?.reviews?.length > 0 ? (
                        productData.reviews.map((productData) => (
                            <li className="p-4 bg-white shadow-md  text-black" key={nanoid()}>
                                <img src={star_icon} alt="" className='w-7 h-7' />
                                <div className="text-black m-1">
                                    <h2 className="font-medium md:text-lg text-base">{productData.reviewerName}</h2>
                                    <p className="font-light md:text-sm text-base">{productData.comment}</p>
                                </div>
                            </li>
                        ))
                    ) : (<p>No reviews available</p>)}
                </ul>
            </div>
        </div>

    )
}

export default ProductReview;
// product review component for particular data