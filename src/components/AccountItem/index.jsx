function AccountItem() {
    return (
        <>
        <li className='flex flex-row items-center cursor-pointer px-4 py-2 hover:bg-slate-100'>
            <span className='w-[40px] h-[40px] rounded-full overflow-hidden me-2'>
                <img 
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/502934a1538a4d5b78e765131e2f4769~c5_300x300.webp?lk3s=a5d48078&nonce=8683&refresh_token=53026b34fe916f82a6c766df6ada700a&x-expires=1724565600&x-signature=TT5rf%2FNIcr9H4UNl6oegxsNTb2c%3D&shp=a5d48078&shcp=c1333099" 
                    alt="Avatar" 
                    className='w-full h-full object-cover' 
                />
            </span>
            <div className={'w-full'}>
                <div className={'flex flex-col'}>
                    <h1 className={'font-semibold text-[1rem] '}>HoangBao</h1>
                    <p className={'text-[14px] leading-[18px] text-stone-500'} >hoang bao</p>
                </div>
            </div>
        </li>
        </>
    );
}

export default AccountItem;