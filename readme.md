# MongoDB + GraphQL + Nodejs + Typescript + Docker Test (Dennis Stephens)

## With docker

- Run Docker Desktop
- Run command `docker compose build`
- Run command `docker compose up`
- Project starts on port 4000.
- You can test graphql using (https://localhost:4000/graphql)
- Enjoy!

## The query to test the project.

- This is Query

```
  query Query($filter: DashboardInput) {
    getAllData(filter: $filter) {
      ingredient
      pizza
      coast
      sales
      unit
    }
  }
```

- This is variable

```
{
  "filter": {
    "start": "Jan, 1",
    "selected": null,
    "end": "Jan, 2"
  }
}
```
