import moment from 'moment';
import _ from "lodash";
//Get visible accounts

export const selectVisitor = (reports, { startDate, endDate }) => {
    return reports.filter((rep) => {
        const createdAtMoment = moment(rep.name);
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment, 'day') : true;
        
        return startDateMatch && endDateMatch;
    });
};

export const selectChartData = (reports) => {
    const output = {};

    _.map(reports, function (subarray) {
        _.map(subarray, function (value, key) {
            if (key === "series"){
                output[key] || (output[key] = [[]]);
                output[key][0].push(value);
            }else{
                output[key] || (output[key] = []);
                output[key].push(value);
            }
        });
    });

    return output;
};