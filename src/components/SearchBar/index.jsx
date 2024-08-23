import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,faSpinner,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import AccountItem from '../AccountItem'

function SearchBar() {
    const [inputValue,setInputValue] = useState('');
    const [menuVisable,setMenuVisable] = useState(false);
    const inputRef = useRef(null);
    const menuVisableRef = useRef(null);
    useEffect(()=>{
        if(inputValue.trim() !== '')
            setMenuVisable(true)
        else 
            setMenuVisable(false)
    },[inputValue])
    useEffect(()=>{
        function handleOpenMenuEv(event){
            if((inputRef.current && inputRef.current.contains(event.target)) && inputRef.current.value.trim() !== '')
                setMenuVisable(true)
        }
        function handleRemoveMenuEv(event){
            if(
                (inputRef.current && !inputRef.current.contains(event.target))
                &&
                (menuVisableRef.current && !menuVisableRef.current.contains(event.target))
            )
                setMenuVisable(false)             
        }
        window.addEventListener('mousedown',handleOpenMenuEv)
        window.addEventListener('mousedown',handleRemoveMenuEv)
        return () => {
            window.removeEventListener('mousedown',handleOpenMenuEv)
            window.removeEventListener('mousedown', handleRemoveMenuEv);
        };
    },[])

    return (
        <div className={'min-w-[200px] w-[516px] px-2'}>
            <div className={'relative'}>
                <form className={'group flex flex-row items-center overflow-hidden px-4 py-3 rounded-[92px] bg-stone-200 focus-within:search-border-active hover:search-border-active'} action='/search'>
                    <input
                    className={'w-full bg-transparent text-black leading-[21px] '}
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange = {(e) => setInputValue(e.target.value)}
                    placeholder='Search' spellCheck={false}/>
                    <div className="clear text-[0px]">
                        <FontAwesomeIcon icon={faCircleXmark} className="text-stone-300 mx-3 size-4" />
                    </div>
                    {/* <FontAwesomeIcon icon={faSpinner} /> */}
                    <span className={'w-[1px] h-[28px] -my-[3px] bg-stone-300'}> </span>
                    <button type="submit" className={'py-[11px] ps-3 pe-4 -my-3 -me-4 text-[0px] cursor-pointer group-hover:bg-stone-400'}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={'w-[24px] h-[24px]'} />
                    </button>
                </form>
                {menuVisable && (
                    <ul 
                    ref={menuVisableRef}
                    className={'absolute top-[53px] border shadow-lg box-border rounded-lg w-full py-1 overflow-hidden max-h-SearchdropDownMenu'} role='listbox'>
                        <li className={'flex flex-row items-center cursor-pointer px-4 py-2 hover:bg-slate-100'} >
                            <div className={'text-sm pe-2'}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={'w-[15px] h-[15px]'} />
                            </div>
                            <div className="">
                                <h1>{inputValue}</h1>
                            </div>
                        </li>
                        <p className={'px-1 text-[14px] text-stone-500 font-semibold'}>Accounts</p>
                            <AccountItem />
                    </ul> 
                )}
            </div>
    </div>
    )
}

export default SearchBar