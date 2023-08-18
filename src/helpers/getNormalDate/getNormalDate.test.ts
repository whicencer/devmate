import { describe, expect, test } from 'vitest';
import { getNormalDate } from './';

const now = new Date();
const dayAgo = new Date(`Wed Aug ${now.getDate()-1} 2023 16:53:00`);
const tommorow = new Date(`Fri Aug ${now.getDate()+1} 2023 16:53:00`);
const lastWeek = new Date(`Thu Aug ${now.getDate()-7} 2023 16:53:00`);
const date = new Date(`Thu Jun 17 2023 16:53:00`);

describe('getNormalDate module', () => {
	test('Should return 0 minutes ago', () => {
		expect(getNormalDate(now)).toBe('0 minutes ago');
	});
	test('Should return Yesterday at...', () => {
		expect(getNormalDate(dayAgo)).toBe(`Yesterday at ${dayAgo.getHours()}:${dayAgo.getMinutes()}`);
	});
	test('Should return DD M YYYY', () => {
		expect(getNormalDate(tommorow)).toBe(`${now.getDate()+1} Aug ${now.getFullYear()}`);
	});
	test('Should return Last week at...', () => {
		expect(getNormalDate(lastWeek)).toBe(`Last week at ${lastWeek.getHours()}:${lastWeek.getMinutes()}`);
	});
	test('Should return DD M YYYY', () => {
		expect(getNormalDate(date)).toBe('17 Jun 2023');
	});
});