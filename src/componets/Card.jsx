import Agg from "./Agg";


function Card({ product , Carcon, setCarcon}) {
  return (
    <a
      key={product.id}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-4">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <small className="text-gray-500">{product.category}</small>

        <h3 className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
          {product.title}
        </h3>

                <p className="mt-2 text-xl font-bold text-green-600">
          ${product.price}
        </p>
        <Agg key={product.id} product={product} Carcon={Carcon} setCarcon={setCarcon} />

      <div className="card">
        <div className="stats-wrapper">
          <p className="heading">Rating</p>
          <div className="bottom-wrapper">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="star">
              <g data-name="Layer 2">
                <g data-name="star">
                  <rect opacity={0} transform="rotate(90 12 12)" height={24} width={24} />
                  <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
                </g>
              </g>
            </svg>
            <p className="count">{product.rating.rate}</p>
          </div>
        </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
