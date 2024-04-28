import React from 'react';
import { GiCheckMark} from "react-icons/gi";
import ProductStore from "../Store/ProductStore";
import { useEffect } from "react";
const ProductCard = () => {
    const { CardList, CardListRequest } = ProductStore();
    useEffect(() => {
        (async () => {
            await CardListRequest();
        })();
    }, []);
    return (
        <div className='grid grid-cols-5 gap-2 container'>
            {
                CardList?.map((item,i)=>(
                    <div key={i} className='h-60 w-52 bg-yellow-300 m-6 rounded-md'>
                    <img className='h-2/4 w-52 rounded-t-md' src={item.image} alt="" />
                    <p className='m-1 ml-2'><span>Title: </span>{item.title}</p>
                    <span className='ml-2'><span className='font-bold'><span>Category: </span></span> Safety</span>
                    <div className='ml-2 flex'><span className='mt-1 mr-1'><GiCheckMark /></span><span className=''>{item.remark}</span></div>
                </div>
                ))
            }

        </div>
    );
};

export default ProductCard;