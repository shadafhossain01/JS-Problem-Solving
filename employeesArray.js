///////////////////////////////////////////////////////////////////

// employees array: An array of emplyees working in a department.
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 4, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

// departments array: An array of departments where emplyees work.
const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

///////////////////////////////////////////////////////////////////

// Can you filter employees who work in the "Engineering" department?

let engEmployee=employees.filter((employee)=> employee.departmentId==2);

// console.log(engEmployee);

///////////////////////////////////////////////////////////////////

// Create a new array that combines employee names and department names in the format: "Alice (HR)".

let format=employees.map((employe)=>{
    let c= departments.find((department)=>employe.departmentId==department.id)
            return `${employe.name} (${c.name})`
    })

// console.log(format);

///////////////////////////////////////////////////////////////////

// Find the highest salary among employees.

let highest=employees.reduce((a,b)=>{
return a.salary>b.salary?a:b;

})

// console.log(highest);

///////////////////////////////////////////////////////////////////

// Check if there is at least one employee in the "Sales" department.

let result =employees.some((employe)=>employe.departmentId===4)
// console.log(result)

///////////////////////////////////////////////////////////////////

// Write a function to filter employees earning more than 6000.

function fill(employees){
let emp= employees.filter((employe)=>employe.salary>6000);
return emp;
}
// console.log(fill(employees));

///////////////////////////////////////////////////////////////////

// Create an array of employee names only.

let singleEmploy=employees.map((employe)=>employe)
 let arr=[];
 for(let name of singleEmploy){
    arr.push(name.name)
 }
// console.log(arr);

///////////////////////////////////////////////////////////////////

// Get a list of names of employees earning more than 6000.

let person=employees.filter((employe)=>employe.salary>6000)
// console.log(person);

///////////////////////////////////////////////////////////////////

// Increment each employee's salary by 10%

let salary=employees.map((employe)=>employe.salary*=1.1)
// console.log(salary);

///////////////////////////////////////////////////////////////////