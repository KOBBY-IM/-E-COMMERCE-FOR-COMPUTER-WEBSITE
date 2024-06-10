import React, { useState } from 'react';
import PropTypes from'prop-types';
import { StyleSheet, css } from 'aphrodite';

const ProductSpecRow = ({ isHeader, spec, value }) => {

  return (
    <tr className={isHeader ? css(styles.header) : css(styles.normal)}>
      {isHeader ?
      (value === null ? 
        (<th className={css(styles.thcenter)} colSpan="2">{spec}</th>) 
        : 
        (<>
          <th className={css(styles.th)}>{spec}</th>
          <th className={css(styles.th)}>{value}</th>
        </>)
      ) : 
      (<>
        <td className={css(styles.td)}>
          {spec}
        </td>
        <td className={css(styles.td)}>{value}</td>
      </>)
      }
    </tr>
  )
};

ProductSpecRow.propTypes = {
  isHeader: PropTypes.bool,
  spec: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

ProductSpecRow.defaultProps = {
  isHeader: false,
  value: null
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f5f5f5ab',
  },
  normal: {
    backgroundColor: '#d3d3d3',
  },
  thcenter: {
    borderBottom: '1px solid black',
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  th: {
    border: '1px solid grey',
    textAlign: 'left'
  },
  td: {
    textAlign: 'left'
  },
  rowChecked: {
    textAlign: 'left',
    backgroundColor: '#e6e4e4',
  }

});

export default ProductSpecRow;