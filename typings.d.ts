export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    categories: [{
        _key: string;
        _ref: string;
        _type: string;
    }]
    author: {
        name: string;
        image: string;
    };

    description: string;
    mainImage: {
        asset: {
            url: string;
        }
    }

    slug: {
        current: string;
    }
}

export interface Category {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    title: string;

}
// _id: string;
// _createdAt: string;
// title: string;
// author:{
//     name: string;
//     image: string;
// };

// description: string;
// mainImage: {
//     asset:{
//         url: string;
//     }
// }

// slug: {
//     current: string;
// }

// body: [object]


// [categorys]: {
//     _createdAt: string;
//     _id: string;
//     _rev: string;
//     _type: string;
//     _updatedAt: string;
//     title: string;
// }