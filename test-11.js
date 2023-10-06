import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  // Key configurations for Soak test in this section
  vus: 100,
  duration: '10m',
};

export default () => {
  const urlRes = http.get('https://test-api.k6.io');
  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
   // Request page containing a form
  let res = http.get('https://httpbin.test.k6.io/forms/post');

  // Now, submit form setting/overriding some fields of the form
  res = res.submitForm({
    formSelector: 'form',
    fields: { custname: 'test', extradata: 'test2' },
  });
  sleep(3);
};
