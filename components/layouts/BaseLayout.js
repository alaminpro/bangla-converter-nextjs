import React from 'react';
import Header from '../../includes/Header';
import Footer from '../../includes/Footer';
import Head from 'next/head';

const BaseLayout = (props) => {
  const {children,title } = props;
 return (
    <React.Fragment>
      <Head>
        <title>Bangla Calculator || {title}</title>
        <meta name="description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer. I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way." />
        <meta name="keywords" content="jerga portfolio, jerga developer, jerga freelancig, jerga programming"/>
        <meta property="og:title" content="Filip Jerga - programmer, developer, bloger" />
        <meta property="og:locale" content="en_EU" /> 
        <link rel="icon" type="image/ico" href="/favicon.ico"/>
      </Head>
      <div className="xl:container">
        <Header />
        <main className="container mx-auto px-4"> 
          {children} 
        </main>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;

