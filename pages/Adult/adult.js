import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const adult = () => {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
const schemaData   = {
  "@context": "https://schema.org",
  
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hbomaxmovies.netlify.app/Adult/adult"
    
  },
  "headline": "HBOmax Movies™ Adult | Watch now the Best TV shows and Movies",
  "image": "https://hbomaxmovies.netlify.app/logo.png",

  "datePublished": '2023-01-01T09:00:00.000Z',
  "dateModified": '2023-01-01T09:00:00.000Z',
  "author": [{
      "@type": "Person",
      "name": "HBOmax Movies",
      "url": "https://hbomaxmovies.netlify.app/Adult/adult"
    }],
  
  "publisher": {
      "@type": "Organization",
      "name": "HBOmax Movies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hbomaxmovies.netlify.app/og_image.jpg"
      }
    },
  "description": "HBOmax Movies™ Adult | Watch now the Best TV shows and Movies"

};
const maxData   = {

  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Hollywood",
    "item": "https://hbomaxmovies.netlify.app/Hollywood/hollywood"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Bollywood",
    "item": "https://hbomaxmovies.netlify.app/Bollywood/bollywood"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Adult",
    "item": "https://hbomaxmovies.netlify.app/Adult/adult"
  }]
};
const searchData   = {
  "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.example.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://query.example.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      
  }
  };

