// import StrapiHelperClient from "./strapi-helper-client";
// import StrapiClient, { ApiConfiguration } from "./strapi-client";
// import MarketingClient from "./marketing-client";

// // TODO: later write a factor to create different clients

// type ClientType = "strapi" | "strapi-helper" | "marketing-service";

// export const createClient = (
//   type: ClientType,
// ): StrapiClient | StrapiHelperClient | MarketingClient => {
//   let apiConfig: ApiConfiguration | null = null;
//   switch (type) {
//     case "strapi":
//       apiConfig = {
//         baseUrl: process.env.STRAPI_HOST!,
//         accessToken: process.env.STRAPI_API_TOKEN,
//       };
//       return new StrapiClient(apiConfig);
//     case "strapi-helper":
//       apiConfig = {
//         baseUrl: process.env.STRAPI_HELPER_HOST!,
//       };
//       return new StrapiHelperClient(apiConfig);
//     case "marketing-service":
//       apiConfig = {
//         baseUrl: process.env.MARKETING_SERVICE_HOST!,
//       };
//       return new MarketingClient(apiConfig);
//   }
// };
