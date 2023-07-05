interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperience?: number;
  location: string;
  [key:string]: any;
}