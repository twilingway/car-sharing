/* eslint-disable no-useless-return */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSelect, setOrderLatStepValidate } from '../store/order';

export default function useStepValidator() {
    const orderRedux = useSelector(getOrderSelect);
    const dispatch = useDispatch();
    const [lastStepValidate, setLastStepValidate] = useState(orderRedux.lastStepValidate);


    const checkLastStepValidate = () => {

        if (orderRedux.dateFrom === '' || orderRedux.dateTo === '') {
            setLastStepValidate(2);
        }

        if (orderRedux.cityId.id === null || orderRedux.pointId.id === null) {
            setLastStepValidate(0);
        }

        if (orderRedux.cityId.id !== null && orderRedux.pointId.id !== null) {
            setLastStepValidate(1);

            if (orderRedux.carId.id !== null) {
                setLastStepValidate(2);

                if (orderRedux.dateFrom !== '' && orderRedux.dateTo !== '') {
                    setLastStepValidate(3);
                }
            }
        }



    };

    useEffect(() => {

        console.log('lastStepValidate :>> ', lastStepValidate);
        dispatch(setOrderLatStepValidate(lastStepValidate));

    }, [lastStepValidate]);

    return { checkLastStepValidate };
}