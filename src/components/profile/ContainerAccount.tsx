import CardOption from "./Card"
import IndicatorUser from "./IndicatorUser"
import { userStub } from "@/stub/optionStub";

interface Props {
  profileId: string
}

const ContainerAccount = ({ }: Props) => {
  return (
    <div className="flex flex-col bg-secondary-02 min-h-screen w-full justify-start pt-20">
      <h2 className="mx-auto text-black mt-8 lg:mt-0 max-w-80 lg:max-w-none mb-5 lg:mb-10 title-information text-center">
        Profile
      </h2>
      <div className="flex flex-col container xl:max-w-5xl w-full mx-auto  mt-5 justify-start">
        <IndicatorUser name={`${userStub.first_name} ${userStub.last_name}`} email={userStub.email} />
        <div className="text-black flex flex-wrap justify-start w-full gap-5 mb-20">
          <CardOption />
        </div>
      </div>
    </div>
  )
}

export default ContainerAccount
