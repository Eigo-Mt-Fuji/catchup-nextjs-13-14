import type { SSTConfig } from "sst";

export default {
  config(input: any) {
    return {
      name: "my-app",
      region: "ap-northeast-1",
    };
  },
  stacks(app: any) {}
} satisfies SSTConfig;
