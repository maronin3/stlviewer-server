import User from "../../../models/User";
// import {
//   EmailSignInMutationArgs,
//   EmailSignInResponse
// } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
// import createJWT from "../../../utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (_, args: any): Promise<any> => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return {
            ok: false,
            error: "No user found with that email",
            token: null,
          };
        }
        console.log(password);
        // const checkPassword = await user.comparePassword(password);
        // if (checkPassword) {
        //   const token = createJWT(user.id);
        //   return {
        //     ok: true,
        //     error: null,
        //     token
        //   };
        // } else {
        //   return {
        //     ok: false,
        //     error: "Wrong password",
        //     token: null
        //   };
        // }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
