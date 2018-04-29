import moment from 'moment';
const reportReducerDefaultState = [];

export default (state = reportReducerDefaultState, action) => {
    switch (action.type) {
        case 'REPORT_ACCOUNTS':
            return action.reports.map((t) => {
                return {
                    labels: moment.unix(t.date / 1000).format("DD MMM, YY"),
                    series: Object.keys(t.visitors).length
                };
            });

        default:
            return state;
    }
};