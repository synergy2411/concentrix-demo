import { PersonInfo} from './person';
export class PersonLogic {
  person: PersonInfo;
  persons: Array<any>;
  constructor() {
    this.person = new PersonInfo(0, '', '', '', '', '');
    this.persons = new Array();
    this.persons.push(
      new PersonInfo(
        101,
        'Mahesh',
        'Bavdhan',
        'Pune',
        'Maharashtra',
        'Self-Employeed'
      )
    );
    this.persons.push(
      new PersonInfo(
        102,
        'Sachin',
        'Kothrud',
        'Pune',
        'Maharashtra',
        'Employeed'
      )
    );
  }
  getPersonsInfo(): Array<string> {
    return this.persons;
  }
  savePersonInfo(per: PersonInfo): Array<any> {
    this.persons.push(per);
    return this.persons;
  }
}