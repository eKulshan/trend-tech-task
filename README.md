## Requirements:

- Running MongoDB instance
- Installed k6

Create .env file in project root with MONGO_URI env variable.

## Loadtest without index
```k6 run test/loadtest_no_index.spec.ts > test/loadtest_no_index_result.txt```

## Loadtest with index
```k6 run test/loadtest_index.spec.ts > test/oadtest_index_result.txt```
