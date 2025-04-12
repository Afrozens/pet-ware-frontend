'use client';

import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { montserrat } from '@/fonts';
import { OptionsType } from '@/models/commons';
import FieldError from './FieldError';

type Props = {
  label: string;
  id: string;
  isMultiple: boolean;
  name: string;
  isRequired?: boolean;
  options?: OptionsType;
  error?: string;
  classAditional?: string;
  field?: ControllerRenderProps<any, string>;
  isDisabled?: boolean;
  placeholder?: string;
  isLoading?: boolean;
  defaultValue?: any;
  onChange?: (dataCurrent: any) => void;
};

const FieldSelect = ({
  classAditional,
  label,
  id,
  error,
  isRequired,
  isMultiple,
  options,
  name,
  defaultValue,
  placeholder,
  field,
  onChange,
  isLoading,
  isDisabled = false,
  ...props
}: Props) => {
  const animatedComponents = makeAnimated();
  const menuTarget = typeof document !== 'undefined' ? document.body : null;

  const onChangeSingle = (newValue: any) => {
    if (newValue.value) {
      field?.onChange(newValue.value);
      if (onChange) {
        onChange(newValue.value);
      }
    } else if (isMultiple) {
      field?.onChange([...newValue, field.value]);
      if (onChange) {
        onChange([...newValue]);
      }
    }
  };

  return (
    <div className={`${classAditional || ''} relative flex w-full items-center`}>
      {label === '' ? null : (
        <label
          className={`${montserrat.className} text-black z-10 font-semibold capitalize absolute left-10 top-3 text-xs -translate-y-1/2`}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <Select
        className="w-full capitalize"
        name={name}
        isDisabled={isDisabled}
        isLoading={isLoading}
        id={id}
        menuPosition="fixed"
        menuPlacement="auto"
        styles={{
          option: (styles, { data, isDisabled, isSelected, isFocused }) => ({
            ...styles,
            backgroundColor: isFocused ? '#4E3473' : isSelected ? '#4E3473' : '#fff',
            color: isSelected ? '#fff' : isFocused ? '#fff' : '#000',
          }),
          control: (base, state) => ({
            ...base,
            backgroundColor: error ? '#fef8f6' : 'rgb(249 249 249)',
            borderColor: error
              ? '#c13515'
              : state.isFocused
                ? 'rgb(72 135 239)'
                : '#d3d1d1',
            boxShadow: state.isFocused ? '0 0 0 2px rgb(72 135 239)' : 'none',
            paddingTop: '1rem',
            minHeight: '3rem',
            height: 'auto',
            flexWrap: 'wrap',
            outline: state.isFocused ? '2px solid transparent' : 'none',
            outlineOffset: state.isFocused ? '2px' : '0',
          }),
          multiValue: (base) => ({
            ...base,
            margin: '2px',
          }),
          multiValueRemove: (base) => ({
            ...base,
            cursor: 'pointer',
          }),
          menuPortal: (base) => ({ ...base, zIndex: 99999 }),
        }}
        components={animatedComponents}
        isMulti={isMultiple}
        options={options}
        onChange={onChangeSingle}
        placeholder={placeholder}
        menuPortalTarget={menuTarget}
        value={defaultValue || field?.value}
        {...props}
      />
      <FieldError error={error} />
    </div>
  );
};

export default FieldSelect;
