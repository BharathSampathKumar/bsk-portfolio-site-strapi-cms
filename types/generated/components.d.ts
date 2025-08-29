import type { Schema, Struct } from '@strapi/strapi';

export interface MetadataContentTag extends Struct.ComponentSchema {
  collectionName: 'components_metadata_content_tags';
  info: {
    displayName: 'Content Tag';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
        minLength: 3;
      }>;
  };
}

export interface SeoPageMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_page_metadata';
  info: {
    displayName: 'OG data';
    icon: 'search';
  };
  attributes: {
    ogImg: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
        minLength: 10;
      }>;
    ogType: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'metadata.content-tag': MetadataContentTag;
      'seo.page-metadata': SeoPageMetadata;
    }
  }
}
