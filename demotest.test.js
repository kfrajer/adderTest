const superdemo = require('./demotest');
const cases = require('jest-in-case');

describe('Testing sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
	expect(superdemo.supersum(1, 2)).toBe(3);
    });

    cases('add(par1,par2)', opts => {
	expect(superdemo.supersum(opts.augend, opts.addend)).toBe(opts.total);
    }, [
	{ name: '1 + 1 = 2', augend: 1, addend: 1, total: 2 },
	{ name: '2 + 1 = 3', augend: 2, addend: 1, total: 3 },
	{ name: '3 + 1 = 4', augend: 3, addend: 1, total: 4 },
    ]);
    
});


describe('Testing subtraction', () => {
    
    cases('Subtract(augend, addend)', opts => {
	expect(superdemo.supersubstract(opts.par1, opts.par2)).toBe(opts.total);
    }, [
	{ name: ' 1 - 1    = 0',  par1: 1,  par2: 1,  total:  0 },
	{ name: '20 - 10   = 10', par1: 20, par2: 10, total: 10 },
	{ name: '-3 - (-1) = -2', par1: -3, par2: -1, total: -2 },
	{ name: ' 9 - 20   = -11', par1: 9, par2: 20, total: -11 },
    ]);   
    
});


describe('Testing absolute value', () => {
    
    test('Absolute value of -ve number', () => {
	expect(superdemo.superabs(-5)).toBe(5);
    });

    test('Absolute value of +ve number', () => {
	expect(superdemo.superabs(10)).toBe(10);
    });   
    
});



