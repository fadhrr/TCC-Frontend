import React from 'react';
import classNames from 'classnames';

const SectionContainer = ({ children, className }) => (
  <>
    <div className={classNames(' container mx-auto overflow-hidden sm:py-10', '   md:px-10', 'xl:min-w-full', className)}>
      <div className="px-8 mx-auto">{children}</div>
    </div>
  </>
);

export default SectionContainer;
