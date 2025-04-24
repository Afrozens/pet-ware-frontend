'use client';

import { useEffect, useState } from 'react';
import type { RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';

import FieldInput from './FieldInput';
import { useDebounce } from '@/hooks/useDebounce';
import { getPlace } from '@/services/GoogleService';
import { Place } from '@/models/commons';

type AttributeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = {
  id: string;
  label: string;
  setValue: UseFormSetValue<any>;
  setValuePlaceId?: React.Dispatch<React.SetStateAction<string>>;
  name?: string;
  classAditional?: string;
  defaultValue?: string;
  register?: UseFormRegister<any>;
  error?: string | undefined;
  rules?: RegisterOptions;
  isRequired?: boolean;
} & AttributeProps;

const FieldAutoComplete = ({
  label,
  id,
  isRequired,
  classAditional,
  defaultValue,
  type,
  name,
  rules,
  error,
  register,
  setValue,
  setValuePlaceId,
  ...props
}: Props) => {
  const [place, setPlace] = useState('');
  const [notIntegrate, setNotIntegrate] = useState(false);
  const debouncedPlace = useDebounce<string>(place, 700);
  const { data } = useQuery({
    queryKey: ['place', debouncedPlace, notIntegrate],
    queryFn: async () => {
      if (notIntegrate) {
        const places = await getPlace(debouncedPlace);
        return places;
      }
    },
  });

  useEffect(() => {
    const placeId = localStorage.getItem('place');
    if (placeId) {
      setValue('placeId', placeId);
      setValuePlaceId && setValuePlaceId(placeId);
    }
  }, []);

  const handleAutoComplete = async (place: string, placeId: string) => {
    setNotIntegrate(false);
    setValue(name ?? 'location', place);
    localStorage.setItem('place', placeId);
    setValue('placeId', placeId);
    setValuePlaceId && setValuePlaceId(placeId);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setPlace(e.target.value);
      setNotIntegrate(true);
    } else {
      setNotIntegrate(false);
    }
  };

  const items: MenuProps['items'] = (data as Place)?.suggestions
    ? (data as Place).suggestions.map((place, index) => ({
        key: index,
        label: (
          <button
            onClick={() =>
              handleAutoComplete(
                place?.placePrediction?.text?.text,
                place.placePrediction.placeId,
              )
            }
            className="mb-1"
          >
            {place?.placePrediction?.text?.text}
          </button>
        ),
      }))
    : [
        {
          key: 1,
          label: (
            <div className="flex h-24 w-full items-center justify-center">
              <LoadingOutlined className="text-2xl" />
            </div>
          ),
        },
      ];

  return (
    <Dropdown open={notIntegrate} menu={{ items }} placement="bottom">
      <div className="w-full">
        <FieldInput
          label={label}
          name={name}
          error={error as string}
          register={register}
          rules={rules}
          onChange={handleChange}
          type="text"
          classAditional={classAditional}
          id={id}
          isRequired={isRequired}
          {...props}
        />
      </div>
    </Dropdown>
  );
};

export default FieldAutoComplete;
