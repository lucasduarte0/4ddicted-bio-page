import React, { useState, useEffect } from "react";
import axios from "axios";

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

function AxiosRequest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://gsx2json.com/api?id=1JKgL5HStZWWAlkGPVCT5OWl6awKTahRutTyUitwAOzI&sheet=produtos"
      )
      .then((response) => {
        setData(response.data.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="catalogue mx-3">
      {data ? (
        <div className="grid grid-cols-2 gap-3">
          {data.map((item, i) => (
            <Card
              name={item.name}
              url={item.url}
              tamanho={item.tamanho}
              condicao={item.condicao}
              index={i}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default AxiosRequest;
