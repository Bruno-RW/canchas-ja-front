"use client";

import Image from "next/image";

type Listings = {
    id:number | string;
    title:string;
    location:string;
    price:number;
    image:string;
    rating:number;
    reviews:number;
    discount:number | 0;
}

type Props = {
    listings:Listings[];
    title:string;
};

export default function ListingRow({ listings, title }:Props) {
    return (
        <section className="px-4 py-6">
            {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
            <div
                className="flex gap-4 overflow-x-auto scroll-smooth
                snap-x snap-mandatory"
            >
                {listings.map(listing => (
                    <div
                        key={listing.id}
                        className="flex-shrink-0 w-64 brand-bg-primary rounded-xl shadow-md
                        snap-start"
                    >
                        <div className="relative w-full h-40">
                            <Image
                                src={listing.image}
                                alt={listing.title}
                                fill
                                className="object-cover rounded-t-xl"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-lg">{listing.title}</h3>
                            <p className="text-sm brand-text-primary">{listing.location}</p>
                            <p className="text-sm brand-text-secondary"> *{listing.rating}</p>
                            <div className="mt-2">
                                {listing.discount > 0 && (
                                    <span className="text-sm chart-5 line-through mr-2">
                                        R$ {listing.price}
                                    </span>
                                )}
                                <span className="text-sm font-bold">R$ {(listing.price - (listing.price*listing.discount/100)).toFixed(2)}</span>
                                <span className="text-sm chart"></span>
                            </div>
                            
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
