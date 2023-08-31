import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Info: React.FC = () => {
    const [show, setShow] = useState(false);
    const infoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
                setShow(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function toggle() {
        setShow(!show);
    }

    return (
        <div className='top-1/2 right-[105%] mr-2 flex align-middle justify-center z-20'>
            <AiOutlineInfoCircle className='text-white cursor-pointer inline-block w-fit h-fit text-center self-center' onClick={toggle} />
            <div ref={infoRef} className={`${show ? 'fixed  top-1/2 left-1/2 text-center text-white -translate-x-1/2 -translate-y-1/2 border border-cyan-900 rounded p-2 backdrop-blur-3xl w-full max-w-lg' : 'hidden'} `} >
                Бінарний пошук - це ефективний алгоритм пошуку в відсортованому масиві або списку. Основна ідея полягає в тому, щоб зменшити кількість можливих варіантів пошуку вдвічі на кожному кроці, що дозволяє швидше знаходити потрібний елемент.
            </div>
        </div>
    );
}

export default Info;
