'use client';

import { useState } from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Steps, theme } from 'antd';
import { CollapseProps } from 'antd/lib';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import LoginInformation from './registerProfessional/LoginInformation';
import ContactInformation from './registerProfessional/ContactInformation';
import BasicInformation from './registerProfessional/BasicInformation';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';

const RegisterProfessionalForm = () => {
  const { token } = theme.useToken();
  const form = useForm();
  const t = useTranslations('components.register-professional')
  const [currentStep, setCurrentStep] = useState(0);
  const [activePanels, setActivePanels] = useState<string[]>(['1']);

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: '#fafafa',
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data, 'asd')
  }

  const handleNext = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setActivePanels([String(nextStep + 1)]);
  };

  const handlePrev = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    setActivePanels([String(prevStep + 1)]);
  };

  const itemsCollapse: CollapseProps['items'] = [
    {
      key: '1',
      label: t('first-step.title'),
      children: <BasicInformation handleNext={handleNext} />,
      style: panelStyle,
    },
    {
      key: '2',
      label: t('second-step.title'),
      children: <ContactInformation handlePrev={handlePrev} handleNext={handleNext} />,
      style: panelStyle,
    },
    {
      key: '3',
      label: t('third-step.title'),
      children: <form onSubmit={form.handleSubmit(onSubmit)}>
          <LoginInformation handlePrev={handlePrev} />
        </form>,
      style: panelStyle,
    },
  ];

  const items = [
    {
      title: t('first-step.title'),
    },
    {
      title: t('second-step.title'),
    },
    {
      title: t('third-step.title'),
    },
  ];

  return (
    <FormProvider {...form}>
      <div className="flex flex-col max-w-3xl gap-5 mb-10 -mt-5 items-center justify-center w-full h-full">
        <Steps
          current={currentStep}
          size="small"
          labelPlacement="vertical"
          items={items}
        />
        <Collapse
          className="w-full"
          bordered={false}
          activeKey={activePanels}
          items={itemsCollapse}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          onChange={(keys) => {}}
        />
      </div>
    </FormProvider>
  );
};

export default RegisterProfessionalForm;
