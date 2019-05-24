import { IUser } from './user.model';

export const USER_DATA : IUser[]  = [{
    firstName : "Bill",
    lastName : "Gates",
    isWorking : true,
    income : 50000,
    dob : new Date("Dec 21, 1965"),
    company : "Microsoft",
    vote : 120,
    image : 'assets/images/bill.jpg'
},{
    firstName : "Steve",
    lastName : "Jobs",
    isWorking : false,
    income : 0,
    dob : new Date("Jan 2, 1965"),
    company : "Apple",
    vote : 180,
    image : 'assets/images/steve.png'
},{
    firstName : "Tim B.",
    lastName : "Lee",
    isWorking : true,
    income : 40000,
    dob : new Date("Aug 1, 1965"),
    company : "World Wide Web",
    vote : 150,
    image : 'assets/images/tim.jpg'
}]