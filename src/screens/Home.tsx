import { Carrousel } from '../components/Carrousel'
import { ServicesOffered } from '../components/ServicesOffered'
import { About } from '../components/About'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/contact/Contact'
import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'

export const Home = () => {
    return (
        <>
            <Header />
            <Carrousel />
            <ServicesOffered />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}
