export {};

abstract class Department {
  // private name: string;
  static fiscalYear = 2020;

  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  static createEmployee(name: string) {
    return { name };
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  arrow = () => {
    console.log("Success");
  };
}

// const department = new Department("id: 1", "accounting");

const employee1 = Department.createEmployee("Max");

// const accountingCopy = { name: "Billing", describe: accounting.describe };

// accountingCopy.describe();

// department.addEmployee("Max");
// department.addEmployee("Manu");
// department.printEmployeeInformation();

// department.arrow();

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT DEP");
  }
}

const it = new ITDepartment("id: 2", ["Nick"]);

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("id: 3", []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === "Max") {
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

  describe() {
    console.log("Accounting department - ID: " + this.id);
  }
}

// const accounting = new AccountingDepartment("id: 3", []);
const accounting = AccountingDepartment.getInstance();
