import React from 'react'
import HeroComponent from '../hero/HeroComponent'
import Projects from '../projects/Projects'
import About from '../about/About'
import ContactSection from '../contact/ContactSection'

export default function HomePage() {
    return (
        <>
            <HeroComponent />
            <Projects />
            <About />
            <ContactSection />
        </>
    )
}
