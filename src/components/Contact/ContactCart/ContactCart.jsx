import Tag from '../../Tag/Tag';

const ContactCart = () => {
  return (
    <div className="pt-3 pr-5 pb-6 pl-4 bg-gray-200 rounded-sm relative">
      <div className="flex gap-3">
        <img
          src="https://live.devnimble.com/api/avatars/person_default"
          alt="avatar"
          className="w-[59px] h-[59px] rounded-full"
        />
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex gap-1">
              <h3 className="contact__title">First name</h3>
              <h3 className="contact__title">last name</h3>
            </div>
            <div className="mb-1.5">
              <p className="contact__title">email@email.com</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Tag title={'Tag1'} />
            <Tag title={'Tag2'} />
          </div>
        </div>
      </div>
      <button className="absolute top-2.5 right-4 pointer">
        <img src="/icons/close.svg" />
      </button>
    </div>
  );
};

export default ContactCart;
