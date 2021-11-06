curl -X POST https://drawflow.ml:8090/admin/schema --data-binary '@src/graphql/schema.graphql'
get-graphql-schema https://drawflow.ml:8090/graphql > src/graphql/generatedSchema.graphql
pnpm codegen
