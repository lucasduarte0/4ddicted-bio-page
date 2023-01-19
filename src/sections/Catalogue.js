/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const products = [
    {
        name: "Nike Dunk Low “UCLA”",
        url: "https://ik.imagekit.io/soulshoes/4ddclub/2_8goO8BIfQ4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674162043364",
        tamanho: "39",
        condicao: "9.5"
    },
    {
        name: "Nike Dunk Low Orange",
        url: "https://ik.imagekit.io/soulshoes/4ddclub/3_4FphxZ6Jax.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674162043640",
        tamanho: "39",
        condicao: "9.5"
    },
    {
        name: "Nike Dunk Low “UCLA”",
        url: "https://ik.imagekit.io/soulshoes/4ddclub/4_o5NX7pe9aw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674162043010",
        tamanho: "39",
        condicao: "9.5"
    },
    {
        name: "Nike Dunk Low “UCLA”",
        url: "https://ik.imagekit.io/soulshoes/4ddclub/1_nD2Uy6HOeg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674162042637",
        tamanho: "39",
        condicao: "9.5"
    },
];

function Card(props) {
    return (
        <div class="relative min-w-[340px] bg-white shadow-md rounded-3xl my-3 cursor-pointer">
            <div class="overflow-x-hidden rounded-2xl relative">
                <img class="h-auto rounded-2xl w-full object-cover" src={props.url} />
                {/* <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <i id="whats-icon" class="fa-brands fa-whatsapp fa-xl"></i>
                </p> */}
            </div>
            <div class="px-5 py-3 flex justify-between ">
                <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">{props.name}</p>
                    <p class="text-md text-gray-800 mt-0">Tamanho: {props.tamanho}</p>
                    <p class="text-md text-gray-800 mt-0">Condição: {props.condicao}</p>
                </div>
                <div class="flex flex-col-reverse mb-1 self-center mr-4 group cursor-pointer p-4 bg-gray">
                    <i id="whats-icon" class="fa-brands fa-whatsapp fa-2xl"></i>
                </div>
            </div>
        </div>
    );
}

function Catalogue() {
    return (
        <section className='catalogue mx-4'>

            <div className='social_media flex flex-col'>
                {products.map((el, i) => (
                    <Card name={el.name} url={el.url} tamanho={el.tamanho} condicao={el.condicao} index={i} />
                ))}
            </div>

        </section>
    );
}

export default Catalogue;