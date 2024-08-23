
import './Header.css'
import logo from '../../assets/images/logo.svg'
import SearchBar from '../SearchBar';




function Header() {
    return ( 
        <>
            <header className={'h-[60px] border-b-2 fixed top-0 z-30 w-full'}>
                <div className={'flex h-full flex-row items-center content-between ps-4 pe-6' }>
                    <div className={'min-w-[300px]'}>
                        <img src={logo} alt="tiktok" />
                    </div>
                    <SearchBar />
                    <div className={'right'}>
                        <div className={'upload'}></div>
                        <div className={'message'}></div>
                        <div className={'inbox'}></div>
                        <div className={'menu'}></div>
                    </div>
                </div>
            </header>
        </> 
     );
}

export default Header;