import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: { displayMode: 'textarea' },
    }),
    photo: relationship({ ref: 'ProductImage.product' }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer(),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'status', 'price'],
    },
  },
});
