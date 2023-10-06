import http from 'k6/http';
import { check, group } from 'k6';

export let options = {
   stages: [
       { duration: '0.5m', target: 3 }, // simulate ramp-up of traffic from 1 to 3 virtual users over 0.5 minutes.
       { duration: '0.5m', target: 4}, // stay at 4 virtual users for 0.5 minutes
       { duration: '0.5m', target: 0 }, // ramp-down to 0 users
     ],
};

export default function () {
   group('API uptime check', () => {
       const response = http.get('https://aqueous-brook-60480.herokuapp.com/todos/');
       check(response, {
           "status code should be 200": res => res.status === 200,
       });
   });

   let todoID;
   group('Create a Todo', () => {
       const response = http.post('https://aqueous-brook-60480.herokuapp.com/todos/',
       {"task": "write k6 tests"}
       );
       todoID = response.json()._id;
       check(response, {
           "status code should be 200": res => res.status === 200,
       });
       check(response, {
           "response should have created todo": res => res.json().completed === false,
       });
   })
});
