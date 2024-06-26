import { defaultCloseTime, defaultOpenTime } from '@/utils/constants';
import { useState, useEffect } from 'react';

interface useGetKitchenTimingProps {
    open_Time?: string;
    close_Time?: string;
}

interface KitchenTimingData {
    kitchenSetup: boolean;
    openTime: string;
    closeTime: string;
}

const useGetKitchenTiming = ({ open_Time, close_Time }: useGetKitchenTimingProps): KitchenTimingData => {
    const [kitchenSetup, setKitchenSetup] = useState(false);
    const [openTime, setOpenTime] = useState(open_Time || defaultOpenTime);
    const [closeTime, setCloseTime] = useState(close_Time || defaultCloseTime);

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); 

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (open_Time !== undefined && close_Time !== undefined) {
            const openHours = parseInt(open_Time.substring(0, 2));
            const openMinutes = parseInt(open_Time.substring(2, 4));
            const closeHours = parseInt(close_Time.substring(0, 2));
            const closeMinutes = parseInt(close_Time.substring(2, 4));

            const formatTime = (hours:any, minutes:any) => {
                const meridiem = hours >= 12 ? 'PM' : 'AM';
                const formattedHours = hours % 12 || 12;
                return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${meridiem}`;
            };

            setOpenTime(formatTime(openHours, openMinutes));
            setCloseTime(formatTime(closeHours, closeMinutes));

            const time = (currentTime.getHours()) * 100 + currentTime.getMinutes();

            if (parseInt(open_Time) <= time && parseInt(close_Time) > time) {
                setKitchenSetup(false);
            } else {
                setKitchenSetup(true);
            }
        } else {
            setOpenTime(defaultOpenTime);
            setCloseTime(defaultCloseTime);
            setKitchenSetup(false);
        }

        window.localStorage.setItem(
            'kitchenTimingData',
            JSON.stringify({ kitchenSetup, openTime, closeTime }));
    }, [open_Time, close_Time, currentTime]);

    return { kitchenSetup, openTime, closeTime };
}

export default useGetKitchenTiming;
