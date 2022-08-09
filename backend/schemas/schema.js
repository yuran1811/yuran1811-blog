import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import post from './post';
import author from './author';
import content from './content';

export default createSchema({
  name: 'blog-schema',
  types: schemaTypes.concat([post, author, content]),
});
