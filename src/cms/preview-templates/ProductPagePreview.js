import React from 'react'
import PropTypes from 'prop-types'
import { ProductPostTemplate } from '../../templates/product-post'

const ProductPagePreview = ({ entry, widgetFor, getAsset}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ProductPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      image={getAsset(data.image)}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductPagePreview
