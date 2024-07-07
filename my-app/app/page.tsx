'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
import 'swiper/css';
import Form from 'react-bootstrap/Form';
import 'swiper/css/navigation';
import './scss/home.scss';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
export default function Home() {
  return (
    <div className='home' style={{zIndex:'1'}}>
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
                      <Card.Subtitle className="feature">
                        <img src='https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/uvurm6r5mg8fccva2cf6.webp'
                          height={180} style={{ borderRadius: '25px 25px 0px 0px ', marginTop: '4px' }} />
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
                        <p style={{ marginTop: "55px" }}>From US$ 50.99 <del>US$ 63.75</del></p>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={{ width: '19rem', height: '26rem', borderRadius: '25px' }}>
                      <Card.Subtitle className="feature">
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
                      <Card.Subtitle className="feature">
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
                        <p style={{ marginTop: "55px" }}>From US$ 50.99 <del>US$ 63.75</del></p>
                      </div>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={{ width: '19rem', height: '26rem', borderRadius: '25px' }}>
                      <Card.Subtitle className="feature">
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
                      <Card.Subtitle className="feature">
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
              <div style={{
                fontSize: '16px', fontWeight: 700, textAlign: 'center',
                borderRadius: '5px', marginTop: '30px', border: '1px solid gray', height: '33px',
                width: '300px', marginLeft: '500px', color: ' rgb(80, 78, 78)', paddingTop: '3px',
                boxShadow: '1px 1px 1px gray'
              }}> See more</div>

            </div>
          </div>
          <div className='best mt-5'>
            <h3 style={{ fontWeight: '500', marginBottom: '-40px' }}>Best on Klook</h3>
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
              <SwiperSlide >
                <div className='card-best'>
                  <Card className='car' style={{ width: '25rem', height: '24rem', borderRadius: '10px' }}>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
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
                            <svg width="17px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1668 11.1733C17.1668 12.5307 17.1668 9.81592 17.1668 11.1733ZM17.1668 11.1733C17.1668 12.5307 17.1668 13.8881 17.1668 13.8881M17.1668 11.1733C17.1668 9.81592 20.0001 9.81592 20.0001 11.1733C20.0001 12.5307 20.0001 12.8701 20.0001 18.2997C20.0001 23.7294 7.85591 23.7756 5.68023 18.2997C4.87315 16.2684 5.01308 16.7027 4.2713 14.941C3.52953 13.1794 5.97114 12.1286 6.9472 13.8881C7.92326 15.6477 8.66677 18.4383 8.66677 17.2817C8.66677 16.125 8.66677 12.5307 8.66677 11.1733C8.66677 9.81592 8.66677 5.37546 8.66677 4.01805C8.66677 2.66065 11.5001 2.66065 11.5001 4.01805M17.1668 11.1733C17.1668 9.81592 14.3239 9.81592 14.3334 11.1733M14.3334 11.1733C14.3334 9.81592 11.5001 9.81592 11.5001 11.1733C11.5001 11.4976 11.5001 3.66565 11.5001 4.01805M14.3334 11.1733C14.3334 11.4976 14.3334 10.8209 14.3334 11.1733ZM14.3334 11.1733C14.3477 13.2094 14.3334 13.8881 14.3334 13.8881M11.5001 13.8881C11.5001 13.8881 11.5001 7.41019 11.5001 4.01805" stroke="#f17604" strokeWidth="1.75" strokeLinecap="round"></path> </g></svg>
                            Make it a holiday to remember as you meet your favorite Universal Stars, enjoy musical meet-and-greets, our thrilling rides, and more.</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                </div>
              </SwiperSlide>
            </Swiper>

          </div>
          <div className='inspiration mt-5'>
            <h3 className='mb-5'>Inspiration for your itinerary</h3>
            <div className='row mx-1'>
              <div className='ins1 col-6'>
                <h3 style={{ color: 'white', fontWeight: '500' }}>Best staycation deals</h3>
                <p style={{ color: 'white' }}>Enjoy these cool staycation promotions in Singapore</p>
                <a style={{ borderRadius: '6px', fontWeight: '400', backgroundColor: 'white', padding: '8px', width: '130px', textAlign: 'center' }}>See activities</a>
              </div>
              <div className='ins2 col-6 mx-3'>
                <h3 style={{ color: 'white', fontWeight: '500' }}>All time favorite activities in Dubai</h3>
                <p style={{ color: 'white' }}>Don't forget to check out these activities while you're here</p>
                <a style={{ marginTop: '130px', borderRadius: '6px', fontWeight: '400', backgroundColor: 'white', padding: '8px', width: '130px', textAlign: 'center' }}>See activities</a>
              </div>
            </div>
          </div>
          <div className='place'>
            <h3>Where to next?</h3>
            <div className="custom-pre">
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
            <Swiper
              // grabCursor={true}
              slidesPerView={6}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}

              pagination={{
                clickable: true,
              }}


              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/rxqumcihtzatvhcnbedi.webp" width={200} height={230} alt="" />
                <p>Da Nang</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/ra6rzfjp4sewwyk2oo6j.webp" alt="city-image" width={200} height={230} style={{ backgroundSize: 'cover' }} />
                <p style={{ marginTop: '-17px', marginLeft: '-14px' }}>Ho Chi Minh <br />City</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/csp9q32gccpnqbpmoozi.webp" width={200} height={230} alt="" />
                <p>Nha Trang</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/aqv7u6qgukb6sad0ia6n.webp" width={200} height={230} alt="" />
                <p>Ha Noi</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/sqgssr022vul2azhth7m.webp" width={200} height={230} alt="" />
                <p>BangKok</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/au9l1xfuioau6sgtftln.webp" width={200} height={230} alt="" />
                <p>Singapore</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/rxqumcihtzatvhcnbedi.webp" width={200} height={230} alt="" />
                <p>Singapore</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/rxqumcihtzatvhcnbedi.webp" width={200} height={230} alt="" />
                <p>Singapore</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/w_400,h_533,c_fill/cities/rxqumcihtzatvhcnbedi.webp" width={200} height={230} alt="" />
                <p>Singapore</p>
              </SwiperSlide>

            </Swiper>
            <div className='all' style={{
              fontSize: '16px', fontWeight: 700, textAlign: 'center',
              borderRadius: '5px', border: '1px solid gray', height: '33px',
              width: '300px', marginLeft: '500px', color: ' rgb(80, 78, 78)', paddingTop: '3px',
              boxShadow: '1px 1px 1px gray', marginTop: '-130px'
            }}> See all</div>

          </div>
          <div className='more mt-5'>
            <h3 className='mb-4'>More to explore</h3>
            <div className='row'>
              <div className='im1'></div>
              <img className='im2 col-6' src="https://res.klook.com/image/upload/fl_lossy.progressive,q_auto/bottom2x_ft5osi.webp" alt="" />
            </div>

            <div className='nested'>
              <img className='im3' src="https://res.klook.com/image/upload/q_auto/v1668065898/w81j2nxwdexxuhtenhxo.webp" alt="" />
              <div className='text'>
                <p style={{ fontSize: '35px', fontWeight: '700', }}>Up to đ250.000 off your 1st<br /> app booking</p>
                <p>Use promo code to save on the app!</p>

                <div className='form mt-5'>
                  <Form.Label >Get a magic link sent to your email</Form.Label>
                  <Form.Control
                    type="password"
                    aria-describedby="passwordHelpBlock"
                    style={{ width: '300px' }}
                    placeholder='Email'
                  />
                  <a style={{
                    backgroundColor: 'white', padding: '7px', borderRadius: '7px', fontWeight: '500',
                    position: 'relative', left: '310px', bottom: '32px', color: 'gray'
                  }}>Send</a>
                  <div className='scan'>
                    <p>Scan the magic<br /> code to <br />download Klook
                    </p>
                  </div>
                  <div className='or'>Or</div>
                  <div className='qr'>
                    <svg fill="#eeeded" width="83px" height="53px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.1666667,6 C16.0746192,6 16,6.07461921 16,6.16666667 L16,7.83333333 C16,7.92538079 16.0746192,8 16.1666667,8 L17.8333333,8 C17.9253808,8 18,7.92538079 18,7.83333333 L18,6.16666667 C18,6.07461921 17.9253808,6 17.8333333,6 L16.1666667,6 Z M16,18 L16,17.5 C16,17.2238576 16.2238576,17 16.5,17 C16.7761424,17 17,17.2238576 17,17.5 L17,18 L18,18 L18,17.5 C18,17.2238576 18.2238576,17 18.5,17 C18.7761424,17 19,17.2238576 19,17.5 L19,18.5 C19,18.7761424 18.7761424,19 18.5,19 L14.5,19 C14.2238576,19 14,18.7761424 14,18.5 L14,17.5 C14,17.2238576 14.2238576,17 14.5,17 C14.7761424,17 15,17.2238576 15,17.5 L15,18 L16,18 L16,18 Z M13,11 L13.5,11 C13.7761424,11 14,11.2238576 14,11.5 C14,11.7761424 13.7761424,12 13.5,12 L11.5,12 C11.2238576,12 11,11.7761424 11,11.5 C11,11.2238576 11.2238576,11 11.5,11 L12,11 L12,10 L10.5,10 C10.2238576,10 10,9.77614237 10,9.5 C10,9.22385763 10.2238576,9 10.5,9 L13.5,9 C13.7761424,9 14,9.22385763 14,9.5 C14,9.77614237 13.7761424,10 13.5,10 L13,10 L13,11 Z M18,12 L17.5,12 C17.2238576,12 17,11.7761424 17,11.5 C17,11.2238576 17.2238576,11 17.5,11 L18,11 L18,10.5 C18,10.2238576 18.2238576,10 18.5,10 C18.7761424,10 19,10.2238576 19,10.5 L19,12.5 C19,12.7761424 18.7761424,13 18.5,13 C18.2238576,13 18,12.7761424 18,12.5 L18,12 Z M13,14 L12.5,14 C12.2238576,14 12,13.7761424 12,13.5 C12,13.2238576 12.2238576,13 12.5,13 L13.5,13 C13.7761424,13 14,13.2238576 14,13.5 L14,15.5 C14,15.7761424 13.7761424,16 13.5,16 L10.5,16 C10.2238576,16 10,15.7761424 10,15.5 C10,15.2238576 10.2238576,15 10.5,15 L13,15 L13,14 L13,14 Z M16.1666667,5 L17.8333333,5 C18.4776655,5 19,5.52233446 19,6.16666667 L19,7.83333333 C19,8.47766554 18.4776655,9 17.8333333,9 L16.1666667,9 C15.5223345,9 15,8.47766554 15,7.83333333 L15,6.16666667 C15,5.52233446 15.5223345,5 16.1666667,5 Z M6.16666667,5 L7.83333333,5 C8.47766554,5 9,5.52233446 9,6.16666667 L9,7.83333333 C9,8.47766554 8.47766554,9 7.83333333,9 L6.16666667,9 C5.52233446,9 5,8.47766554 5,7.83333333 L5,6.16666667 C5,5.52233446 5.52233446,5 6.16666667,5 Z M6.16666667,6 C6.07461921,6 6,6.07461921 6,6.16666667 L6,7.83333333 C6,7.92538079 6.07461921,8 6.16666667,8 L7.83333333,8 C7.92538079,8 8,7.92538079 8,7.83333333 L8,6.16666667 C8,6.07461921 7.92538079,6 7.83333333,6 L6.16666667,6 Z M6.16666667,15 L7.83333333,15 C8.47766554,15 9,15.5223345 9,16.1666667 L9,17.8333333 C9,18.4776655 8.47766554,19 7.83333333,19 L6.16666667,19 C5.52233446,19 5,18.4776655 5,17.8333333 L5,16.1666667 C5,15.5223345 5.52233446,15 6.16666667,15 Z M6.16666667,16 C6.07461921,16 6,16.0746192 6,16.1666667 L6,17.8333333 C6,17.9253808 6.07461921,18 6.16666667,18 L7.83333333,18 C7.92538079,18 8,17.9253808 8,17.8333333 L8,16.1666667 C8,16.0746192 7.92538079,16 7.83333333,16 L6.16666667,16 Z M13,6 L10.5,6 C10.2238576,6 10,5.77614237 10,5.5 C10,5.22385763 10.2238576,5 10.5,5 L13.5,5 C13.7761424,5 14,5.22385763 14,5.5 L14,7.5 C14,7.77614237 13.7761424,8 13.5,8 C13.2238576,8 13,7.77614237 13,7.5 L13,6 Z M10.5,8 C10.2238576,8 10,7.77614237 10,7.5 C10,7.22385763 10.2238576,7 10.5,7 L11.5,7 C11.7761424,7 12,7.22385763 12,7.5 C12,7.77614237 11.7761424,8 11.5,8 L10.5,8 Z M5.5,14 C5.22385763,14 5,13.7761424 5,13.5 C5,13.2238576 5.22385763,13 5.5,13 L7.5,13 C7.77614237,13 8,13.2238576 8,13.5 C8,13.7761424 7.77614237,14 7.5,14 L5.5,14 Z M9.5,14 C9.22385763,14 9,13.7761424 9,13.5 C9,13.2238576 9.22385763,13 9.5,13 L10.5,13 C10.7761424,13 11,13.2238576 11,13.5 C11,13.7761424 10.7761424,14 10.5,14 L9.5,14 Z M11,18 L11,18.5 C11,18.7761424 10.7761424,19 10.5,19 C10.2238576,19 10,18.7761424 10,18.5 L10,17.5 C10,17.2238576 10.2238576,17 10.5,17 L12.5,17 C12.7761424,17 13,17.2238576 13,17.5 C13,17.7761424 12.7761424,18 12.5,18 L11,18 Z M9,11 L9.5,11 C9.77614237,11 10,11.2238576 10,11.5 C10,11.7761424 9.77614237,12 9.5,12 L8.5,12 C8.22385763,12 8,11.7761424 8,11.5 L8,11 L7.5,11 C7.22385763,11 7,10.7761424 7,10.5 C7,10.2238576 7.22385763,10 7.5,10 L8.5,10 C8.77614237,10 9,10.2238576 9,10.5 L9,11 Z M5,10.5 C5,10.2238576 5.22385763,10 5.5,10 C5.77614237,10 6,10.2238576 6,10.5 L6,11.5 C6,11.7761424 5.77614237,12 5.5,12 C5.22385763,12 5,11.7761424 5,11.5 L5,10.5 Z M15,10.5 C15,10.2238576 15.2238576,10 15.5,10 C15.7761424,10 16,10.2238576 16,10.5 L16,12.5 C16,12.7761424 15.7761424,13 15.5,13 C15.2238576,13 15,12.7761424 15,12.5 L15,10.5 Z M17,15 L17,14.5 C17,14.2238576 17.2238576,14 17.5,14 L18.5,14 C18.7761424,14 19,14.2238576 19,14.5 C19,14.7761424 18.7761424,15 18.5,15 L18,15 L18,15.5 C18,15.7761424 17.7761424,16 17.5,16 L15.5,16 C15.2238576,16 15,15.7761424 15,15.5 L15,14.5 C15,14.2238576 15.2238576,14 15.5,14 C15.7761424,14 16,14.2238576 16,14.5 L16,15 L17,15 Z M3,6.5 C3,6.77614237 2.77614237,7 2.5,7 C2.22385763,7 2,6.77614237 2,6.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L6.5,2 C6.77614237,2 7,2.22385763 7,2.5 C7,2.77614237 6.77614237,3 6.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,6.5 Z M17.5,3 C17.2238576,3 17,2.77614237 17,2.5 C17,2.22385763 17.2238576,2 17.5,2 L19.5,2 C20.8807119,2 22,3.11928813 22,4.5 L22,6.5 C22,6.77614237 21.7761424,7 21.5,7 C21.2238576,7 21,6.77614237 21,6.5 L21,4.5 C21,3.67157288 20.3284271,3 19.5,3 L17.5,3 Z M6.5,21 C6.77614237,21 7,21.2238576 7,21.5 C7,21.7761424 6.77614237,22 6.5,22 L4.5,22 C3.11928813,22 2,20.8807119 2,19.5 L2,17.5 C2,17.2238576 2.22385763,17 2.5,17 C2.77614237,17 3,17.2238576 3,17.5 L3,19.5 C3,20.3284271 3.67157288,21 4.5,21 L6.5,21 Z M21,17.5 C21,17.2238576 21.2238576,17 21.5,17 C21.7761424,17 22,17.2238576 22,17.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L17.5,22 C17.2238576,22 17,21.7761424 17,21.5 C17,21.2238576 17.2238576,21 17.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,17.5 Z"></path> </g></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='final'>
            <div className='f1'>
              <img src='https://res.klook.com/image/upload/v1640179720/veeon5jzqyjccj5m3lkg.webp'
                width={250} height={150} alt='' />
              <h4 style={{ fontWeight: 700, }}>Check out the Klook blog</h4>
              <p style={{ fontWeight: 500, fontSize: '16px' }} >Follow the team's musings on trends in travel,<br /> itinerary ideas and travel tips</p>
              <a className='butt'>Read now</a>
            </div>
            <div className='f1'>
              <img src='https://res.klook.com/image/upload/v1640179766/arto4pac628jzdsuu3df.webp'
                width={250} height={150} alt='' />
              <h4 style={{ fontWeight: 700, }}>Check out the Klook blog</h4>
              <p style={{ fontWeight: 500, fontSize: '16px' }} >Follow the team's musings on trends in travel,<br /> itinerary ideas and travel tips</p>
              <a className='butt'>Read now</a>
            </div>
            <div className='f1'>
              <img src='https://res.klook.com/image/upload/v1640179875/ggxmmubhiq9nxkbobcro.webp'
                width={250} height={150} alt='' />
              <h4 style={{ fontWeight: 700, }}>Check out the Klook blog</h4>
              <p style={{ fontWeight: 500, fontSize: '16px' }} >Follow the team's musings on trends in travel,<br /> itinerary ideas and travel tips</p>
              <a className='butt'>Read now</a>
            </div>
          </div>
          <div className='partner grid-container'>
            <h3>Partnerships</h3>
            <div className='logo grid-container'>
              <img src="https://res.klook.com/image/upload/v1665390589/home/partner/i_shangrila_en_2x_ivbn4p.webp" width={120} height={45} alt="" />
              <img src="https://res.klook.com/image/upload/v1665390606/home/partner/i_airasia_en_2x_dbl3vm.webp"width={120} height={45} alt="" />
              <img src="https://res.klook.com/image/upload/v1665390608/home/partner/i_reserve_google_2x_yn12jk.webp"width={120} height={45} alt="" />
              <img src="https://res.klook.com/image/upload/v1665390609/home/partner/i_disney_2x_beyawc.webp"width={120} height={45} alt="" />
              <img src="https://res.klook.com/image/upload/v1665390611/home/partner/i_bigbus_2x_ki1pqj.webp"width={120} height={45} alt="" />
              <img src="https://res.klook.com/image/upload/v1665390613/home/partner/i_railpass_2x_asjnah.webp"width={120} height={45} alt="" />
              <img src="https://res.klook.com/image/upload/v1665390614/home/partner/i_line_travel_2x_plycft.webp"width={120} height={45} alt="" />
              <img src="https://res.klook.com/image/upload/w_320/v1691142063/qc4bousc4la1mhzxpbhd.webp"width={120} height={45} alt="" />
              <img src="https://res.klook.com/image/upload/v1665390618/home/partner/i_hkexpress_2x_ocprhe.webp"width={120} height={45} alt="" />
            </div>
          </div>
          <div className='media'>
            <h3>In the media</h3>
            <div className='logo'>
                  <img src="https://res.klook.com/image/upload/v1665387795/home/partner/i_techcrunch_2x_o4u0ny.webp"width={100} height={40} alt="" />
                  <img src="https://res.klook.com/image/upload/v1665387819/home/partner/i_cnbc_2x_jk5b0i.webp"width={100} height={40} alt="" />
                  <img src="https://res.klook.com/image/upload/v1665387830/home/partner/i_wit2_2x_zfsnvv.webp"width={100} height={40} alt="" />
                  <img src="https://res.klook.com/image/upload/v1665387834/home/partner/i_scmp2_2x_wkrdi0.webp"width={100} height={40} alt="" />
                  <img src="https://res.klook.com/image/upload/v1665387839/home/partner/i_forbes_2x_lxvedz.webp"width={100} height={40} alt="" />
                  <img src="https://res.klook.com/image/upload/v1665387844/home/partner/i_tdn_2x_zdytnf.webp"width={100} height={40} alt="" />
                  <img src="https://res.klook.com/image/upload/v1665387846/home/partner/i_e27_2_2x_adsf8k.webp"width={100} height={40} alt="" />
                  <img src="https://res.klook.com/image/upload/v1665387849/home/partner/i_wsj2_2x_yfpima.webp"width={180} height={40} alt="" />

            </div>
          </div>
        </Container>
      </div >
    </div >

  );
}
