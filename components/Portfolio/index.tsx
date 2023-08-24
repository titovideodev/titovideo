import React from 'react';
import styles from './Portfolio.module.css'; 

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="pt-14 sm:pt-20 lg:pt-[80px]">
      <div className="px-4 xl:container">
        
        <div
          className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center md:mb-20 lg:pt-16"
          data-wow-delay=".2s"
        >
        
          <h2
            className="mx-auto mb-5 max-w-[500px] font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]"
          >
            Découvrez nos dernières créations
          </h2>
          
        </div>

        <div className="w-full">
          <div className="portfolio-grid -mx-4 flex flex-wrap">
            <div className="grid-sizer"></div>
            <div className="grid-item ecom w-full px-4 lg:w-2/3">
              <div
                className="wow fadeInUp group relative mb-10 overflow-hidden rounded"
                data-wow-delay=".2s"
              >
              <video
              src="/videos/Kid lonni video.mp4"
              className="w-full"
              controls
            />
              </div>
            </div>

            <div
              className="grid-item branding w-full px-4 md:w-1/4 lg:w-1/4"
            >
              <div
                className="wow fadeInUp group relative mb-2 overflow-hidden rounded"
                data-wow-delay=".25s"
              >
                <video
                  src="/videos/Promo officiel Baptiste Andre .MP4"
                  className="w-full"
                  controls
                />

              </div>
            </div>
            <div
              className="grid-item digital w-full px-4 md:w-1/2 lg:w-1/3"
            >
              <div
                className="wow fadeInUp group relative mb-10 overflow-hidden rounded"
                data-wow-delay=".3s"
              >
                <video
                  src="/videos/Maya BF.mp4"
                  className="w-full"
                  controls
                />

              </div>
            </div>
            <div
              className="grid-item ecom w-full px-4 md:w-1/2 lg:w-1/3"
            >
              <div
                className="wow fadeInUp group relative mb-10 overflow-hidden rounded"
                data-wow-delay=".35s"
              >
                 <video
                  src="/videos/Cosentino rendu officiel .mov"
                  className="w-full"
                  controls
                />
              </div>
            </div>
          </div>

          <div
            className="wow fadeInUp w-full pt-5 py-5 text-center"
            data-wow-delay=".2s"
          >
            <a
              href="/portfolio"
              className="inline-flex items-center rounded bg-primary py-[14px] px-8 font-heading text-base text-white hover:bg-opacity-90"
            >
              Voir plus
              <span className="pl-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Portfolio;
