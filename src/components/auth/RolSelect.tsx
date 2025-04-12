'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import {
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

import FieldSelectTab from '@/components/commons/fields/FieldSelectTab';
import { typeRole } from '@/models/user';

interface Props {
  onRegister: () => void;
  onClose: () => void;
}

interface Option {
  title: string;
  entity: typeRole;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
  >;
  handleClicked: (entity?: typeRole) => void;
}

const RolSelect = ({ onRegister, onClose }: Props) => {
  const router = useRouter();

  const handleRegister = (entity?: typeRole) => {
    router.push('/register');
    onClose();
  };

  const options: Option[] = [
    {
      title: 'Cliente',
      entity: 'client',
      description: 'Registrate para empezar a buscar servicios',
      icon: UserOutlined,
      handleClicked: onRegister,
    },
    {
      title: 'Profesional',
      entity: 'professional',
      description: 'Registrate para obtener clientes',
      icon: TeamOutlined,
      handleClicked: handleRegister,
    },
  ];

  return (
    <div className="base-form">
      <h2 className="whitespace-pre text-center text-2xl font-semibold leading-none tracking-tight text-gray-900">
        ¿Cómo te quieres registrar?
      </h2>
      <p className="text-balance text-center text-lg opacity-70">
        Elije una de las opciones para poder iniciar en ésta comunidad
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:gap-8">
        {options.map((rol) => (
          <FieldSelectTab
            key={rol.entity}
            onClick={() =>
              rol.handleClicked(rol.entity === 'client' ? undefined : rol.entity)
            }
            name={rol.entity}
            label={rol.entity}
          >
            <rol.icon className="text-xl" />
            <span className="text-center text-xl font-medium">{rol.title}</span>
            <span className="text-center text-xs font-medium">{rol.description}</span>
          </FieldSelectTab>
        ))}
      </div>
    </div>
  );
};

export default RolSelect;
