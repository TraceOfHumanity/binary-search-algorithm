import React, { useState, useEffect } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';


const Search = () => {
    const [ready, setReady] = useState(false);
    const [win, setWin] = useState(false);
    const [attempts, setAttempts] = useState(1);
    const [lowerBound, setLowerBound] = useState(0);
    const [upperBound, setUpperBound] = useState(101);
    const [number, setNumber] = useState(Math.round(((lowerBound + upperBound) / 2)) - 1);
    const [selectedOption, setSelectedOption] = useState("100")

    const [showPopup, setShowPopup] = useState(false);

    function show() {
        setReady(true);
    }

    console.log('lowerBound', lowerBound)
    console.log('upperBound', upperBound)
    console.log('number', number)
    console.log('attempts', attempts)


    useEffect(() => {
        setNumber(Math.round((lowerBound + upperBound) / 2) - 1);
    }, [lowerBound, upperBound]);

    useEffect(() => {
        const isPopupShown = localStorage.getItem("popupShown");
        if (!isPopupShown) {
            setShowPopup(true);
            localStorage.setItem("popupShown", "true");
        }
    }, []);

    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-[2] rounded border border-sky-800 backdrop-blur-sm from-sky-600 to-red-800 bg-gradient-to-r bg-clip-text text-transparent bg-200% animate-gradient text-xl p-2 w-full max-w-2xl'>
            <p className={`${ready ? 'hidden' : 'text-center'}`}>Загадайте число від 0 до
                <span className='relative inline-block'>
                    {showPopup && <AiOutlineArrowDown className='animate-bounce absolute bottom-full left-1/3 w-6 h-6 text-sky-900 ' />}
                    <select
                        className='border-none bg-transparent w-fit text-center font-extrabold from-sky-600 to-red-800 bg-gradient-to-r bg-clip-text text-transparent bg-200% animate-gradient'
                        onChange={(e) => {
                            const selectedValue = e.target.value;
                            setSelectedOption(selectedValue);
                            setUpperBound(parseInt(selectedValue, 10) + 1); // Оновити upperBound
                        }}
                        value={selectedOption}
                    >
                        <option className='bg-none text-slate-950' value="100">100</option>
                        <option className='bg-none text-slate-950' value="1000">1K</option>
                        <option className='bg-none text-slate-950' value="10000">10K</option>
                        <option className='bg-none text-slate-950' value="100000">100K</option>
                        <option className='bg-none text-slate-950' value="1000000">1M</option>
                        <option className='bg-none text-slate-950' value="10000000">10M</option>
                        <option className='bg-none text-slate-950' value="100000000">100M</option>
                        <option className='bg-none text-slate-950' value="1000000000">1B</option>
                    </select>
                </span>
                і я спробую вгадати його за {`${Math.round(Math.log2(upperBound))} спроб(и)`} або менше
            </p>
            {/* <p className={`${ready ? 'hidden' : ''}`}>загадайте число від 0 до {`${upperBound - 1}`} </p> */}
            <button onClick={show} className={`${ready ? 'hidden' : 'block border border-sky-900 font-bold py-2 px-4 rounded mx-auto'}`}>Почати</button>
            <div className={`${ready ? 'block' : 'hidden'}`}>
                <p className={`${!win ? 'block text-sm lg:text-xl font-bold text-center' : 'hidden'}`}>
                    ваше число {number} ?
                </p>
                <div className="flex gap-1 text-base lg:text-xl flex-col lg:flex-row lg:justify-center">
                    <button onClick={() => {
                        setAttempts(attempts + 1);
                        setLowerBound(number);
                        setNumber(Math.floor((number + upperBound) / 2));
                    }} className={`${!win ? 'border border-sky-900 font-bold py-2 px-4 rounded' : 'hidden'}`}>{number} замало</button>
                    <button onClick={() => {
                        setWin(true);
                    }} className={`${!win ? 'border border-sky-900 font-bold py-2 px-4 rounded' : 'hidden'}`}>так {number}</button>
                    <button onClick={() => {
                        setAttempts(attempts + 1);
                        setUpperBound(number);
                        setNumber(Math.floor((lowerBound + number) / 2));
                    }} className={`${!win ? 'border border-sky-900 font-bold py-2 px-4 rounded' : 'hidden'}`}>{number} забагато</button>
                </div>
                <p className={`${win ? 'block text-center' : 'hidden'}`}>
                    Я вгадав ваше число {number} за {attempts} {`${attempts == 1 ? 'спробу' : 'спроб(и)'}`}!
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className={`${win ? 'block border border-sky-900 font-bold py-2 px-4 rounded mx-auto' : 'hidden'}`}>рестарт</button>
            </div>

        </div>
    );
}

export default Search;
