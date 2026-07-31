/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */


const employeeName = "Soni";
const basicSalary = 5000000;
const overtimeHours = 12;
const overtimeRate = 50000;

const overtimePay = overtimeHours * overtimeRate;
const bonus = overtimeHours > 10 ? 3000000 : 0;
const finalSalary = overtimePay + bonus;

console.log('Employee name : $ {employeename')
