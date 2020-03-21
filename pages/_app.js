
import React from 'react';
import App  from 'next/app'; 
import '../styles/index.scss'  
export default class MyApp extends App {
 
  render () {
    const { Component } = this.props

    return ( 
        <Component alamin="this is alamin"/>  
    )
  }
}
