import classnames from 'classnames/bind'
import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'

const cx = classnames.bind(styles)

function Header() {
    return ( 
        <>
            <header className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('left')}>
                        <img src={logo} alt="tiktok" />
                    </div>
                    <div className={cx('center')}>
                        <form className={cx('searchForm')} action='/search'>
                            <input type="text" placeholder='Search' spellCheck={false}/>
                            <div className="xbtn"></div>
                            <span className={cx('spanSpliter')}> </span>
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