import CMS from 'netlify-cms';

import AboutPagePreview from '../templates/about/preview';
import BlogPostPreview from '../templates/blog/preview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
