import React, { useEffect, useState } from 'react';
import Card from './Card';
import agg from './Agg';
import Navbar from './Nav';

function Prod({Carcon,setCarcon}) {
  const [products, setProducts] = useState([]);
  const [Bus, setBus] = useState("");
  const busqueda = products.filter(products => products.title.toLowerCase().includes(Bus.toLowerCase())) //crea un nuevo array con los elementos que complan la condicion 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json()) 
      .then((data) => setProducts(data));
  }, []);

  return (<>
  <Navbar/>
    <div className=" from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="py-5">
        <blockquote className="text-center text-4xl font-semibold text-gray-900 monoespace">
          Neutral{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white">$tore</span>
          </span>{" "};)

        </blockquote>

        <div className="mt-8 text-center px-4 max-w-xl mx-auto text-gray-600 selection:bg-fuchsia-100 selection:text-fuchsia-900">
          <p>
            Nuestros productos son de alta calidad y están diseñados para satisfacer las
            necesidades de nuestros clientes. Aquí nos esforzamos por ofrecer una experiencia y
            servicio al cliente de primera clase.
          </p>
        </div>
<div className="InputContainer">
          <input className="input" type="text" placeholder='Buscar'
        value={Bus} 
        onChange={ e => setBus(e.target.value)} /> 
</div>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {busqueda.map((product) => (
              <Card key={product.id} product={product} Carcon={Carcon} setCarcon={setCarcon}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Prod;