const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};

  return (
  
    <div >
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(maxData) }}
  />
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(searchData) }}
  />
      <div className="bg-[#1a202c]">
      <Head>
        <title>HBOmax Movies™ Adult</title>
      
	<meta name="description" content="Watch now the Best TV shows and Movies " />
	<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="keywords" content="Free, Movies, TV shows, legal, streaming, HD, full length, full movie, latest movies, online tv, latest free movies, watch latest movies online, latest full movies online" />
	<meta name="revisit-after" content="1 days" />
	<meta property="og:locale" content="en_US" />
  <meta name="robots" content="index, follow" />
	
	<link rel="icon" type="image/x-icon" href="favicon.ico" />
	<meta property="og:site_name" content="HBOmax Movies™ | Watch now the Best TV shows and Movies " />
	<meta property="og:type" content="website" />
	<meta property="og:image:height" content="1280"/>
	<meta property="og:image:width" content="720"/>
	<meta property="og:title" content="HBOmax Movies™ | Watch now the Best TV shows and Movies " />
	<meta property="og:description" content="Watch now the Best TV shows and Movies " />
	<meta property="og:url" content="https://hbomaxmovies.netlify.app/" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image" content="https://hbomaxmovies.netlify.app/og_image.jpg" />
	<meta property="og:image:secure_url" content="https://hbomaxmovies.netlify.app/og_image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="HBOmax Movies™ " />
	<meta name="twitter:description" content=" Watch now the Best TV shows and Movies " />
	<meta name="twitter:image" content="https://hbomaxmovies.netlify.app/og_image.jpg" />


  <link rel="canonical" href="https://hbomaxmovies.netlify.app/Adult/" />
  <meta name="google-site-verification" content="WQh7UdOVLh--PluVaU8U1m1IHrAPjaWmaItVOdek8tg" />
  <link rel="alternate" hreflang="en-us" 	href="https://hbomaxmovies.netlify.app/"/>
	<link rel="alternate" hreflang="en-gb" 	href="https://hbomaxmovies.netlify.app/"/>
	<link rel="alternate" hreflang="en-ca" 	href="https://hbomaxmovies.netlify.app/"/>
	<link rel="alternate" hreflang="en-au" 	href="https://hbomaxmovies.netlify.app/"/>
	<link rel="alternate" hreflang="en-se" 	href="https://hbomaxmovies.netlify.app/"/>
	<link rel="alternate" hreflang="en-fr" 	href="https://hbomaxmovies.netlify.app/"/>
	<link rel="alternate" hreflang="en-dk" 	href="https://hbomaxmovies.netlify.app/"/>
	<link rel="alternate" hreflang="en-no" 	href="https://hbomaxmovies.netlify.app/"/>
	<link rel="alternate" hreflang="x-default" 	href="https://hbomaxmovies.netlify.app/"/>
      </Head>
       
      <main>
        <div>
      <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font">
    <h1 className="mb-4 font-bold leading-none tracking-tight text-white my-2 text-center md:text-4xl dark:text-white">HBOmax Movies™ Watch Latest Movies</h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Suki-2023/Suki">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/suki-2023.webp' alt='SUKI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">SUKI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A lady stripper and a gigolo promised each other that their work can't break them apart. But when lust and temptation come into the picture.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Suki-2023/Suki">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/EroticaManila-2023/EroticaManila">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/erotica-manila-2023.webp' alt='EROTICA MANILA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">EROTICA MANILA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A man enters an adult film theatre, a writer gets a naughty massage, a porn star satisfies an intern, and a couple kill a man while making love.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/EroticaManila-2023/EroticaManila">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/MissBriganaza-2023/MissBriganaza">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/miss-briganaza-2023.webp' alt='WATCHMAN - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">MISS BRIGANAZA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Miss Briganaza (2023) is Hot Adult WoW Web series.Miss Briganaza (2023) stream on digital streaming platforms Wow. Hot Adult web Series on Wow.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/MissBriganaza-2023/MissBriganaza">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Watchman-2023/WatchmanP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/watchman-part1-2023.webp' alt='WATCHMAN - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">WATCHMAN SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The plot revolves around new adventures and fantasies of flat security. Things take a new turn as events unfold around them.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Watchman-2023/WatchmanP1">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LaQuerida-2023/LaQuerida">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/la-querida-2023.webp' alt='LA QUERIDA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LA QUERIDA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A young couple's romance is cut short when the man learns that his woman is married. Hot Adult web Series on Viva Max.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/LaQuerida-2023/LaQuerida">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LadyDoctor-2023/LadyDoctor">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/lady-doctor-2023.webp' alt='LADY DOCTOR - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">LADY DOCTOR - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The plot revolves around a female doctor. She gives special treatment to all her patients. Hot Adult web Series on Pime Shot.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/LadyDoctor-2023/LadyDoctor">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Kaand-2023/KaandP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/kaand-2023.webp' alt='KAAD - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">KAAND SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Kaand web series very soon going to stream on digital streaming platforms Dreams Films app. Hot Adult web Series on Dreams Films.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Kaand-2023/KaandP1">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Ishqiya-2023/Ishqiya">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/ishqiya-2023.webp' alt='ISHQIYA - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">ISHQIYA - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> Ishqiya 2023 Raven Movies Hindi Sex Web Series Raven Movies app is providing erotic content for the youth audience of India. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Ishqiya-2023/Ishqiya">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/FarebiYarr-2023/FarebiYarrP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/farebi-yaar-part-1-2023.webp' alt='FAREBI YARR - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">FAREBI YARR SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> ULLU Originals Farebi Yaar Wife runs away with husband's best friend in this erotic web series Hot Adult web Series on ULLU Originals.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/FarebiYarr-2023/FarebiYarrP1">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Babuji-2023/BabujiP1">
     
         <Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/babuJi-2023.webp' alt='BABUJI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">BABUJI SERIES - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A man has two sons and their two wives. One day, babu ji gets hurt and becomes sick. And unable to see anything.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Babuji-2023/BabujiP1">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Pamasahe-2023/Pamasahe">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/pamasahe-2022.webp' alt='PAMASAHE - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg title-font text-white mb-3 font-bold md:text-lg ">PAMASAHE - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> A penniless mother, with her infant child, takes on a journey by land and sea to find her husband in Manila. But this trip won't be free for she has to use her.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Pamasahe-2023/Pamasahe">
       <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/ILoveyou-2023/ILoveyou">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl "  src='/i-love-you-P2-2023.webp' alt='I LOVE YOU PART 2 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">I LOVE YOU PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the youngster roaming around the find his true love. He mts another lady and it inches close to his fantasy.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/ILoveyou-2023/ILoveyou">
        <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/PlanB-2023/PlanB">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/plan-b-2023.webp' alt='PLAN B 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">PLAN B 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Things take a turn when the woman is seen seducing another man, and the duo are seen mixing something into Kamini’s drink. </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/PlanB-2023/PlanB">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/LustDaries-2023/LustDaries">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/lust-diaries-pehla-pyar-2023.webp' alt='LUST DARIES... - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">LUST DARIES... - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Lust Diaries Pehla Pyar 2023 WoW Hindi Shorts Web Series.Adult and Hot Movie Watch it Now Lust Diaries Pehla Pyar - 2023 </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/LustDaries-2023/LustDaries">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Imli-2023/Imli">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/Imli-P2-2023.webp' alt='IMLI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">IMLI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The story of a young girl who comes to the village to become a dancer. She has a bucket load of ambitions and dreams and wants to become a heroine in the films.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Imli-2023/Imli">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/TeekhiChutteny-2022/TeekhiChutteny">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/teekhi-chutney-part2-2022.webp' alt='TEEKHI CHUTENY PART 2 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">TEEKHI CHUTENY PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">Teekhi Chutney Part 2 is Hindi Romance, drama Web Series. Adult and Hot Movie Watch it Now Teekhi Chunteny Part 2 - 2023 </h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/TeekhiChutteny-2022/TeekhiChutteny">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/Darji-2022/Darji">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/darji-2022.webp' alt='DARJI - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">DARJI - 2023</h2>
          <h3 className="leading-relaxed text-white text-base"> The Plot revolves around a gym trainer and all the female members in the gym. We meet the handsome guy Shaily who works as a gym instructor in gym.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/Darji-2022/Darji">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/AnAffairToForget-2022/AnAffairToForget">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/an-affair-to-forget-2022.webp' alt='AN AFFAIR TO FORGET - 2022' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">AN AFFAIR TO FORGET - 2022</h2>
          <h3 className="leading-relaxed text-white text-base">Wife seeks the help of a young woman to find out if her husband is having an affair. The plot thickens when the young woman falls for the husband instead.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.3 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/AnAffairToForget-2022/AnAffairToForget">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/ChingariChaubey-2023/ChingariChaubey">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/chingari-chaubey-2023.webp' alt='CHINGARI CHAUBEY - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">CHINGARI CHAUBEY - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the youngster roaming around the find his true love. He mts another lady and it inches close to his fantasy.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/ChingariChaubey-2023/ChingariChaubey">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/VirginBahus-2023/VirginBahus">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/virgin-bahus-2023.webp' alt='VIRGIN BAHUS - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">VIRGIN BAHUS - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">The plot revolves around the family with three marriages. The daughter in laws entered into a mood of confusion. watch Virgin Bahus - 2023</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-red-600 text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/VirginBahus-2023/VirginBahus">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>

         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP1-2022/WalkManP1">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/walkman1-2022.webp' alt='WALKMAN PART 1 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 1 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/WalkManP1-2022/WalkManP1">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP2-2022/WalkManP2">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/walkman2-2022.webp' alt='WALKMAN PART 2 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
       <a href="../../Adult/WalkManP2-2022/WalkManP2">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
        <a href="../../Adult/WalkManP3-2022/WalkManP3">
     
<Image className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='/walkman3-2022.webp' alt='WALKMAN PART 3 - 2023' width={400} height={300}  loading="lazy"/></a>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font  mb-3 font-bold md:text-lg ">WALKMAN PART 3 - 2023</h2>
          <h3 className="leading-relaxed text-white text-base">A newlywed Roshini is disheartened when her dreams and aspirations are left short lived, both on and off bed. In a twist of fate tales.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex text-red-600 flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18 </strong>
       </div>
       <a href="../../Adult/WalkManP3-2022/WalkManP3">
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl">Watch Now</button></a>
         
        </div>
      </div>
      </div>
      
  </section>
  </div>
  </div>
  <div className="container px-5 py-24 mx-auto items-center justify-center  flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px">
    <li>
      <a href="../Adult/adult" tabindex="-1" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 -l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
    </li>

    <li>
      <a href="../Adult/adult" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 -r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Last</a>
    </li>
  </ul>
</nav>
</div>
      </main>

      </div>
    </div>
  )
}
export default adult;