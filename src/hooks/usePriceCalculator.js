/* eslint-disable no-useless-return */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectOrder } from '../store/selectors/orderSelectors';
import { setOrderPrice } from '../store/reducers/orderReducer';
import { selectRate } from '../store/selectors/rateSelectors';

export default function usePriceCalculator() {
    const orderRedux = useSelector(selectOrder);
    const rateRedux = useSelector(selectRate);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);

    const calculatePrice = () => {
        if (orderRedux.dateTo && orderRedux.dateFrom) {
            const rate = rateRedux.data.filter(item => item.rateTypeId.id === orderRedux.rateId.id);
            const min = (orderRedux?.dateTo - orderRedux?.dateFrom);
            let tempPrice = 0;
            switch (orderRedux.rateId.unit) {
                case 'мин': {
                    tempPrice = rate[0]?.price * (min / 1000 / 60);
                    break;
                }
                case 'сутки': {
                    tempPrice = rate[0]?.price * Math.ceil(min / 1000 / 60 / 60 / 24);
                    break;
                }
                case '7 дней':
                    tempPrice = rate[0]?.price * Math.ceil(min / 1000 / 60 / 60 / 24 / 7);
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
        dispatch(setOrderPrice(price));
    }, [price]);

    return { calculatePrice };
}