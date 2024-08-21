import classnames from 'classnames/bind'
import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,faSpinner,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const cx = classnames.bind(styles)

function Header() {
    return ( 
        <>
            <header className={'h-[60px] border-b-2 fixed top-0 z-30 w-full'}>
                <div className={'flex h-full flex-row items-center content-between ps-4 pe-6' }>
                    <div className={'min-w-[300px]'}>
                        <img src={logo} alt="tiktok" />
                    </div>
                    <div className={'min-w-[200px] w-[516px] px-2'}>
                        <form className={'flex flex-row items-center overflow-hidden px-4 py-3 rounded-[92px] bg-stone-200'} action='/search'>
                            <input className={'w-full bg-transparent text-black leading-[21px]'} type="text" placeholder='Search' spellCheck={false}/>
                            <div className="clear">
                                {/* <FontAwesomeIcon icon={faCircleXmark} className="text-stone-300" /> */}
                            </div>
                            {/* <FontAwesomeIcon icon={faSpinner} /> */}
                            <span className={'w-[1px] h-[28px] -my-[3px] bg-stone-300'}> </span>
                            <button type="submit" className={'py-[11px] ps-3 pe-4 -my-3 -me-4 text-[0px] cursor-pointer hover:bg-stone-400'}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={'w-[24px] h-[24px]'} />
                            </button>
                        </form>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('upload')}></div>
                        <div className={cx('message')}></div>
                        <div className={cx('inbox')}></div>
                        <div className={cx('menu')}></div>
                    </div>
                </div>
            </header>
        </> 
     );
}

export default Header;