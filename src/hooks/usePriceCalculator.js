/* eslint-disable no-useless-return */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectOrder } from '../store/selectors/orderSelectors';
import { setOrderDuration, setOrderPrice } from '../store/reducers/orderReducer';
import { selectRate } from '../store/selectors/rateSelectors';

export default function usePriceCalculator() {
    const orderRedux = useSelector(selectOrder);
    const rateRedux = useSelector(selectRate);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);
    const [duration, setDuration] = useState(null);

    const calculatePrice = () => {
        if (orderRedux.dateTo && orderRedux.dateFrom) {
            const rate = rateRedux.data.filter(item => item.rateTypeId.id === orderRedux.rateId.id);
            const time = (orderRedux?.dateTo - orderRedux?.dateFrom);

            let tempPrice = 0;
            switch (orderRedux.rateId.unit) {
                case 'мин': {
                    tempPrice = rate[0]?.price * (time / 1000 / 60);
                    setDuration(`
                     ${Math.floor(time / (1000 * 60 * 60 * 24))}д
                     ${Math.floor((time / (1000 * 60 * 60)) % 24)}ч
                     ${Math.floor((time / (1000 * 60)) % 60)}мин`
                    );
                    break;
                }
                case 'сутки': {
                    tempPrice = rate[0]?.price * Math.ceil(time / 1000 / 60 / 60 / 24);
                    setDuration(`${Math.ceil(time / (1000 * 60 * 60 * 24))}д 0ч`);
                    break;
                }
                case '7 дней':
                    tempPrice = rate[0]?.price * Math.ceil(time / 1000 / 60 / 60 / 24 / 7);
                    setDuration(`${Math.ceil(time / (1000 * 60 * 60 * 24) / 7) * 7}д`);
                    break;
                default:
                    break;
            }

            if (orderRedux.isFullTank) {
                tempPrice += 500;
            }
            if (orderRedux.isNeedChildChair) {
                tempPrice += 200;
            }
            if (orderRedux.isRightWheel) {
                tempPrice += 1600;
            }
            setPrice(tempPrice);
        }
    };

    useEffect(() => {
        dispatch(setOrderDuration(duration));
        dispatch(setOrderPrice(Math.ceil(price)));
    }, [price, duration]);

    return { calculatePrice };
}