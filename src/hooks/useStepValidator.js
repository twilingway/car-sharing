/* eslint-disable no-useless-return */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectOrder } from '../store/selectors/orderSelectors';
import { setOrderLatStepValidate, deleteOrderService, deleteOrderColor, deleteOrderCar, deleteOrderDate, deleteOrderRate } from '../store/reducers/orderReducer';

export default function useStepValidator() {
    const orderRedux = useSelector(selectOrder);
    const dispatch = useDispatch();
    const [lastStepValidate, setLastStepValidate] = useState(orderRedux.lastStepValidate);


    const checkLastStepValidate = () => {

        if (orderRedux.dateFrom === null || orderRedux.dateTo === null) {
            setLastStepValidate(2);
        }

        if (orderRedux.cityId.id === null || orderRedux.pointId.id === null) {
            setLastStepValidate(0);
            dispatch(deleteOrderCar());
            dispatch(deleteOrderColor());
            dispatch(deleteOrderRate());
            dispatch(deleteOrderDate());
            dispatch(deleteOrderService());
        }

        if (orderRedux.cityId.id !== null && orderRedux.pointId.id !== null) {
            setLastStepValidate(1);

            if (orderRedux.carId.id !== null) {
                setLastStepValidate(2);

                if (orderRedux.dateFrom !== null && orderRedux.dateTo !== null) {
                    setLastStepValidate(3);
                }
            }
        }



    };

    useEffect(() => {
        dispatch(setOrderLatStepValidate(lastStepValidate));
    }, [lastStepValidate]);

    return { checkLastStepValidate };
}