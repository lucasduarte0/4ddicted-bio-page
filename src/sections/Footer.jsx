import React from "react";

function Footer() {
  return (
    <footer className='w-full bg-gray-900 py-10'>
      <div className='md:px-12 lg:px-28'>
        <div className='container m-auto space-y-6 text-gray-300'>
          <div className=''>
            <img
              className='m-auto w-40 rounded-full'
              src='https://i.seadn.io/gae/xTbonqBDT-N3-TGSURwDDtZCoxyrH1hhyIyL1gZNTvZoQNaINNHc4dpfE2edfSRsaLOn6RAMYEXLsfYWRtNJqR0iPzoPzWcCtul77lc?auto=format&w=1000'
              alt='logo tailus'
            />
          </div>
          {/* <ul
            role="list"
            className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
          >
            <li role="listitem">
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li role="listitem">
              <a href="#" className="hover:text-primary">
                Features
              </a>
            </li>
            <li role="listitem">
              <a href="#" className="hover:text-primary">
                Get started
              </a>
            </li>
            <li role="listitem">
              <a href="#" className="hover:text-primary">
                About us
              </a>
            </li>
          </ul> */}
          <div className='m-auto flex w-max items-center justify-between space-x-4'>
            <a href='tel:+5537999414303' aria-label='call'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='m-auto w-5'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                ></path>
              </svg>
            </a>
            <a href='mailto:pix@4ddicted.club' aria-label='send mail'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='m-auto w-5'
                viewBox='0 0 16 16'
              >
                <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z'></path>
              </svg>
            </a>
            <a href='#' title='linkedin' target='blank' aria-label='linkedin'>
              <i class='fa-brands fa-instagram fa-lg'></i>
            </a>
          </div>

          <div className='text-center'>
            <span className='text-sm tracking-wide'>
              Copyright © 4ddcted Club <span id='year'></span> <br /> Todos
              direitos reservados
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
