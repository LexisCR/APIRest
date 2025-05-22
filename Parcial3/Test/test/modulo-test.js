//import assert from 'node:assert';
import { expect } from 'chai';
import { test } from 'node:test';
import * as areas from '../src/modulo.js';

test('Área de un triángulo', () => {
    const resultado = areas.areaTriangulo(2, 3);
    expect(resultado).to.equal(3);
});