import { Money } from './Money';
import { Relationship } from './Relationship';
import { Role } from './Role';
import { Record } from './Record';

export interface IRespondent {
	id?: number;
	alias?: string;
	year_of_birth: number;
	years_of_covered_earnings: number;
	annual_covered_earning: Money;
	years_of_non_covered_earnings: number;
	annual_non_covered_earning: Money;
	fraction_of_non_covered_aime_to_non_covered_pension: number;
	early_retirement_reduction: number;
	delay_retirement_credit: number;
	survivor_early_retirement_reduction: number;
	spousal_early_retirement_reduction: number;
	record?: Record;
}

export class Respondent implements IRespondent {
	public id?: number;
	public alias?: string;
	public year_of_birth: number;
	public years_of_covered_earnings: number;
	public annual_covered_earning: Money;
	public years_of_non_covered_earnings: number;
	public annual_non_covered_earning: Money;
	public fraction_of_non_covered_aime_to_non_covered_pension: number;
	public early_retirement_reduction: number;
	public delay_retirement_credit: number;
	public survivor_early_retirement_reduction: number;
	public spousal_early_retirement_reduction: number;
	public record?: Record;

	constructor(obj: IRespondent) {
		this.id = obj.id;
		this.alias = obj.alias;
		this.year_of_birth = obj.year_of_birth;
		this.years_of_covered_earnings = obj.years_of_covered_earnings;
		this.annual_covered_earning = obj.annual_covered_earning;
		this.years_of_non_covered_earnings = obj.years_of_non_covered_earnings;
		this.annual_non_covered_earning = obj.annual_non_covered_earning;
		this.fraction_of_non_covered_aime_to_non_covered_pension = obj.fraction_of_non_covered_aime_to_non_covered_pension;
		this.early_retirement_reduction = obj.early_retirement_reduction;
		this.delay_retirement_credit = obj.delay_retirement_credit;
		this.survivor_early_retirement_reduction = obj.survivor_early_retirement_reduction;
		this.spousal_early_retirement_reduction = obj.spousal_early_retirement_reduction;
		this.record = obj.record;
	}
}