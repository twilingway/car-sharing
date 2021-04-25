import React, { useEffect, useLayoutEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import BreadCrumbsContainer from '../../components/Breadcrumbs';
import Header from '../../components/Header';
import OrderInfoContainer from '../../components/OrderInfo';
import OrderContentContainer from '../../components/OrderContent';
import Basket from '../../components/Basket';
import Loader from '../../components/Loader';
import { fetchOrderById } from '../../store/thunks/orderThunks';
import {
  clearOrder,
  setOrderLatStepValidate,
  setOrderStep,
} from '../../store/reducers/orderReducer';
import fetchOrderStatus from '../../store/thunks/orderStatusThunks';
import { selectOrder } from '../../store/selectors/orderSelectors';
import s from './layout.module.scss';
import { setBasketStatus } from '../../store/reducers/basketReducer';
import selectBasketStatus from '../../store/selectors/basketSelectors';
import StepButtonContainer from '../../components/StepButton';
// import Button from '../../components/Button';

function Layout() {
  const orderId = localStorage.getItem('orderId');
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const orderReducer = useSelector(selectOrder);
  const basketStatus = useSelector(selectBasketStatus);
  // const [isOrderInfoActive, setIsOrderInfoActive] = useState(false);

  useEffect(() => {
    if (orderReducer.id) {
      if (orderReducer.orderStatusId.name === 'cancelled') {
        dispatch(clearOrder());
        if (orderReducer.id === orderId) {
          localStorage.removeItem('orderId');
        }
        history.push('/order');
      }
    }
  }, [orderReducer.id, orderReducer.orderStatusId.name]);

  useLayoutEffect(() => {
    if (orderReducer.isError) {
      if (match.params?.id === orderId) {
        localStorage.removeItem('orderId');
      }
      dispatch(setOrderStep(1));
      dispatch(setOrderLatStepValidate(0));
      history.replace('/order');
    }
  }, [orderReducer.isError]);

  useEffect(() => {
    if (match.params?.id || orderId) {
      dispatch(fetchOrderById(match.params.id || orderId));
      dispatch(setOrderStep(6));
      dispatch(setOrderLatStepValidate(6));
    }
    dispatch(fetchOrderStatus());
  }, []);

  return (
    <section className={s.body}>
      <div className={s.header}>
        <Header />
      </div>
      {(match.params?.id || orderId) &&
      !orderReducer.isError &&
      !orderReducer.id ? (
        <Loader />
      ) : (
        <>
          <div className={s.breadcrumbs}>
            <BreadCrumbsContainer />
          </div>
          <main className={s.main}>
            <section className={s.params}>
              <OrderContentContainer />
              <div className={s.stepButton}>
                <StepButtonContainer order={orderReducer} />
              </div>
            </section>
            <section
              className={cn(s.info, {
                [s.orderInfoActive]: basketStatus === true,
              })}
            >
              <OrderInfoContainer />
            </section>
            <Basket onClick={() => dispatch(setBasketStatus(!basketStatus))} />
          </main>
        </>
      )}
    </section>
  );
}

export default Layout;
