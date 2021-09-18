import React from 'react'
import AboutInfo from './AboutInfo';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Fade } from 'react-reveal';

export default function AboutPage() {
    return (
<div>
<Fade duration={2000}>
<Navbar />
<AboutInfo />
</Fade>
<Footer />            
</div>
    )
}
