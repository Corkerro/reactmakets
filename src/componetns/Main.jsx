import React, { useEffect, useRef } from 'react';
import buttonSvg from '../img/main/button.svg';
import shine_2 from '../img/main/shine_2.svg';
import mentisAbstract from '../img/main/mentis abstract.jpg';
import telegram from '../img/main/telegram.svg';
import portal from '../img/main/portal.svg';
import PopupVideo from './PopupVideo';

export default function Main() {
  const [isWindowSize1390, setWindowSize1390] = React.useState(window.innerWidth >= 1390);
  const [isWindowSize600, setWindowSize600] = React.useState(window.innerWidth >= 600);
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize1390(window.innerWidth >= 1390);
      setWindowSize600(window.innerWidth >= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [popupOpen, setPopupOpen] = React.useState(false);
  const [videoId, setVideoId] = React.useState('');

  const handleLinkClick = (videoId) => {
    setVideoId(videoId);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const button = (
    <a href="#" onClick={() => handleLinkClick('s4m68uiXQ1U')} class="link main__top_top-a">
      <img src={buttonSvg} alt="" />
    </a>
  );
  const buttonTelegram = (
    <a data-da=".main__picture, 600" class="main__picture_a" href="https://t.me/figmamakets/7">
      <img src={telegram} alt="" />
      <span class="text-1">ПЕРЕЙТИ В ТЕЛЕГРАМ</span>
    </a>
  );
  const paragraph = (
    <p data-da=".main__text,1390" class="text-1 main__top_down-text">
      Один из самых качественных и тщательно отобранных сборников макетов Figma. У нас вы найдете
      образовательный материал, который поможет вам дополнить портфолио и повысить свои скиллы!
    </p>
  );

  const imgRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const imgElement = imgRef.current;
      if (imgElement) {
        const parallaxMultiplier = parseInt(imgElement.getAttribute('data-parallax')) / 100 || 0.5;
        const scrollPosition = window.pageYOffset;
        imgElement.style.transform = `translateY(${scrollPosition * parallaxMultiplier}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (popupOpen) {
      document.documentElement.classList.add('lock');
      document.documentElement.classList.add('popup-show');
    } else {
      document.documentElement.classList.remove('popup-show');
      setTimeout(() => {
        document.documentElement.classList.remove('lock');
      }, 300);
    }
  }, [popupOpen]);
  return (
    <div class="main">
      {popupOpen && <PopupVideo videoId={videoId} onClose={closePopup} />}
      <div class="main__container">
        <div class="main__top">
          <div class="main__top_top">
            <h1>
              СБОРНИК <span>ЛУЧШИХ</span>
            </h1>
            {isWindowSize1390 ? button : ''}
          </div>
          <div class="main__top_down">
            <h1>МАКЕТОВ FIGMA</h1>

            {isWindowSize1390 ? '' : button}
            {isWindowSize1390 ? paragraph : ''}
          </div>
          <div class="main__text">{isWindowSize1390 ? '' : paragraph}</div>
        </div>
        <div class="main__tags">
          <ul>
            <li>
              <a href="#" class="subtitle-italic">
                # лендинг
              </a>
            </li>
            <li>
              <a href="#" class="subtitle-italic">
                # интернет-магазин
              </a>
            </li>
            <li>
              <a href="#" class="subtitle-italic">
                # корпоративный
              </a>
            </li>
          </ul>
          <div class="main__tags_line">
            <div></div>
            <img src={shine_2} alt="" />
          </div>
        </div>
        <div class="main__picture">
          <div class="main__picture_wrapper">
            <img ref={imgRef} data-paralax src={mentisAbstract} alt="" class="main__picture_img" />
            {isWindowSize600 ? buttonTelegram : ''}
          </div>
          {isWindowSize600 ? '' : buttonTelegram}
        </div>
        <div class="main__marquee">
          <div class="main__marquee_wrapper">
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
            <div class="main__marquee_item">
              <span class="stroke-text">ИЗБРАННАЯ коллекцИя макетов</span>
              <img src={portal} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
