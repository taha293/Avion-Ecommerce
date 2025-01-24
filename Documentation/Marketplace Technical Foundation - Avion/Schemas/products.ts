// export default {
//     name: 'product',
//     type: 'document',
//     title: 'Product',
//     fields: [
//         { name: 'productId', type: 'number', title: 'Product ID' ,validation: (Rule) =>
//         Rule.required().error('This field is required.')},
//         { name: 'productName', type: 'string', title: 'Product Name' ,validation: (Rule) =>
//         Rule.required().error('This field is required.')},
//         { name: 'productDescription', type: 'string', title: 'Product Descripton' ,validation: (Rule) =>
//         Rule.required().error('This field is required.')},
//         { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'productName', maxLength: 96 } ,validation: (Rule) =>
//         Rule.required().error('This field is required.')},
//         { name: 'price', type: 'number', title: 'Price' ,validation: (Rule) =>
//         Rule.required().error('This field is required.')},
//         { name: 'stock', type: 'number', title: 'Stock' ,validation: (Rule) =>
//         Rule.required().error('This field is required.')},
//         { name: 'images', type: 'array', title: 'Images', of: [{ type: 'image' }] ,validation: (Rule) =>
//         Rule.required().error('This field is required.')},
//         { name: 'category', type: 'string', title: 'Category',validation: (Rule) =>
//         Rule.required().error('This field is required.') },

//     ],
// };