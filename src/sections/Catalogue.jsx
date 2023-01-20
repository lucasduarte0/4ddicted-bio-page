/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const products = [
  {
    name: "Nike Dunk Low “UCLA”",
    url: "https://ik.imagekit.io/soulshoes/4ddclub/2_8goO8BIfQ4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674162043364",
    tamanho: "39",
    condicao: "9.5",
  },
  {
    name: "Nike Dunk Low Orange",
    url: "https://ik.imagekit.io/soulshoes/4ddclub/3_4FphxZ6Jax.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674162043640",
    tamanho: "40",
    condicao: "9.5",
  },
  {
    name: "Nike Dunk Low “UCLA”",
    url: "https://ik.imagekit.io/soulshoes/4ddclub/4_o5NX7pe9aw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674162043010",
    tamanho: "39",
    condicao: "9.5",
  },
  {
    name: "Nike Dunk Low “UCLA”",
    url: "https://ik.imagekit.io/soulshoes/4ddclub/1_nD2Uy6HOeg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674162042637",
    tamanho: "39",
    condicao: "9.5",
  },
];

function Card(props) {
  return (
    <div class="relative bg-white shadow-md w-auto rounded-2xl my-3 cursor-pointer">
      <div class="overflow-x-hidden rounded-2xl relative">
        <img class="h-auto rounded-2xl w-full object-cover" src={props.url} />
        {/* <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <i id="whats-icon" class="fa-brands fa-whatsapp fa-xl"></i>
                </p> */}
      </div>
      <div class="px-2 py-3 flex justify-between ">
        <div>
          <p class="text-base font-semibold text-gray-900 mb-0">{props.name}</p>
          <p class="text-sm text-gray-800 mt-0">Tamanho: {props.tamanho}</p>
          <p class="text-sm text-gray-800 mt-0">Condição: {props.condicao}</p>
        </div>
      </div>
      <div class="mb-3 mx-2 text-center bg-[#40b355] w-auto rounded-xl cursor-pointer p-2.5 bg-gray">
        <span className="text-white text-sm">SABER MAIS</span>
        <i id="whats-icon" class="ml-2 fa-brands fa-whatsapp fa-xl"></i>
      </div>
    </div>
  );
}

function Catalogue() {
  return (
    <section className="catalogue mx-3">
      <div className="grid grid-cols-2 gap-3">
        {products.map((el, i) => (
          <Card
            name={el.name}
            url={el.url}
            tamanho={el.tamanho}
            condicao={el.condicao}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalogue;
