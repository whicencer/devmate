import { describe, expect, test } from 'vitest';
import { getNormalDate } from './';

const date1 = new Date(`Wed Aug 13 2023 16:53:00`);
const date2 = new Date(`Fri Jul 23 2013 16:53:00`);
const date3 = new Date(`Thu Aug 21 2023 16:53:00`);

describe('getNormalDate module', () => {
	test('return formatted string 1', () => {
		expect(getNormalDate(date1)).toBe('13 Aug 2023 at 16:53');
	});
	test('return formatted string 2', () => {
		expect(getNormalDate(date2)).toBe('23 Jul 2013 at 16:53');
	});
	test('return formatted string 3', () => {
		expect(getNormalDate(date3)).toBe('21 Aug 2023 at 16:53');
	});
});