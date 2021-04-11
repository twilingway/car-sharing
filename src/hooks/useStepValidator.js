import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderSelect, setOrderLatStepValidate } from '../store/order';

export default function useStepValidator() {
    const orderRedux = useSelector(getOrderSelect);
    const dispatch = useDispatch();
    const [lastStepValidate, setLastStepValidate] = useState(orderRedux.lastStepValidate);


    const checkLastStepValidate = () => {
        if (orderRedux.cityId.id !== null && orderRedux.pointId.id !== null) {
            console.log('setLastStepValidate 1:>> ',);
            setLastStepValidate(1);
        } else {
            console.log('setLastStepValidate 0:>> ',);

            setLastStepValidate(0);
            return;
        }
        if (orderRedux.carId.id !== null) {
            console.log('setLastStepValidate 2:>> ',);
            setLastStepValidate(2);
        }
    };

    useEffect(() => {

        console.log('lastStepValidate :>> ', lastStepValidate);
        dispatch(setOrderLatStepValidate(lastStepValidate));

    }, [lastStepValidate]);

    return { checkLastStepValidate };
}