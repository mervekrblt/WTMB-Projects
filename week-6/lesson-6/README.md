# WTMB-2019 6th LECTURE

## Test Driven Development

- Test driven development is opposed to software being developed first and test cases created later.

- Test *first*, Code *second*

## Unit Testing

Unit testing (component testing) is a level of software testing where individual units of a software are tested.

In this lecture we used ava framework 

- install ava `npm i ava --save-dev`

- creating test

```
import test from 'ava'

test(title:string, implementation)
```

- add watch and verbose in package.json `test: "ava --watch --verbose"`

- run test `npm run test`

## Integration Testing

is a level of software testing where individual units or components are combined and tested as a group.

## End-to-End Testing

The purpose of end-to-end testing is testing whole software for dependencies, data integrity and communication with other systems.