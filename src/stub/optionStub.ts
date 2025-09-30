import { 
  HomeOutlined, 
  MedicineBoxOutlined, 
  CarOutlined, 
  HeartOutlined,
  ToolOutlined,
  ExperimentOutlined,
  CameraOutlined,
  SafetyOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  CrownOutlined,
  RocketOutlined,
  SoundOutlined,
  ForkOutlined,

} from '@ant-design/icons';

export const userStub = {
              id: 'asdua89s789sd79a7s9d',
              first_name: 'Eris',
              last_name: 'chacon',
              email: 'jesus@example.com',
              description: '',
              type_document: 'DNI',
              phone_number: "",
              roles_id: '1',
              active: true,
              address: '',
              document: '',
              verified_at: null,
              deleted_at: null,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              role: {
                name: 'admin',
                id: 'asdasd123123',
                description: 'regular user',
                created_at: "",
                deleted_at: null
              }
            }

export const petServiceCategories = [
  {
    label: 'Walking',
    value: 'walking',
    icon: SoundOutlined
  },
  {
    label: 'Daycare',
    value: 'daycare',
    icon: HomeOutlined
  },
  {
    label: 'Grooming',
    value: 'grooming',
    icon: ToolOutlined
  },
  {
    label: 'Training',
    value: 'training',
    icon: ThunderboltOutlined
  },
  {
    label: 'Veterinary',
    value: 'veterinary',
    icon: MedicineBoxOutlined
  },
  {
    label: 'Transport',
    value: 'transport',
    icon: CarOutlined
  },
  {
    label: 'Boarding',
    value: 'boarding',
    icon: SafetyOutlined
  },
  {
    label: 'Cat Care',
    value: 'cat-care',
    icon: ForkOutlined
  },
  {
    label: 'Emergency',
    value: 'emergency',
    icon: HeartOutlined
  },
  {
    label: 'Physio',
    value: 'physiotherapy',
    icon: TeamOutlined
  },
  {
    label: 'Exotic',
    value: 'exotic',
    icon: ExperimentOutlined
  },
  {
    label: 'Photography',
    value: 'photography',
    icon: CameraOutlined
  },
  {
    label: 'Spa',
    value: 'spa',
    icon: CrownOutlined
  },
  {
    label: 'Feeding',
    value: 'feeding',
    icon: RocketOutlined
  },
  {
    label: 'Bird Care',
    value: 'bird-care',
    icon: ExperimentOutlined
  }
];

export const optionLocation = [
  {
    label: 'Villa Central, Ciudad Guayana',
    value: '15481981912849012',
  },
  {
    label: 'Villa Colombia, Ciudad Guayana',
    value: '15481981912849012',
  },
  {
    label: 'Alta Vista Sur, Ciudad Guayana',
    value: '15481981912849012',
  },
];

export const optionService = [
  {
    label: 'Paseo de perros',
    value: 'paseo de perros',
  },
  {
    label: 'Guardería canina',
    value: 'guardería canina',
  },
  {
    label: 'Baño y grooming',
    value: 'baño y grooming',
  },
  {
    label: 'Adiestramiento básico',
    value: 'adiestramiento básico',
  },
];

export const optionPet = [
  {
    label: 'Dog',
    value: 'dog',
  },
  {
    label: 'Cat',
    value: 'cat',
  },
  {
    label: 'horse',
    value: 'Horse',
  },
];

export const optionType = [
  {
    label: 'V',
    value: 'v',
  },
  {
    label: 'RIF',
    value: 'rif',
  },
  {
    label: 'E',
    value: 'e',
  },
];
