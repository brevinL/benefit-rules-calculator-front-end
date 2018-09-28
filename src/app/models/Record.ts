import { Money } from './Money';
import { Instruction } from './Instruction';

export interface IRecord {
	person_id: number;
	year_of_birth: number;
	earliest_retirement_age?: number;
	normal_retirement_age?: number;
	average_indexed_monthly_covered_earning?: Money;
	basic_primary_insurance_amount?: Money;
	wep_primary_insurance_amount?: Money;
	average_indexed_monthly_non_covered_earning?: Money;
	monthly_non_covered_pension?: Money;
	wep_reduction?: Money;
	final_primary_insurance_amount?: Money;
	delay_retirement_credit?: number;
	early_retirement_reduction?: number;
	benefit?: Money;
	government_pension_offset?: Money;
	spousal_insurance_benefit?: Money;
	survivor_insurance_benefit?: Money;
}

export class Record implements IRecord {
	public person_id: number;
	public year_of_birth: number;
	public earliest_retirement_age: number;
	public normal_retirement_age: number;
	public average_indexed_monthly_covered_earning: Money;
	public basic_primary_insurance_amount: Money;
	public wep_primary_insurance_amount: Money;
	public average_indexed_monthly_non_covered_earning: Money;
	public monthly_non_covered_pension: Money;
	public wep_reduction: Money;
	public final_primary_insurance_amount: Money;
	public delay_retirement_credit: number;
	public early_retirement_reduction: number;
	public benefit: Money;
	public government_pension_offset: Money;
	public spousal_insurance_benefit: Money;
	public survivor_insurance_benefit: Money;

	constructor(obj: IRecord) {
		this.person_id = obj.person_id;
		this.year_of_birth = obj.year_of_birth;
		this.earliest_retirement_age = obj.earliest_retirement_age;
		this.normal_retirement_age = obj.normal_retirement_age;
		this.average_indexed_monthly_covered_earning = obj.average_indexed_monthly_covered_earning;
		this.basic_primary_insurance_amount = obj.basic_primary_insurance_amount;
		this.wep_primary_insurance_amount = obj.wep_primary_insurance_amount;
		this.average_indexed_monthly_non_covered_earning = obj.average_indexed_monthly_non_covered_earning;
		this.monthly_non_covered_pension = obj.monthly_non_covered_pension;
		this.wep_reduction = obj.wep_reduction;
		this.final_primary_insurance_amount = obj.final_primary_insurance_amount;
		this.delay_retirement_credit = obj.delay_retirement_credit;
		this.early_retirement_reduction = obj.early_retirement_reduction;
		this.benefit = obj.benefit;
		this.government_pension_offset = obj.government_pension_offset;
		this.spousal_insurance_benefit = obj.spousal_insurance_benefit;
		this.survivor_insurance_benefit = obj.survivor_insurance_benefit;
	}
}
