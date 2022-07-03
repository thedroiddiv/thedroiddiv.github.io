import { useEffect, useState, useRef } from "react"
import NET from 'vanta/dist/vanta.net.min';
import WAVES from 'vanta/dist/vanta.waves.min';

export const useVantaNet = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                color: 0x008394,  
                backgroundColor: 0x0,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                maxDistance: 18.00,
                spacing: 15.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return myRef
}

export const useVantaWave = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x0,
                shininess: 37.00,
                waveHeight: 11.00,
                waveSpeed: 0.90,
                zoom: 1.15
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return myRef
}