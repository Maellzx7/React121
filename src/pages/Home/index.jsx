
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sobre from '../Sobre'
import { Link } from 'react-router-dom'
import imagemLegal from '/slakkk.svg'


function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>
                    <p>
                        Olá, somos <br />
                        <span>José Paulo e Anthony!</span> <br />
                        Devs Full Stack
                    </p>
                    <Link to="/sobre" className='btn btn-red'>
                       Saiba mais sobre nós! 
                    </Link>
                </div>
                <figure>
                    <img Classnme='img-home' src={imagemLegal} alt="imagem da home" />
                </figure>
            </section>
            <Footer />
        </>
    )
}
export default Home
