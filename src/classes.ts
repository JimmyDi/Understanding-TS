abstract class Department {
    // private id: string;
    // private name: string;
    static fiscalYear = 2020;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // validation etc.
        // this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    };

    describe(): void {
        console.log('IT Department - ID: ' + this.id);
    }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear, 'abc');
console.log("employee1:", employee1);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();

it.name = "NEW NAME"

// accounting.employees[2] = 'Anna';

// accounting.describe();
it.printEmployeeInformation();
console.log(it);

// const accountingCopy = { name: 's', describe: accounting.describe };
// accountingCopy.describe();

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reprot found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getIntance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(): void {
        console.log('Accounting describe');
    }

    addEmployee(name: string): void {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getIntance();
const accounting2 = AccountingDepartment.getIntance();
console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();

accounting.printEmployeeInformation();