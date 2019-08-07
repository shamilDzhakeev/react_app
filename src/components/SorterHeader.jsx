import React from 'react';
import { CloseButton, PrimaryButton } from './Buttons';

export default function SorterHeader() {
  return (
    <div className="sorter-header">
      <PrimaryButton label="<<" />
      <PrimaryButton label=">>" />
      <CloseButton />
    </div>
  );
}
