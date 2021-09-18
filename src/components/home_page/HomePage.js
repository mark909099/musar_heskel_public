import React from 'react';
import Navbar from '../Navbar';
import HomeTop from './HomeTop';
import Footer from './../Footer';
import CategoriesOfStories from './CategoriesOfStories';


const HomePage = () => {
    return (
<div>
<Navbar />
<HomeTop />
<CategoriesOfStories />
<Footer />
</div>
    )
}

export default HomePage
