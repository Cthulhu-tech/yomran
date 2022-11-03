import { useState, useEffect } from 'react'
import { Image } from '../image/image'
import './input.scss'

import onvisible from '../../assets/onvisible.svg'
import visible from '../../assets/visible.svg'
import { ImageType } from '../image/type'

export const InputPassword = () => {

    const [show, setShow] = useState(false)
    const [imgData, setImageData] = useState<ImageType>({width: '24px', alt: 'show', src: onvisible})

    useEffect(() => {setImageData({width: '24px', alt: 'show', src: show ? visible : onvisible})}, [show])

    const showHandler = () => setShow(!show)

    return <div className='password-container'>
        <div className='input-container'>
            <input type={show ? "password" : "text"} className="input input-text"/>
            <div onClick={showHandler}>
                <Image {...imgData}/>
            </div>
        </div>
    </div>
}