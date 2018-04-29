import moment from 'moment';
//Get visible accounts

export const selectSignIn = (accounts, { text, sortBy, startDate, endDate }) => {
    return accounts.filter((account) => {
        const createdAtMoment = moment(account.createdAt);
        const signInMoment = moment(account.signIn);
        const signOutMoment = moment(account.signOut);

        const signMatch = (signInMoment && !signOutMoment) ? false : true;
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = account.fullName.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch && signMatch;
    });
};

export const selectSignOut = (accounts, { text, sortBy, startDate, endDate }) => {
    return accounts.filter((account) => {
        const createdAtMoment = moment(account.createdAt);
        const signInMoment = moment(account.signIn);
        const signOutMoment = moment(account.signOut);

        const signMatch = (signInMoment && !!signOutMoment) ? false : true;
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = account.fullName.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch && signMatch;
    });
};