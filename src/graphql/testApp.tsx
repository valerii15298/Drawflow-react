import { gql } from "@apollo/client";
import { useBotFlowQuery } from "../generated/apollo";
import { cache } from "./index";

export const TestApp = () => {
  const { error, loading, data } = useBotFlowQuery({
    variables: { where: { id: 1 } },
    onCompleted() {
      // console.log(
      //   cache.readFragment({
      //     id: `FlowNode:1`,
      //     fragment: gql`
      //       fragment test2199 on FlowNode {
      //         info {
      //           name
      //         }
      //       }
      //     `,
      //   })
      // );
      // const y = cache.updateFragment(
      //   {
      //     id: `FlowNode:1`,
      //     fragment: gql`
      //       fragment test21 on FlowNode {
      //         info {
      //           id
      //         }
      //       }
      //     `,
      //   },
      //   (d) => {
      //     return d;
      //     console.log({ d });
      //     return {
      //       ...d,
      //       info: {
      //         ...d.info,
      //         id: 3,
      //       },
      //     };
      //   }
      // );
      // console.log({ y });
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
    },
  });
  // if (ff.data) {
  //   const ver = ff.data.botFlow.versions[0];
  //   console.log({ ver });
  // }
  //
  // const y = useFragment({
  //   id: `Connection:1`,
  //   fragment,
  // });
  // console.log({ y });

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...{loading}</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
