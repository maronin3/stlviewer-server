export const typeDefs = ["type EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!): EmailSignUpResponse!\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Query {\n  sayBye: String!\n  sayHello: String!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: string;
}

export interface Mutation {
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
