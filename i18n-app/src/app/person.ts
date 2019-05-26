export class PersonInfo {
    constructor(
        public PersonId: number,
        public PersonName: string,
        public Address: string,
        public City: string,
        public State: string,
        public Occupation:  string
    ){}
  }
  
  export const States: Array<string> = [
    'Maharashtra',
    'Telengana',
    'Karnataka',
    'Gujarat',
    'Rajasthan'
  ];
  export const Occupations:Array<string> = [
    'Employeed','Self-Employeed','Un-Employeed'
  ];