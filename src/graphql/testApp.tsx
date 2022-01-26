import { gql } from "@apollo/client";
import { useBotFlowQuery } from "../generated/apollo";
import { cache, data as cacheData } from "./index";

export const TestApp = () => {
  const { error, loading, data } = useBotFlowQuery({
    variables: { where: { id: 1 } },
    onCompleted() {
      console.log("On completed");
    },
  });

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...{loading}</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={() => {
          //@ts-ignore
          console.log(cacheData);
        }}
      >
        Show cache
      </button>
      <button
        onClick={() => {
          const y = cache.writeFragment({
            id: `Connection:2`,
            fragment: gql`
              fragment test2 on Connection {
                curvature
              }
            `,
            data: {
              curvature: "I am here bro:)",
            },
          });
          console.log({ y });
        }}
      >
        Merge curvature
      </button>
    </div>
  );
};
