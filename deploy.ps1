curl -X POST https://drawflow.ml:8090/admin/schema --data-binary '@src/apollo/schema.graphql'
git add .
git add *

tsc && vite build --base="/Drawflow-react/"
pnpx gh-pages -d dist

git commit
git push

