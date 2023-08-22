import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <>
    <section id="team" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        
        <div
          className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center md:mb-20 lg:pt-16"
          data-wow-delay=".2s"
        >
          <h2
            className="mx-auto mb-5 max-w-[620px] font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]"
          >
            Rencontrez notre équipe
          </h2>
          <p className="mx-auto max-w-[620px] text-base text-dark-text">
            Titovidéo c'est une équipe d'expert et de passionné de la vidéo.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div
              className="wow fadeInUp group mx-auto mb-10 max-w-[300px] text-center xs:max-w-[370px]"
              data-wow-delay=".2s"
            >
              <div className="relative mb-8 overflow-hidden rounded">
                <Image
                  src="/images/team/im1.jpg"
                  alt="team-image"
                  className="w-full"
                  width={370}
                  height={370}
                />
                <div
                  className="duration-300 absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <div
                    className="flex items-center justify-center space-x-3"
                  >
                    <a
                      href="javascript:void(0)"
                     
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                     
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4684 4.71327C17.8322 4.99468 17.1575 5.1795 16.4667 5.26161C17.1948 4.82613 17.7398 4.14078 18 3.33327C17.3167 3.73994 16.5675 4.02494 15.7867 4.17911C15.2622 3.61792 14.567 3.24574 13.8092 3.12043C13.0513 2.99511 12.2733 3.12368 11.5961 3.48615C10.9189 3.84862 10.3804 4.42468 10.0643 5.12477C9.74824 5.82486 9.67233 6.60976 9.84838 7.35744C8.46263 7.28798 7.10699 6.92788 5.86945 6.30049C4.63191 5.67311 3.54015 4.79248 2.66504 3.71577C2.35529 4.24781 2.19251 4.85263 2.19338 5.46827C2.19338 6.67661 2.80838 7.74411 3.74338 8.36911C3.19005 8.35169 2.6489 8.20226 2.16504 7.93327V7.97661C2.16521 8.78136 2.44368 9.56129 2.95325 10.1842C3.46282 10.807 4.17211 11.2345 4.96088 11.3941C4.44722 11.5333 3.90863 11.5538 3.38588 11.4541C3.60827 12.1468 4.04172 12.7526 4.62554 13.1867C5.20936 13.6208 5.91432 13.8614 6.64171 13.8749C5.91878 14.4427 5.09102 14.8624 4.20578 15.1101C3.32053 15.3577 2.39515 15.4285 1.48254 15.3183C3.07563 16.3428 4.93012 16.8867 6.82421 16.8849C13.235 16.8849 16.7409 11.5741 16.7409 6.96827C16.7409 6.81827 16.7367 6.66661 16.73 6.51827C17.4124 6.02508 18.0014 5.41412 18.4692 4.71411L18.4684 4.71327Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                      
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  className="mb-1 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl"
                >
                  Francisca Assemien
                </h3>
                <p className="font-heading text-base text-dark-text">
                  CEO de Titovidéo
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div
              className="wow fadeInUp group mx-auto mb-10 max-w-[300px] text-center xs:max-w-[370px]"
              data-wow-delay=".25s"
            >
              <div className="relative mb-8 overflow-hidden rounded">
                <img
                  src="/images/team/im2.jpg"
                  alt="team-image"
                  className="w-full"
                />
                <div
                  className="duration-300 absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <div
                    className="flex items-center justify-center space-x-3"
                  >
                    <a
                      href="javascript:void(0)"
                     
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                    
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4684 4.71327C17.8322 4.99468 17.1575 5.1795 16.4667 5.26161C17.1948 4.82613 17.7398 4.14078 18 3.33327C17.3167 3.73994 16.5675 4.02494 15.7867 4.17911C15.2622 3.61792 14.567 3.24574 13.8092 3.12043C13.0513 2.99511 12.2733 3.12368 11.5961 3.48615C10.9189 3.84862 10.3804 4.42468 10.0643 5.12477C9.74824 5.82486 9.67233 6.60976 9.84838 7.35744C8.46263 7.28798 7.10699 6.92788 5.86945 6.30049C4.63191 5.67311 3.54015 4.79248 2.66504 3.71577C2.35529 4.24781 2.19251 4.85263 2.19338 5.46827C2.19338 6.67661 2.80838 7.74411 3.74338 8.36911C3.19005 8.35169 2.6489 8.20226 2.16504 7.93327V7.97661C2.16521 8.78136 2.44368 9.56129 2.95325 10.1842C3.46282 10.807 4.17211 11.2345 4.96088 11.3941C4.44722 11.5333 3.90863 11.5538 3.38588 11.4541C3.60827 12.1468 4.04172 12.7526 4.62554 13.1867C5.20936 13.6208 5.91432 13.8614 6.64171 13.8749C5.91878 14.4427 5.09102 14.8624 4.20578 15.1101C3.32053 15.3577 2.39515 15.4285 1.48254 15.3183C3.07563 16.3428 4.93012 16.8867 6.82421 16.8849C13.235 16.8849 16.7409 11.5741 16.7409 6.96827C16.7409 6.81827 16.7367 6.66661 16.73 6.51827C17.4124 6.02508 18.0014 5.41412 18.4692 4.71411L18.4684 4.71327Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                     
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  className="mb-1 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl"
                >
                  Leonie Menier
                </h3>
                <p className="font-heading text-base text-dark-text">
                  Community Manager
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div
              className="wow fadeInUp group mx-auto mb-10 max-w-[300px] text-center xs:max-w-[370px]"
              data-wow-delay=".3s"
            >
              <div className="relative mb-8 overflow-hidden rounded">
                <img
                  src="/images/team/im3.png"
                  alt="team-image"
                  className="w-full"
                />
                <div
                  className="duration-300 absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <div
                    className="flex items-center justify-center space-x-3"
                  >
                    <a
                      href="javascript:void(0)"
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4684 4.71327C17.8322 4.99468 17.1575 5.1795 16.4667 5.26161C17.1948 4.82613 17.7398 4.14078 18 3.33327C17.3167 3.73994 16.5675 4.02494 15.7867 4.17911C15.2622 3.61792 14.567 3.24574 13.8092 3.12043C13.0513 2.99511 12.2733 3.12368 11.5961 3.48615C10.9189 3.84862 10.3804 4.42468 10.0643 5.12477C9.74824 5.82486 9.67233 6.60976 9.84838 7.35744C8.46263 7.28798 7.10699 6.92788 5.86945 6.30049C4.63191 5.67311 3.54015 4.79248 2.66504 3.71577C2.35529 4.24781 2.19251 4.85263 2.19338 5.46827C2.19338 6.67661 2.80838 7.74411 3.74338 8.36911C3.19005 8.35169 2.6489 8.20226 2.16504 7.93327V7.97661C2.16521 8.78136 2.44368 9.56129 2.95325 10.1842C3.46282 10.807 4.17211 11.2345 4.96088 11.3941C4.44722 11.5333 3.90863 11.5538 3.38588 11.4541C3.60827 12.1468 4.04172 12.7526 4.62554 13.1867C5.20936 13.6208 5.91432 13.8614 6.64171 13.8749C5.91878 14.4427 5.09102 14.8624 4.20578 15.1101C3.32053 15.3577 2.39515 15.4285 1.48254 15.3183C3.07563 16.3428 4.93012 16.8867 6.82421 16.8849C13.235 16.8849 16.7409 11.5741 16.7409 6.96827C16.7409 6.81827 16.7367 6.66661 16.73 6.51827C17.4124 6.02508 18.0014 5.41412 18.4692 4.71411L18.4684 4.71327Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="javascript:void(0)"
                      aria-label="social-icon"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  className="mb-1 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl"
                >
                  Marvin 
                </h3>
                <p className="font-heading text-base text-dark-text">
                  Developpeur web
                </p>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
    </>
  );
}

export default Team;
