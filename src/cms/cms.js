import CMS from "netlify-cms-app";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerMediaLibrary(uploadcare);
