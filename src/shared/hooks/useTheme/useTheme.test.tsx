import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react-hooks';
import { useTheme } from './useTheme';
import ThemeProvider from '../../../app/context/ThemeContext';

describe('useTheme', () => {
	const wrapper = ({ children }: { children: React.ReactNode }) => <ThemeProvider>{children}</ThemeProvider>
	it('should change theme on light', () => {
		const { result } = renderHook(useTheme, { wrapper });

		act(() => {
			result.current.setTheme('light');
		});

		expect(result.current.theme).toBe('light');
	});
	it('should change theme on dark', () => {
		const { result } = renderHook(useTheme, { wrapper });
		
		act(() => {
			result.current.setTheme('dark');
		});

		expect(result.current.theme).toBe('dark');
	});
	it('should change localStorage theme', () => {
		
	});
});