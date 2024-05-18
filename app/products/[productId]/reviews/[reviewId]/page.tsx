"use client"
import { notFound } from "next/navigation";

const getRandomInt = (count:number)=>{
    return Math.floor(Math.random() * count)
}
export default function Review({params}:{
    params:{
        productId:string,
        reviewId:string,
    }
}){
    // const random = getRandomInt(2)
    // if(random === 1){
    //     throw new Error("Error loading review")
    // }
    const {productId , reviewId} = params;
    if(parseInt(reviewId)>1000){
        notFound();
    }
    return <h1>Review {reviewId} for product {productId}</h1>
}