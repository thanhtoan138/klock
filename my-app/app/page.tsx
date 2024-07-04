'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
import 'swiper/css';
import 'swiper/css/navigation';
import './scss/home.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Autoplay, Navigation } from 'swiper/modules';
export default function Home() {
  return (
    <div className='home'>
      <div className='picture'>
        <div className="custom-pre">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577678/banner/tvhfgpkiapfldzoaj8ll.webp' width='100%' height={550} />
            <div className='title'>
              <p style={{ fontSize: '70px', color: 'white', fontWeight: '600' }}>Your world of joy</p>
              <p style={{ fontSize: '23px', color: 'white' }}>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
              <div className='search'>
                <i className="bi bi-search" style={{ marginLeft: '10px' }}></i>
                <input type='text' placeholder=' Search destinations or activities' style={{ backgroundColor: ' rgb(235, 235, 235)', outline: 'none', border: 'none', width: '300px' }} />
                <button style={{ backgroundColor: '#ff5b00', borderRadius: '10px', color: 'white', border: 'none', height: '40px', marginTop: '-5px', width: '100px' }}>Search</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577664/banner/rtw7fgqatgoc1vpcpamb.webp' width='100%' height={550} />
            <div className='title'>
              <p style={{ fontSize: '70px', color: 'white', fontWeight: '600' }}>Your world of joy</p>
              <p style={{ fontSize: '23px', color: 'white' }}>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
              <div className='search'>
                <i className="bi bi-search" style={{ marginLeft: '10px' }}></i>
                <input type='text' placeholder=' Search destinations or activities' style={{ backgroundColor: ' rgb(235, 235, 235)', outline: 'none', border: 'none', width: '300px' }} />
                <button style={{ backgroundColor: '#ff5b00', borderRadius: '10px', color: 'white', border: 'none', height: '40px', marginTop: '-5px', width: '100px' }}>Search</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='main'>
        <Container>
          <h3>Why choose Klook</h3>
          <div className='row'>
            <div className='col-3'>
              <Card style={{ width: '19rem', border: 'none' }}>
                <Card.Body>
                  <Card.Title>
                    <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_112,h_112/v1663655841/ued/platform/Discover_the_possibilities.webp'
                      width={70} height={70} /></Card.Title>
                  <Card.Subtitle className="mb-2" style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>Discover the possibilities</Card.Subtitle>
                  <Card.Text className='text-muted' style={{ fontSize: '15px' }}>
                    <span>With nearly half a million attractions, hotels & more, you're sure to find joy.</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '19rem', border: 'none' }}>
                <Card.Body>
                  <Card.Title>
                    <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_112,h_112/v1663655837/ued/platform/Enjoy_deals_delights.webp'
                      width={70} height={70} /></Card.Title>
                  <Card.Subtitle className="mb-2" style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>Enjoy deals & delights</Card.Subtitle>
                  <Card.Text className='text-muted' style={{ fontSize: '15px' }}>
                    <span>Quality activities. Great prices. Plus, earn Klook credits to save more.</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '19rem', border: 'none' }}>
                <Card.Body>
                  <Card.Title>
                    <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_112,h_112/v1663655837/ued/platform/Exploring_made_easy.webp'
                      width={70} height={70} /></Card.Title>
                  <Card.Subtitle className="mb-2" style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>Exploring made easy</Card.Subtitle>
                  <Card.Text className='text-muted' style={{ fontSize: '15px' }}>
                    <span>Book last minute, skip lines & get free cancellation for easier exploring.</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='col-3'>
              <Card style={{ width: '19rem', border: 'none' }}>
                <Card.Body>
                  <Card.Title>
                    <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_112,h_112/v1663655837/ued/platform/Travel_you_can_trust.webp'
                      width={70} height={70} /></Card.Title>
                  <Card.Subtitle className="mb-2" style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>Travel you can trust</Card.Subtitle>
                  <Card.Text className='text-muted' style={{ fontSize: '15px' }}>
                    <span>Read reviews & get reliable customer support. We're with you at every step.</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='choice'>
            <h3>Travelers' favorite choice</h3>
            <div className="choose">
              <div className="custom-pre">
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
              <div>
                <Swiper
                  centeredSlides={false}
                  slidesPerView={4}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  modules={[Navigation]}
                  className="mySwiper1"
                >
                  <SwiperSlide>
                    <Card style={{ width: '19rem', height: '26rem', borderRadius: '25px' }}>
                      <Card.Subtitle className="">
                        <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/uvurm6r5mg8fccva2cf6.webp'
                          width='100%' height={180} style={{ borderRadius: '25px 25px 0px 0px ', marginTop: '4px' }} />
                      </Card.Subtitle>
                      <div className='single-line'>
                        <ul>Them parks <li>Hong Kong</li></ul>
                        <p className='title'>Ocean Park Hong Kong Ticket</p>
                      </div>
                      <div className='text'>
                        <p>Bestseller</p>
                        <p>Easy refund</p>
                      </div>
                      <div className='rate'>
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#f0c800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <span style={{ color: 'rgb(255, 196, 0)', fontWeight: 'bold' }}> 4.7</span>
                        <span>&nbsp; (72,200)</span>
                        <ul><li>1M+ booked</li></ul>
                      </div>
                      <div className='foot'>
                        <p>From US$ 50.99 <del>US$ 63.75</del></p>
                        <div className='combo'>
                          <p>Combo  <span className='discount'>7% off</span></p>
                        </div>
                        <div className='combo' style={{ width: '200px', marginTop: '8px' }}>
                          <p>Free 3GB eSIM (worth HK$46)</p>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={{ width: '19rem', height: '26rem', borderRadius: '25px' }}>
                      <Card.Subtitle className="">
                        <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/rcbhpsjta3nvwbpa53ea.webp'
                          width='100%' height={180} style={{ borderRadius: '25px 25px 0px 0px ', marginTop: '4px' }} />
                      </Card.Subtitle>
                      <div className='single-line'>
                        <ul>Them parks <li>Hong Kong</li></ul>
                        <p className='title'>Ocean Park Hong Kong Ticket</p>
                      </div>
                      <div className='text'>
                        <p>Bestseller</p>
                        <p>Easy refund</p>
                      </div>
                      <div className='rate'>
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#f0c800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <span style={{ color: 'rgb(255, 196, 0)', fontWeight: 'bold' }}> 4.7</span>
                        <span>&nbsp; (72,200)</span>
                        <ul><li>1M+ booked</li></ul>
                      </div>
                      <div className='foot'>
                        <p>From US$ 50.99 <del>US$ 63.75</del></p>
                        <div className='combo'>
                          <p>Combo  <span className='discount'>7% off</span></p>
                        </div>
                        <div className='combo' style={{ width: '200px', marginTop: '8px' }}>
                          <p>Free 3GB eSIM (worth HK$46)</p>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={{ width: '19rem', height: '26rem', borderRadius: '25px' }}>
                      <Card.Subtitle className="">
                        <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                          width='100%' height={180} style={{ borderRadius: '25px 25px 0px 0px ', marginTop: '4px' }} />
                      </Card.Subtitle>
                      <div className='single-line'>
                        <ul>Them parks <li>Hong Kong</li></ul>
                        <p className='title'>Ocean Park Hong Kong Ticket</p>
                      </div>
                      <div className='text'>
                        <p>Bestseller</p>
                        <p>Easy refund</p>
                      </div>
                      <div className='rate'>
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#f0c800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <span style={{ color: 'rgb(255, 196, 0)', fontWeight: 'bold' }}> 4.7</span>
                        <span>&nbsp; (72,200)</span>
                        <ul><li>1M+ booked</li></ul>
                      </div>
                      <div className='foot'>
                        <p>From US$ 50.99 <del>US$ 63.75</del></p>
                        <div className='combo'>
                          <p>Combo  <span className='discount'>7% off</span></p>
                        </div>
                        <div className='combo' style={{ width: '200px', marginTop: '8px' }}>
                          <p>Free 3GB eSIM (worth HK$46)</p>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={{ width: '19rem', height: '26rem', borderRadius: '25px' }}>
                      <Card.Subtitle className="">
                        <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/ry9mj9qnjpzdxn7kyslv.webp'
                          width='100%' height={180} style={{ borderRadius: '25px 25px 0px 0px ', marginTop: '4px' }} />
                      </Card.Subtitle>
                      <div className='single-line'>
                        <ul>Them parks <li>Hong Kong</li></ul>
                        <p className='title'>Ocean Park Hong Kong Ticket</p>
                      </div>
                      <div className='text'>
                        <p>Bestseller</p>
                        <p>Easy refund</p>
                      </div>
                      <div className='rate'>
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#f0c800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <span style={{ color: 'rgb(255, 196, 0)', fontWeight: 'bold' }}> 4.7</span>
                        <span>&nbsp; (72,200)</span>
                        <ul><li>1M+ booked</li></ul>
                      </div>
                      <div className='foot'>
                        <p>From US$ 50.99 <del>US$ 63.75</del></p>
                        <div className='combo'>
                          <p>Combo  <span className='discount'>7% off</span></p>
                        </div>
                        <div className='combo' style={{ width: '200px', marginTop: '8px' }}>
                          <p>Free 3GB eSIM (worth HK$46)</p>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={{ width: '19rem', height: '26rem', borderRadius: '25px' }}>
                      <Card.Subtitle className="">
                        <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/ry9mj9qnjpzdxn7kyslv.webp'
                          width='100%' height={180} style={{ borderRadius: '25px 25px 0px 0px ', marginTop: '4px' }} />
                      </Card.Subtitle>
                      <div className='single-line'>
                        <ul>Them parks <li>Hong Kong</li></ul>
                        <p className='title'>Ocean Park Hong Kong Ticket</p>
                      </div>
                      <div className='text'>
                        <p>Bestseller</p>
                        <p>Easy refund</p>
                      </div>
                      <div className='rate'>
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#f0c800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <span style={{ color: 'rgb(255, 196, 0)', fontWeight: 'bold' }}> 4.7</span>
                        <span>&nbsp; (72,200)</span>
                        <ul><li>1M+ booked</li></ul>
                      </div>
                      <div className='foot'>
                        <p>From US$ 50.99 <del>US$ 63.75</del></p>
                        <div className='combo'>
                          <p>Combo  <span className='discount'>7% off</span></p>
                        </div>
                        <div className='combo' style={{ width: '200px', marginTop: '8px' }}>
                          <p>Free 3GB eSIM (worth HK$46)</p>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, textAlign: 'center', borderRadius: '5px', marginTop: '30px', border: '1px solid gray', height: '33px', width: '300px', marginLeft: '500px', color: ' rgb(80, 78, 78)', paddingTop: '3px' }}> See more</div>

            </div>
          </div>
          <div className='best mt-5'>
            <h3 style={{ fontWeight: '500' }}>Best on Klook</h3>
            <div className="custom-pres">
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
            <Swiper
              slidesPerView={3}

              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}

              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper">
              <SwiperSlide>
                <div className='card-best'>
                  <Card style={{ width: '25rem', height: '24rem', borderRadius: '10px' }}>
                    <Card.Body>
                      <Card.Title className='title'>
                        Top thing to do in Singapore
                      </Card.Title>
                      <hr style={{ marginTop: '-17px', color: 'rgb(194, 193, 191)' }} />
                      <div className='picture1 row'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>

                      <div className='picture1 row mt-3'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                      <div className='picture1 row mt-3'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card-best'>
                  <Card style={{ width: '25rem', height: '24rem', borderRadius: '10px' }}>
                    <Card.Body>
                      <Card.Title className='title'>
                        Top thing to do in Singapore
                      </Card.Title>
                      <hr style={{ marginTop: '-17px', color: 'rgb(194, 193, 191)' }} />
                      <div className='picture1 row'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>

                      <div className='picture1 row mt-3'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                      <div className='picture1 row mt-3'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card-best'>
                  <Card style={{ width: '25rem', height: '24rem', borderRadius: '10px' }}>
                    <Card.Body>
                      <Card.Title className='title'>
                        Top thing to do in Singapore
                      </Card.Title>
                      <hr style={{ marginTop: '-17px', color: 'rgb(194, 193, 191)' }} />
                      <div className='picture1 row'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>

                      <div className='picture1 row mt-3'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                      <div className='picture1 row mt-3'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card-best'>
                  <Card style={{ width: '25rem', height: '24rem', borderRadius: '10px' }}>
                    <Card.Body>
                      <Card.Title className='title'>
                        Top thing to do in Singapore
                      </Card.Title>
                      <hr style={{ marginTop: '-17px', color: 'rgb(194, 193, 191)' }} />
                      <div className='picture1 row'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>

                      <div className='picture1 row mt-3'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                      <div className='picture1 row mt-3'>
                        <div className='col-md-3'>
                          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/bc6nnabobuni0mcqcnio.webp'
                            width={90} height={70} style={{ borderRadius: '10px' }} />
                        </div>
                        <div className='col-md-9'>
                          <span style={{ color: 'black', fontSize: '16px', fontWeight: '500' }}>Universal Studios Singapore Ticket</span>
                          <span className='text'>
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" stroke-width="1.75" stroke-linecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                </div>
              </SwiperSlide>
            </Swiper>

          </div>
          {/* <div className='more'>
            <h3>More to explore</h3>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/bottom2x_ft5osi.webp" width='100%' height={450} alt="" />
            <div className='nested'>
              <img src="https://res.klook.com/image/upload/q_auto/v1668065898/w81j2nxwdexxuhtenhxo.webp" alt="" />
            </div>
          </div> */}
        </Container>
      </div>
    </div>

  );
}
