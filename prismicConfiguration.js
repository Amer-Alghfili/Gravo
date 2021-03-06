import Prismic from "prismic-javascript";
// -- Prismic Repo Name

export const repoName = "Gravo";

// -- Prismic API endpoint

// Determines which repository to query and fetch data from

// Configure your site's access point here

export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`;

// -- Access Token if the repository is not public

// Generate a token in your dashboard and configure it here if your repository is private

export const accessToken = process.env.ACCESS_TOKEN;

export const client = Prismic.client(apiEndpoint, { accessToken });
