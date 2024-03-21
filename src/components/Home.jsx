import { Link } from 'react-router-dom';
import Foto from './Foto/Logo.png';

function Home() {
    return (
        <header className="bg-red h-24 ">
            <div className='items-center flex p-6'>
                <div className=''> 
                    <img src={Foto}/>
                </div>
                <div className='grow'>
                    <div className='justify-center flex gap-2 md:gap-24'>
                        <Link hrefLang='home' className="border-b border-black">Beranda</Link>
                        <Link hrefLang='home'>Profile</Link>
                        <Link hrefLang='home'>Publikasi</Link>
                    </div>
                </div>
                <div>
                    <div className='mr-32 flex'>IND  |   ENG </div>
                </div>
            </div>
        </header>
    );
}

export default Home;
