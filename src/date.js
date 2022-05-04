import moment from 'moment';

const getCurrentDate = () => {
  return moment().format('YYYY-MM-DD');
};


export default getCurrentDate;