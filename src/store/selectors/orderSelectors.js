export const selectOrderStep = state => state.order.step;
export const selectOrderLastStep = state => state.order.lastStepValidate;

export const selectOrder = state => state.order;

export const selectOrderCar = state => state.order.carId;

export const selectOrderCity = state => state.order.cityId;
export const selectOrderPoint = state => state.order.pointId;
export const selectOrderCarColors = state => state.order.carId.colors;

export const selectOrderSelectedCategory = state => state.order.selectedCategory;