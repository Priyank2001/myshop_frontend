import React from 'react'
import "./style/AdminTopBar.css"
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Context from '../Constants';


class LabelOptions{
    constructor(label,link){
        this.label = label
        this.link = link
    }
}

function AdminTopBar() {
    const [infoStat,setInfoState] = useState(null);
    const options = [new LabelOptions('Users','/users'),
                     new LabelOptions('Products','/products'),
                     new LabelOptions('Categories','/users'),
                     new LabelOptions('Brands','/users'),
                     new LabelOptions('Customers','/users'),
                     new LabelOptions('Shipping','/users'),
                     new LabelOptions('Sales Report','/users'),
                     new LabelOptions('Orders','/users'),
                     new LabelOptions('Articles','/users'),
                     new LabelOptions('Menu','/'),
                     new LabelOptions('Settings','/')];

    const str = "/myshopadmin"
  return (

        <div className='__admin_top_bar'>
            <img src="https://w7.pngwing.com/pngs/288/368/png-transparent-red-and-white-shop-illustration-text-brand-illustration-shop-text-retail-rectangle.png" />
            
            <div className='__admin_top_bar_labels_div'>
                {options.map((item,idx)=> (<div key={idx} className='__admin_top_bar_labels'><Link to={str+item.link}>{item.label}</Link></div>))}
            </div>
        </div>
  
  
  )
}

export default AdminTopBar 