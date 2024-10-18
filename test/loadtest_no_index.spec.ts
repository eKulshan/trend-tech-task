import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

import { randomBytes } from 'k6/crypto';

const findFooDuration = new Trend('find_foo_duration');

const baseUrl = `http://localhost:3000`;

export const options = {
  vus: 10,
  duration: '10s',
};

export function setup() {
  const createRes = http.post(`${baseUrl}/foos/drop-name-index`);
  check(createRes, {
    'index created': (r) => r.status === 201,
  });
}

export default async function () {
  const name = randomBytes(8).toString();
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.get(`${baseUrl}/foos/${name}`, params);

  findFooDuration.add(response.timings.duration);

  sleep(1);
}
