import moment from "moment";

export function convertDatetime(datetime) {return moment.unix(datetime).format('LL')}
