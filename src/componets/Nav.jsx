import React from 'react';
import '../App.css'
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {

    const navigate = useNavigate()

  return ( 
      <div id="navbody">
        <form action="#">
          <ul className="ul">
            <input defaultChecked name="rad" className="radio" id="choose1" type="radio" />
            <label htmlFor="choose1" onClick={() => {navigate("/Prod")}}>
              <li className="li">
                <svg viewBox="0 0 24 24" fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svg w-6 h-6 text-gray-800 dark:text-black">
                  <path d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" />
                </svg>
              </li>
            </label>
            <input className="radio" name="rad" id="choose2" type="radio" />
            <label htmlFor="choose2">
              <li className="li">
                <svg viewBox="0 0 24 24" fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svg w-6 h-6 text-gray-800 dark:text-black">
                  <path d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" strokeWidth={2} strokeLinecap="round" stroke="currentColor" />
                </svg>
              </li>
            </label>
            <input className="radio" name="rad" id="choose3" type="radio" />
            <label htmlFor="choose3">
              <li onClick={() => {navigate("/Carrito")} } className="li">
                <svg viewBox="0 0 24 24" fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svg w-6 h-6 text-gray-800 dark:text-black">
                  <path d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" />
                </svg>
              </li>
            </label>
            <input className="radio" name="rad" id="choose4" type="radio" />
            <label htmlFor="choose4">
              <li className="li">
                <svg viewBox="0 0 24 24" fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="svg w-6 h-6 text-gray-800 dark:text-black">
                  <path d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="square" stroke="currentColor" />
                </svg>
              </li>
            </label>
          </ul>
        </form>
      </div>
  );
}

export default Navbar;

