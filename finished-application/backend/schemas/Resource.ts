import { integer, select, text, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { rules, isSignedIn } from "../access";

export const Resource = list({
  // access: {
  //   create: isSignedIn,
  //   read: rules.canReadProducts,
  //   update: rules.canManageProducts,
  //   delete: rules.canManageProducts,
  // },
  fields: {
    name: text({ isRequired: true }),
    link: text(),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    user: relationship({
      ref: "User.resources",
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
  },
});
