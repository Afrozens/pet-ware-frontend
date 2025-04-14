'use client'

import FieldDescription from "@/components/commons/fields/FieldDescription";
import FieldInput from "@/components/commons/fields/FieldInput";
import FieldPhone from "@/components/commons/fields/FieldPhone";
import FieldSelect from "@/components/commons/fields/FieldSelect";
import { montserrat } from "@/fonts";
import { optionType } from "@/stub/optionStub";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Steps, theme } from "antd";
import { CollapseProps } from "antd/lib";
import { Controller, useForm } from "react-hook-form";
    // first_name, last_name, document, type_document, email, phone_number, address, whatsapp, description of client

const RegisterProfessionalForm = () => {
    const { token } = theme.useToken();
    const { control } = useForm()

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: '#fafafa',
      borderRadius: token.borderRadiusLG,
      border: 'none',
    };
    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `;

        const itemsCollapse: CollapseProps['items'] = [
            {
              key: '1',
              label: 'Basic information',
              children: (
                <div className="flex flex-col gap-5 justify-start items-start w-full p-4">
                    <p className={`${montserrat.className} -mt-5 text-gray-800 font-light`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, impedit.
                    </p>
                    <div className="container-inputs">
                    <FieldInput
                        classAditional="w-full"
                        label={'Nombre del profesional'}
                        id="name"
                        name="name"
                        placeholder="Rafael"
                        isRequired
                    />
                    <FieldInput
                        classAditional="w-full"
                        label={'Apellido del profesional'}
                        id="name"
                        name="name"
                        placeholder="Rafael"
                        isRequired
                    />
                    </div>
                    <div className="container-inputs w-full">
                    <div className="md:grid w-full flex flex-col md:grid-cols-5 items-center gap-1">
                    <Controller
                        name="type_document"
                        control={control}
                        render={({ field }) => (
                        <FieldSelect
                            options={optionType}
                            classAditional="col-span-2"
                            field={field}
                            label={'Tipo de documento'}
                            placeholder="NIT"
                            id="type_document"
                            name="type_document"
                            isRequired
                            defaultValue={
                            optionType.filter((option) => option.value === field.value)[0]
                            }
                            isMultiple={false}
                        />
                        )}
                    />
                    <FieldInput
                        classAditional="col-start-3 col-end-6"
                        label={'Documento'}
                        type="number"
                        placeholder="10122012334"
                        name="document"
                        id="document"
                        isRequired
                    />
                    </div>
                </div>
                <FieldDescription label={"Experiencia como profesional"} id={"description"} name={"description"}  />
                    </div>
              ),
              style: panelStyle,
            },
            {
              key: '2',
              label: 'Contact information',
              children: (
                <div className="flex flex-col gap-5 justify-start items-start w-full p-4">
                <p className={`${montserrat.className} -mt-5 text-gray-800 font-light`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, impedit.
                </p>
                     <FieldInput
                        classAditional="w-full"
                        label={'email'}
                        type="email"
                        id="email"
                        name="email"
                        isRequired
                        placeholder="Correo@example.com"
                    />
                    <Controller
                        name="phone_number"
                        control={control}
                        render={({ field }) => (
                        <FieldPhone
                            isRequired
                            label={'phone number'}
                            field={field}
                            id="phone_number"
                            name="phone_number"
                        />
                        )}
                    />
                </div>
              ),
              style: panelStyle,
            },
            {
              key: '3',
              label: 'Login information',
              children: (
                <div className="flex flex-col gap-5 justify-start items-start w-full p-4">
                <p className={`${montserrat.className} -mt-5 text-gray-800 font-light`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, impedit.
                </p>
                <div className="container-inputs flex-col">
                  <FieldInput
                    label={'password'}
                    type="password"
                    name="password"
                    id="password"
                    isRequired
                    placeholder="••••••••••"
                  />
                  <FieldInput
                    label={'confirm-password'}
                    name="confirm_password"
                    type="password"
                    id="confirmPassword"
                    isRequired
                    placeholder="••••••••••"
                  />
                </div>
                </div>
              ),
              style: panelStyle,
            },
          ];
    const items = [
        {
          title: 'Basic info',
        },
        {
          title: 'Contact info',
        },
        {
          title: 'Login info',
        },
      ];
  return (
    <div className="flex flex-col max-w-3xl items-center justify-center w-full h-full">
        <Steps current={0} size="small" labelPlacement="vertical" items={items} />
        <Collapse className="w-full" bordered={false} accordion items={itemsCollapse} 
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} 
        />
    </div>
  )
}

export default RegisterProfessionalForm
