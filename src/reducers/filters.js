//FILTER REDUCER
const rFiltersReducerDefaultState = {
    startDate: undefined,
    endDate: undefined
};
const filtersReducerDefaultState = {
    text: ''
};

export const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        default:
            return state;
    }
};
export const rFiltersReducer = (state = rFiltersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
};