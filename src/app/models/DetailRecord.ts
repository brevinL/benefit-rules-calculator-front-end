import { Money } from './Money';
import { Instruction } from './Instruction';
import { Task } from './Task';

export interface IDetailRecord {
	person_id: number;
	// earliest_retirement_age_task: Task;
	// normal_retirement_age_task: Task;
	average_indexed_monthly_covered_earning_task: Task;
	basic_primary_insurance_amount_task: Task;
	wep_primary_insurance_amount_task: Task;
	average_indexed_monthly_non_covered_earning_task: Task;
	monthly_non_covered_pension_task: Task;
	wep_reduction_task: Task;
	final_primary_insurance_amount_task: Task;
	delay_retirement_credit_task: Task;
	early_retirement_reduction_task: Task;
	benefit_task: Task;
	government_pension_offset_task: Task;
	spousal_insurance_benefit_task: Task;
	survivor_insurance_benefit_task: Task;
}

export class DetailRecord implements IDetailRecord {
	person_id: number;
	// earliest_retirement_age_task: Task;
	// normal_retirement_age_task: Task;
	average_indexed_monthly_covered_earning_task: Task;
	basic_primary_insurance_amount_task: Task;
	wep_primary_insurance_amount_task: Task;
	average_indexed_monthly_non_covered_earning_task: Task;
	monthly_non_covered_pension_task: Task;
	wep_reduction_task: Task;
	final_primary_insurance_amount_task: Task;
	delay_retirement_credit_task: Task;
	early_retirement_reduction_task: Task;
	benefit_task: Task;
	government_pension_offset_task: Task;
	spousal_insurance_benefit_task: Task;
	survivor_insurance_benefit_task: Task;

	constructor(obj: IDetailRecord) {
		this.person_id = obj.person_id;
		// this.earliest_retirement_age_task = obj.earliest_retirement_age_task;
		// this.normal_retirement_age_task = obj.normal_retirement_age_task;
		this.average_indexed_monthly_covered_earning_task = new Task(obj.average_indexed_monthly_covered_earning_task);
		this.basic_primary_insurance_amount_task = new Task(obj.basic_primary_insurance_amount_task);
		this.wep_primary_insurance_amount_task = new Task(obj.wep_primary_insurance_amount_task);
		this.average_indexed_monthly_non_covered_earning_task = new Task(obj.average_indexed_monthly_non_covered_earning_task);
		this.monthly_non_covered_pension_task = new Task(obj.monthly_non_covered_pension_task);
		this.wep_reduction_task = new Task(obj.wep_reduction_task);
		this.final_primary_insurance_amount_task = new Task(obj.final_primary_insurance_amount_task);
		this.delay_retirement_credit_task = new Task(obj.delay_retirement_credit_task);
		this.early_retirement_reduction_task = new Task(obj.early_retirement_reduction_task);
		this.benefit_task = new Task(obj.benefit_task);
		this.government_pension_offset_task = new Task(obj.government_pension_offset_task);
		this.spousal_insurance_benefit_task = new Task(obj.spousal_insurance_benefit_task);
		this.survivor_insurance_benefit_task = new Task(obj.survivor_insurance_benefit_task);
	}

	get procedure() {
		let tasks = [
			{name: "Average Indexed Monthly Covered Earning", task: this.average_indexed_monthly_covered_earning_task, order: 1},
			{name: "Basic Primary Insurance Amount", task: this.basic_primary_insurance_amount_task, order: 2},
			{name: "Windfall Elimination Provision's Primary Insurance Amount", task: this.wep_primary_insurance_amount_task, order: 3},
			{name: "Average Indexed Monthly Non-Covered Earning", task: this.average_indexed_monthly_non_covered_earning_task, order: 4},
			{name: "Monthly Non-Covered Pension", task: this.monthly_non_covered_pension_task, order: 5},
			{name: "Windfall Elimination Provision's Reduction", task: this.wep_reduction_task, order: 6},
			{name: "Final Primary Insurance Amount", task: this.final_primary_insurance_amount_task, order: 7},
			{name: "Delay Retirement Credit", task: this.delay_retirement_credit_task, order: 8},
			{name: "Early Retirement Reduction", task: this.early_retirement_reduction_task, order: 9},
			{name: "Benefit", task: this.benefit_task, order: 10},
			{name: "Government Pension Offset", task: this.government_pension_offset_task, order: 11},
			{name: "Spousal Insurance Benefit", task: this.spousal_insurance_benefit_task, order: 12},
			{name: "Survivor Insurance Benefit", task: this.survivor_insurance_benefit_task, order: 13}
		];
		return tasks.filter(t => t.task.instruction_set.length > 0);
	}
}