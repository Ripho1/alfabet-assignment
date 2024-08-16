## Bet Slip home assignment

Assumptions - 

1. Checking if a bet is approved by the engine is chosen at random (I assume it also has to do with the current user therefore its also a parameter)
2. Any odds calculation is also done arbitrary
3. I do not handle API access errors
---
Browser support

- chrome
---
Additional packages -

1. mobx (mobx + mobx-react-lite)
2. react-icons
---
Primary folder structure

- `mockData` - json data
- `components` - components are stored in sub folders that share business logic
- `api` mocks server requests
---

## Run instructions

1. `npm i && npm run dev`
2. `http://localhst:5137`