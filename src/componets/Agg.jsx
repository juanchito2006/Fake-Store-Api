import React from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Agg = ({Carcon,setCarcon , product}) => {
  
    const ag = (product) => {
      Swal.fire({
                title: `${product.title}`,
                  text: "Fue agregado al carrito ",
                icon: "success"
              })
      setCarcon([...Carcon,product]) // aqui le pasamos el producto que se presiono a Carcon y se guarda en el array
      return(
        <>
        </>
      )
    }

  return (
    <button onClick={ () => ag(product)} title="Add New" className="group cursor-pointer outline-none hover:rotate-90 duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-zinc-500 fill-none group-hover:fill-green-200 group-active:stroke-zinc-600 group-active:fill-green-00 group-active:duration-0 duration-300">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" strokeWidth="1.5" />
        <path d="M8 12H16" strokeWidth="1.5" />
        <path d="M12 16V8" strokeWidth="1.5" />
      </svg>
    </button>
    
  );
}

export default Agg;
