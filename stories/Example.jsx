import React from 'react';
import PropTypes from 'prop-types';

export const Example = ({ booleanProperty1, booleanProperty2 }) => {
  const prop1 = booleanProperty1 ? 'enabled' : 'disabled';
  const prop2 = booleanProperty2 ? 'enabled' : 'disabled';
  return (
    <>
      <div>
        <text>
          Boolean Property 1 {prop1}
        </text>
      </div>

      <div>
        <text>
          Boolean Property 2 {prop2}
        </text>
      </div>
    </>
  );
};

Example.propTypes = {
  booleanProperty1: PropTypes.bool,
  booleanProperty2: PropTypes.bool,
};

Example.defaultProps = {
  booleanProperty1: true,
  booleanProperty2: false,
};
