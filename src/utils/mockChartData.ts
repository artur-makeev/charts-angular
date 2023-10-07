import { Measurement } from 'src/app/state/charts.types';

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const mockChartData: Measurement[] = Array.from({ length: 32 }, (v, k) => [
  Date.UTC(1990 + k, 0, 1),
  getRandomArbitrary(0, 150),
]);
